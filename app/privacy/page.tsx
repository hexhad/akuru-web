import type { Metadata } from "next";
import { CONTACT } from "../site";

/** Bump when the policy changes. Keep it in step with what the app actually does. */
const EFFECTIVE_DATE = "24 October 2026";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Akuru works entirely on your phone. It has no internet access and collects nothing.",
};

export default function Privacy() {
  return (
    <main className="doc wrap">
      <h1>Privacy policy</h1>
      <p className="faint">Effective {EFFECTIVE_DATE}</p>

      <h2>The short version</h2>
      <p>
        Akuru is a keyboard that runs entirely on your phone. It asks for no Android permissions, including internet
        access, so it cannot send anything you type anywhere. There is no account, no advertising and no analytics.
        HEXHAD collects no data from the app.
      </p>

      <h2>What you type</h2>
      <p>
        Like every keyboard, Akuru receives the keys you press so it can turn them into text. It turns Singlish into
        Sinhala in memory, on the phone, and hands the text to the app you are typing in. Akuru does not keep a record of
        what you type, and it learns no words from you.
      </p>
      <p>
        Android shows a standard notice when you turn on any keyboard, saying it may be able to collect what you type.
        Akuru does not, and with no internet access it has no way to send it anywhere.
      </p>

      <h2>Clipboard history</h2>
      <p>
        While Akuru is your keyboard, it keeps a history of text and images you copy, so you can paste them again. You can
        turn this off in Akuru&apos;s settings.
      </p>
      <ul>
        <li>The history is stored only in Akuru&apos;s private storage on your phone.</li>
        <li>It is excluded from Android cloud backup and from device-to-device transfer.</li>
        <li>
          Copies that apps mark as sensitive, and anything copied while you type in a password field or an incognito
          field, are never saved.
        </li>
        <li>It keeps up to 50 unpinned items. You can pin, delete or clear items at any time.</li>
        <li>
          When you paste a saved image into an app, Android gives that app temporary access to that one image. No other
          app can read the history.
        </li>
      </ul>

      <h2>Settings</h2>
      <p>
        Your choices (theme, accent, key height, sounds and so on) and your recently used emoji are stored on the phone,
        also excluded from backup.
      </p>

      <h2>Deleting your data</h2>
      <p>
        Clear the clipboard from the keyboard, or remove everything with Android Settings, Apps, Akuru, Storage, Clear
        storage. Uninstalling Akuru deletes all of it.
      </p>

      <h2>Children</h2>
      <p>Akuru collects no personal information from anyone, including children.</p>

      <h2>This website</h2>
      <p>
        This site loads no trackers, cookies or third-party fonts. The &quot;Try it&quot; box converts text in your
        browser and sends nothing. Like any web host, the server may keep standard access logs.
      </p>

      <h2>Changes</h2>
      <p>If this policy changes, the new version will be posted here with a new effective date.</p>

      <h2>Contact</h2>
      <p>
        Questions about privacy: <a href={`mailto:${CONTACT}`}>{CONTACT}</a>
      </p>
    </main>
  );
}
