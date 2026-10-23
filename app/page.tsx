import { ArrowRight, GooglePlayLogo, ShieldCheck, UserCircleMinus, WifiSlash } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { HeroIn } from "./components/HeroIn";
import { Reveal } from "./components/Reveal";
import { TryIt } from "./components/TryIt";
import { PLAY_URL, REQUIREMENTS } from "./site";

/** A real capture from the app (goldie's raw screenshots), shown in a flat phone outline. */
function Phone({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="phone">
      <Image src={src} alt={alt} width={720} height={1606} priority={priority} sizes="(max-width: 768px) 80vw, 360px" />
    </div>
  );
}

function GetAkuru({ large = false }: { large?: boolean }) {
  return (
    <a href={PLAY_URL} className={`btn btn-primary${large ? " btn-large" : ""}`}>
      <GooglePlayLogo size={20} weight="fill" aria-hidden />
      <span>Get Akuru</span>
    </a>
  );
}

const FEATURES = [
  {
    id: "english",
    title: "English is one tap away",
    body: "The globe key switches between සිංහල and English. Password, email and link fields always type English.",
    src: "/screens/english.png",
    alt: "Akuru in English mode, typing a reply in Google Messages",
  },
  {
    id: "clipboard",
    title: "Copied it? Paste it",
    body: "Clipboard history spots one-time codes and links. Pin what you need. Password fields are never saved.",
    src: "/screens/clipboard.png",
    alt: "Akuru's clipboard with a verification code and a Sinhala message",
  },
  {
    id: "emoji",
    title: "Every emoji, close by",
    body: "Categories and recents, drawn in your phone's own emoji.",
    src: "/screens/emoji.png",
    alt: "Akuru's emoji panel",
  },
  {
    id: "themes",
    title: "Make it yours",
    body: "Light or dark, four accents and three key heights.",
    src: "/screens/themes.png",
    alt: "Akuru's settings with the dark theme and the Ember accent",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero wrap">
        <HeroIn className="hero-copy">
          <h1>
            Type <span lang="si" className="si">සිංහල</span> the way it sounds.
          </h1>
          <p className="lede">
            Akuru is a light Sinhala and English keyboard for Android. Write in English letters and it writes Sinhala as
            you go.
          </p>
          <div className="hero-actions">
            <GetAkuru large />
            <a href="#try" className="btn btn-quiet">
              <span>Try it here</span>
              <ArrowRight size={16} aria-hidden />
            </a>
          </div>
        </HeroIn>
        <HeroIn className="hero-shot" delay={0.12}>
          <Phone
            src="/screens/singlish.png"
            alt="Akuru typing ඔව් අම්මා මම දැන් එනවා in a chat with Amma"
            priority
          />
        </HeroIn>
      </section>

      <section id="try" className="section wrap">
        <Reveal>
          <h2>Try it before you install it.</h2>
          <p className="section-lede">
            This box runs the same Singlish rules as the keyboard. ං before k, h and s, ඟ ඹ ඳ ඬ where they belong, and r
            or y joining the letter before them.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <TryIt />
        </Reveal>
      </section>

      <section id="features" className="section wrap">
        <Reveal>
          <h2>Everything a keyboard needs, nothing it doesn&apos;t.</h2>
        </Reveal>
        <div className="bento">
          {FEATURES.map((f, i) => (
            <Reveal key={f.id} delay={i * 0.06} className={`tile tile-${f.id}`}>
              <div className="tile-copy">
                <h3>{f.title}</h3>
                <p className="muted">{f.body}</p>
              </div>
              <div className="tile-shot">
                <Image src={f.src} alt={f.alt} width={720} height={1606} sizes="(max-width: 768px) 70vw, 300px" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section wrap privacy-band">
        <Reveal>
          <h2>
            No permissions.
            <br />
            Not even the internet.
          </h2>
        </Reveal>
        <div className="facts">
          <Reveal className="fact">
            <WifiSlash size={28} aria-hidden />
            <h3>Nothing leaves your phone</h3>
            <p className="muted">Akuru has no internet access at all, so what you type stays with you.</p>
          </Reveal>
          <Reveal className="fact" delay={0.06}>
            <UserCircleMinus size={28} aria-hidden />
            <h3>No account, no ads</h3>
            <p className="muted">No sign-in, no analytics, no tracking. It is a keyboard and that is all.</p>
          </Reveal>
          <Reveal className="fact" delay={0.12}>
            <ShieldCheck size={28} aria-hidden />
            <h3>Careful with your clipboard</h3>
            <p className="muted">History stays on the phone, is never backed up, and skips passwords.</p>
          </Reveal>
        </div>
      </section>

      <section className="section wrap setup">
        <Reveal>
          <h2>Ready in a minute.</h2>
          <ol className="steps">
            <li>
              <strong>Install</strong>
              <span className="muted">Free on Google Play.</span>
            </li>
            <li>
              <strong>Turn it on</strong>
              <span className="muted">Open Akuru and follow the two steps.</span>
            </li>
            <li>
              <strong>Type</strong>
              <span className="muted">Try it in the box right there, then anywhere.</span>
            </li>
          </ol>
          <div className="setup-cta">
            <GetAkuru large />
            <span className="faint">{REQUIREMENTS}. Also reads every key aloud with TalkBack.</span>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
