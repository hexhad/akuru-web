/**
 * Akuru's keyboard drawn in HTML, from the app's own theme and layout (ime/KeyTheme.kt, KeyboardView.kt, Layouts.kt):
 * same colours, 8dp keys, pill ?123 and Enter, Sinhala hints, Feather icons. Used instead of emulator screenshots,
 * whose rounded screen corners never lined up with a frame. Purely decorative: screen readers get the label only.
 */
type Mode = "si" | "en" | "clipboard" | "emoji";

const ROW1 = "qwertyuiop";
const ROW2 = "asdfghjkl";
const ROW3 = "zxcvbnm";
const SI1 = "ංවඑරටයඋඉඔප";
const SI2 = "අසඩෆගහජකල";
const SI3 = "සංචවබනම";

/** Feather icon paths (feather-icons 4.29), the set the app bundles. */
const ICONS = {
  clipboard: (
    <>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </>
  ),
  smile: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </>
  ),
  shift: (
    <>
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </>
  ),
  del: (
    <>
      <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
      <line x1="18" y1="9" x2="12" y2="15" />
      <line x1="12" y1="9" x2="18" y2="15" />
    </>
  ),
  enter: (
    <>
      <polyline points="9 10 4 15 9 20" />
      <path d="M20 4v7a4 4 0 0 1-4 4H4" />
    </>
  ),
  trash: (
    <>
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </>
  ),
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  feather: (
    <>
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
      <line x1="16" y1="8" x2="2" y2="22" />
      <line x1="17.5" y1="15" x2="9" y2="15" />
    </>
  ),
  coffee: (
    <>
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </>
  ),
  map: (
    <>
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </>
  ),
  hash: (
    <>
      <line x1="4" y1="9" x2="20" y2="9" />
      <line x1="4" y1="15" x2="20" y2="15" />
      <line x1="10" y1="3" x2="8" y2="21" />
      <line x1="16" y1="3" x2="14" y2="21" />
    </>
  ),
  flag: (
    <>
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </>
  ),
};

function Icon({ name, className }: { name: keyof typeof ICONS; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`akb-icon${className ? ` ${className}` : ""}`} aria-hidden>
      {ICONS[name]}
    </svg>
  );
}

function Letter({ c, si, digit, top }: { c: string; si?: string; digit?: string; top?: boolean }) {
  return (
    <div className={`akb-k${top ? " akb-top" : ""}`}>
      {c}
      {digit && <span className="akb-d">{digit}</span>}
      {si && <span className="akb-s">{si}</span>}
    </div>
  );
}

function Letters({ sinhala }: { sinhala: boolean }) {
  return (
    <>
      <div className="akb-row">
        {[...ROW1].map((c, i) => (
          <Letter key={c} c={c} si={sinhala ? SI1[i] : undefined} digit={String((i + 1) % 10)} top />
        ))}
      </div>
      <div className="akb-row akb-row-2">
        {[...ROW2].map((c, i) => (
          <Letter key={c} c={c} si={sinhala ? SI2[i] : undefined} />
        ))}
      </div>
      <div className="akb-row">
        <div className="akb-k akb-fn akb-w3">
          <Icon name="shift" />
        </div>
        {[...ROW3].map((c, i) => (
          <Letter key={c} c={c} si={sinhala ? SI3[i] : undefined} />
        ))}
        <div className="akb-k akb-fn akb-w3">
          <Icon name="del" />
        </div>
      </div>
      <div className="akb-row">
        <div className="akb-k akb-soft akb-w3">?123</div>
        <div className="akb-k akb-fn">
          <Icon name="smile" />
          <span className="akb-comma">,</span>
        </div>
        <div className="akb-k akb-fn akb-lang">
          <Icon name="globe" className="akb-globe" />
          <small lang={sinhala ? "si" : undefined}>{sinhala ? "සිං" : "EN"}</small>
        </div>
        <div className="akb-k akb-w8 akb-space" lang={sinhala ? "si" : undefined}>
          {sinhala ? "සිංහල" : "English"}
        </div>
        <div className="akb-k akb-fn">.</div>
        <div className="akb-k akb-accent akb-w3">
          <Icon name="enter" />
        </div>
      </div>
    </>
  );
}

const EMOJI = "😀😃😄😁😆😅🤣😂🙂🙃🫠😉😊😇🥰😍🤩😘🥲😋😛😜🤪😝🤑🤗🤭🫢🫣🤫🤔🫡";

function Panel({ tab }: { tab: "clipboard" | "emoji" }) {
  return (
    <div className="akb-panel">
      <div className="akb-tabs">
        <span className={`akb-pill${tab === "emoji" ? " akb-pill-on" : ""}`}>
          <Icon name="smile" /> Emoji
        </span>
        <span className={`akb-pill${tab === "clipboard" ? " akb-pill-on" : ""}`}>
          <Icon name="clipboard" /> Clipboard
        </span>
        {tab === "clipboard" && (
          <span className="akb-pill akb-pill-end">
            <Icon name="trash" /> Clear
          </span>
        )}
      </div>
      {tab === "clipboard" ? (
        <div className="akb-clips">
          <div className="akb-clip">
            <small>Code</small>
            <span className="akb-code">482913</span>
          </div>
          <div className="akb-clip">
            <small>Link</small>
            <span className="akb-link">akuru-web.vercel.app</span>
          </div>
          <div className="akb-clip akb-clip-wide" lang="si">
            මම කිරිබත් හැදුවා
          </div>
        </div>
      ) : (
        <div className="akb-emoji">
          <small>SMILEYS</small>
          <div className="akb-emoji-grid">
            {[...EMOJI].map((e, i) => (
              <span key={i}>{e}</span>
            ))}
          </div>
        </div>
      )}
      <div className="akb-panel-bar">
        <span className="akb-k akb-soft akb-abc">ABC</span>
        {tab === "emoji" && (
          <span className="akb-cats">
            <span className="akb-cat-on">
              <Icon name="smile" />
            </span>
            <Icon name="users" />
            <Icon name="feather" />
            <Icon name="coffee" />
            <Icon name="map" />
            <Icon name="hash" />
            <Icon name="flag" />
          </span>
        )}
        <span className="akb-k akb-fn akb-del">
          <Icon name="del" />
        </span>
      </div>
    </div>
  );
}

export function AkuruKeyboard({
  mode = "si",
  theme = "light",
  accent = "mint",
  text,
  label,
}: {
  mode?: Mode;
  theme?: "light" | "dark";
  accent?: "mint" | "ember";
  /** What the message field above the keyboard shows; the last word is underlined as Akuru's composing word. */
  text?: string;
  label: string;
}) {
  const words = text?.split(" ") ?? [];
  const composing = words.pop();
  const sinhalaText = text ? /[඀-෿]/.test(text) : false;
  return (
    <div className={`akb akb-${theme} akb-${accent}`} role="img" aria-label={label}>
      <div className="akb-in">
        {text !== undefined && (
          <div className="akb-field" lang={sinhalaText ? "si" : undefined}>
            <span>
              {words.length > 0 && `${words.join(" ")} `}
              <span className={mode === "si" ? "akb-composing" : undefined}>{composing}</span>
              <span className="akb-caret" />
            </span>
          </div>
        )}
        <div className="akb-deck">
          {mode === "si" || mode === "en" ? (
            <>
              <div className="akb-bar">
                <Icon name="clipboard" />
                <Icon name="settings" />
              </div>
              <Letters sinhala={mode === "si"} />
            </>
          ) : (
            <Panel tab={mode} />
          )}
        </div>
      </div>
    </div>
  );
}
