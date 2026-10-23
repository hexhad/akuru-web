"use client";

import { Check, Copy } from "@phosphor-icons/react";
import { useId, useState } from "react";
import { transliterate } from "../lib/singlish";

const EXAMPLES = ["mama gedhara yanavaa", "aayuboovan", "shrii lankaava", "kohomadha oyaata?", "sthuthiyi"];

/** A few of the rules people ask about first. The full guide is in the app's settings. */
const GUIDE: [string, string][] = [
  ["d", "ඩ"],
  ["dh", "ද"],
  ["th", "ත"],
  ["aa", "ා"],
  ["ae", "ැ"],
  ["ng + a", "ඟ"],
  ["shr", "ශ්‍ර"],
  ["\\k", "k"],
];

/** Live Singlish box. Uses the same engine as the keyboard, so what you see here is what Akuru types. */
export function TryIt() {
  const [roman, setRoman] = useState(EXAMPLES[0]);
  const [copied, setCopied] = useState(false);
  const id = useId();
  const sinhala = transliterate(roman);

  async function copy() {
    try {
      await navigator.clipboard.writeText(sinhala);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="try">
      <div className="try-panel">
        <label htmlFor={id} className="try-label">
          Type in English letters
        </label>
        <textarea
          id={id}
          className="try-input"
          value={roman}
          onChange={(e) => setRoman(e.target.value)}
          rows={2}
          spellCheck={false}
          autoCapitalize="off"
          autoCorrect="off"
          autoComplete="off"
          placeholder="mama gedhara yanavaa"
        />
        <div className="try-examples" role="group" aria-label="Examples">
          {EXAMPLES.map((ex) => (
            <button
              key={ex}
              type="button"
              className="chip"
              aria-pressed={roman === ex}
              onClick={() => setRoman(ex)}
            >
              {ex}
            </button>
          ))}
        </div>
      </div>

      <div className="try-out">
        <div className="try-label">Akuru types</div>
        <output htmlFor={id} className="try-sinhala" lang="si" aria-live="polite">
          {sinhala || <span className="try-empty">සිංහල</span>}
        </output>
        <button type="button" className="try-copy" onClick={copy} disabled={!sinhala}>
          {copied ? <Check size={16} weight="bold" /> : <Copy size={16} />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>

      <dl className="guide">
        {GUIDE.map(([r, s]) => (
          <div key={r} className="guide-row">
            <dt>{r}</dt>
            <dd lang="si">{s}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
