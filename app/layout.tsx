import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { HEXHAD_SITE, MadeByHexhad } from "./components/Hexhad";
import { CONTACT, PLAY_URL, SITE_URL } from "./site";
import "./globals.css";

// Fonts are self-hosted (the files the app bundles), so pages make no font requests to third parties.
const geist = localFont({ src: "./fonts/Geist.ttf", weight: "100 900", variable: "--font-geist", display: "swap" });
const mono = localFont({ src: "./fonts/GeistMono.ttf", weight: "100 900", variable: "--font-mono", display: "swap" });
const abhaya = localFont({
  src: [
    { path: "./fonts/abhaya_libre_medium.ttf", weight: "500" },
    { path: "./fonts/abhaya_libre_bold.ttf", weight: "700" },
  ],
  variable: "--font-sinhala",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Akuru: type Sinhala the way it sounds",
    template: "%s · Akuru",
  },
  description:
    "Akuru is a light Sinhala and English keyboard for Android. Type Singlish and get Sinhala as you go. Offline, no permissions, free.",
  authors: [{ name: "HEXHAD", url: HEXHAD_SITE }],
  creator: "HEXHAD",
  publisher: "HEXHAD",
  openGraph: {
    title: "Akuru: type සිංහල the way it sounds",
    description: "A light Sinhala and English keyboard for Android. Offline, no permissions, free.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f5f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0b0d" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} ${mono.variable} ${abhaya.variable}`}>
      <body>
        <header className="site-header">
          <div className="header-inner">
            <Link href="/" className="brand">
              <Image src="/akuru-icon.png" alt="" width={28} height={28} />
              <span>Akuru</span>
            </Link>
            <nav aria-label="Main">
              <Link href="/#try" className="nav-hide-sm">
                Try it
              </Link>
              <Link href="/#features" className="nav-hide-sm">
                Features
              </Link>
              <Link href="/privacy">Privacy</Link>
              <a href={PLAY_URL} className="nav-cta">
                Get Akuru
              </a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="footer-inner">
            <Link href="/" className="brand brand-small">
              <Image src="/akuru-icon.png" alt="" width={22} height={22} />
              <span>Akuru</span>
            </Link>
            <nav className="footer-links" aria-label="Footer">
              <Link href="/privacy">Privacy policy</Link>
              <a href={`mailto:${CONTACT}`}>{CONTACT}</a>
            </nav>
          </div>
          <div className="footer-inner footer-studio">
            <MadeByHexhad />
            <span>© {new Date().getFullYear()} HEXHAD</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
