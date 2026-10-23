// SPDX-License-Identifier: GPL-3.0-or-later
/**
 * Akuru's Singlish -> Sinhala engine, ported line for line from the app
 * (singlish/SinglishEngine.kt + SinglishTable.kt) so the "Try it" box types exactly what the keyboard does.
 */

const consonants: [string, string][] = [
  ["chh", "ඡ"], ["kh", "ඛ"], ["gh", "ඝ"], ["ch", "ච"], ["jh", "ඣ"], ["ny", "ඤ"], ["Ny", "ඤ"],
  ["gn", "ඥ"], ["Gn", "ඥ"], ["jn", "ඥ"],
  ["th", "ත"], ["Th", "ථ"], ["dh", "ද"], ["Dh", "ධ"], ["ph", "ඵ"], ["bh", "භ"],
  ["sh", "ශ"], ["Sh", "ෂ"],
  ["k", "ක"], ["K", "ඛ"], ["g", "ග"], ["G", "ඝ"], ["c", "ච"], ["C", "ඡ"], ["j", "ජ"], ["J", "ඣ"],
  ["t", "ට"], ["T", "ඨ"], ["d", "ඩ"], ["D", "ඪ"], ["N", "ණ"], ["n", "න"],
  ["p", "ප"], ["P", "ඵ"], ["b", "බ"], ["B", "භ"], ["m", "ම"],
  ["y", "ය"], ["r", "ර"], ["l", "ල"], ["L", "ළ"], ["v", "ව"], ["w", "ව"],
  ["s", "ස"], ["S", "ෂ"], ["h", "හ"], ["f", "ෆ"], ["z", "ස"], ["X", "ඞ"],
];

const prenasal: [string, string][] = [["ndh", "ඳ"], ["nd", "ඬ"], ["ng", "ඟ"], ["mb", "ඹ"]];

/** Roman -> [independent vowel, vowel sign after a consonant]. */
const vowels: [string, [string, string]][] = [
  ["Ruu", ["ඎ", "ෲ"]], ["aee", ["ඈ", "ෑ"]],
  ["Ru", ["ඍ", "ෘ"]], ["aa", ["ආ", "ා"]], ["Aa", ["ඈ", "ෑ"]], ["ae", ["ඇ", "ැ"]],
  ["ii", ["ඊ", "ී"]], ["uu", ["ඌ", "ූ"]], ["ee", ["ඒ", "ේ"]], ["oo", ["ඕ", "ෝ"]],
  ["Ai", ["ඓ", "ෛ"]], ["Au", ["ඖ", "ෞ"]],
  ["a", ["අ", ""]], ["A", ["ඇ", "ැ"]], ["i", ["ඉ", "ි"]], ["u", ["උ", "ු"]],
  ["e", ["එ", "ෙ"]], ["o", ["ඔ", "ො"]],
];

const signs: Record<string, string> = { x: "ං", q: "ං", H: "ඃ" };
const anusvaraBefore = new Set(["k", "h", "s"]);
const HAL = "්";
const ZWJ = "‍";
const ANUSVARA = "ං";
const MAX_KEY = 3;

const consonantMap = new Map(consonants);
const vowelMap = new Map(vowels);

type Hit<V> = [key: string, value: V];

/** Longest key in `table` at `i`; if none, retries with the first letter lowercased. */
function longest<V>(s: string, i: number, table: Map<string, V>, fallback = true): Hit<V> | null {
  if (i >= s.length) return null;
  for (let len = Math.min(MAX_KEY, s.length - i); len >= 1; len--) {
    const key = s.slice(i, i + len);
    const v = table.get(key);
    if (v !== undefined) return [key, v];
  }
  const c = s[i];
  if (fallback && c !== c.toLowerCase()) {
    const lowered = c.toLowerCase() + s.slice(i + 1);
    for (let len = Math.min(MAX_KEY, lowered.length); len >= 1; len--) {
      const v = table.get(lowered.slice(0, len));
      if (v !== undefined) return [s.slice(i, i + len), v];
    }
  }
  return null;
}

const vowelAt = (s: string, i: number) => longest(s, i, vowelMap);
const consonantAt = (s: string, i: number) => longest(s, i, consonantMap);

function prenasalAt(s: string, i: number): Hit<string> | null {
  for (const [key, value] of prenasal) {
    if (s.startsWith(key, i) && vowelAt(s, i + key.length) !== null) return [key, value];
  }
  return null;
}

export function transliterate(s: string): string {
  let out = "";
  let i = 0;
  let afterVowel = false;
  while (i < s.length) {
    const ch = s[i];
    if (ch === "\\") {
      out += i + 1 < s.length ? s[i + 1] : "\\";
      i += 2;
      afterVowel = false;
      continue;
    }
    if (signs[ch]) {
      out += signs[ch];
      i++;
      afterVowel = false;
      continue;
    }
    if (ch === "n" && i + 1 < s.length && anusvaraBefore.has(s[i + 1])) {
      out += ANUSVARA;
      i++;
      afterVowel = false;
      continue;
    }

    // An exact vowel (Ru, Ai, A ...) wins over a capital falling back to a lowercase consonant.
    const consonant = longest(s, i, vowelMap, false) !== null ? null : (prenasalAt(s, i) ?? consonantAt(s, i));
    if (consonant) {
      i += consonant[0].length;
      out += consonant[1];
      const sign = vowelAt(s, i);
      if (sign) {
        out += sign[1][1];
        i += sign[0].length;
        afterVowel = true;
        continue;
      }
      const next = consonantAt(s, i);
      const joins =
        next !== null &&
        (next[0] === "r" || next[0] === "y") &&
        next[0] !== consonant[0] &&
        consonant[0] !== "r" &&
        vowelAt(s, i + 1) !== null;
      if (joins) {
        out += HAL + ZWJ + next[1];
        i += 1;
        const v = vowelAt(s, i)!;
        out += v[1][1];
        i += v[0].length;
        afterVowel = true;
      } else {
        out += HAL;
        afterVowel = false;
      }
      continue;
    }

    const vowel = vowelAt(s, i);
    if (vowel) {
      out += afterVowel && vowel[0] === "i" ? "යි" : afterVowel && vowel[0] === "u" ? "වු" : vowel[1][0];
      i += vowel[0].length;
      afterVowel = true;
      continue;
    }

    out += ch;
    i++;
    afterVowel = false;
  }
  return out;
}
