import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

// === LINKS (edit these) ===
const LINKS = {
  discord: "https://t.co/pGR58q9ZCH",
  x: "https://x.com/monkeybizio",
  mint: "https://yoursite.com/mint",
};

// Partners
const PARTNERS = [
  {
    name: "Nord VPN",
    logo: "https://pbs.twimg.com/profile_images/1618629073969750018/_J6Qi3VW_400x400.jpg",
    url: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=132230&url_id=902",
  },
  {
    name: "Bro Bets",
    logo: "https://pbs.twimg.com/profile_images/1851223281413607424/mOqQuuhh_400x400.jpg",
    url: "https://brobets.io/?ref=MBusinesss",
  },
  {
    name: "GoMining",
    logo: "https://pbs.twimg.com/profile_images/1874931488254197760/nO9WZ7C7_400x400.jpg",
    url: "https://gomining.com/?ref=YQTPJ0D",
  },
  {
    name: "TapTrade",
    logo: "https://taptrade.io/images/TAP-logo-large.png",
    url: "https://taptrade.io/?affiliate=GZVAAisq1D",
  },
  {
    name: "SolGods",
    logo: "https://pbs.twimg.com/profile_images/1975650569822846976/oFVcb5bY_400x400.jpg",
    url: "https://solcity.ai/",
  },
];

// NFT carousel images
const NFT_IMAGES = [
  "https://i.ibb.co/Kx3PDLqh/mb1.png",
  "https://i.ibb.co/HLRDBVYp/mb2.jpg",
  "https://i.ibb.co/4Z0bsdd7/mb3.png",
  "https://i.ibb.co/60Zp2QJr/mb4.jpg",
  "https://i.ibb.co/NdQMSgrJ/mb5.png",
  "https://i.ibb.co/RGCZJshv/mb6.jpg",
  "https://i.ibb.co/TxX9Vkhd/mb7.png",
  "https://i.ibb.co/whB4qQ6G/mb12.jpg",
  "https://i.ibb.co/hRJw0Tcr/mb11.jpg",
  "https://i.ibb.co/1GKMd2wx/mb8.jpg",
  "https://i.ibb.co/rf7wPHmY/mb9.png",
  "https://i.ibb.co/R4BkyTG2/mb10.png",
];

// Target: 5 Nov 2025 @ 20:00 UK (Nov = GMT, so use Z)
const TARGET_ISO = "2025-11-05T20:00:00Z";

// ---------- time helpers ----------
export function getTimeParts(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

function useCountdown(targetISO) {
  const target = useMemo(() => new Date(targetISO).getTime(), [targetISO]);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target - now);
  const { days, hours, minutes, seconds } = getTimeParts(diff);
  const isLive = diff === 0;
  return { days, hours, minutes, seconds, isLive };
}

const Stat = ({ label, value }) => (
  <div className="flex flex-col items-center justify-center px-4">
    <div className="text-5xl md:text-7xl font-extrabold tracking-tight tabular-nums drop-shadow-sm">
      {String(value).padStart(2, "0")}
    </div>
    <div className="mt-1 text-xs md:text-sm uppercase tracking-[0.2em] opacity-80">
      {label}
    </div>
  </div>
);

const PartnerLogo = ({ url, logo, name }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center"
    aria-label={name}
  >
    <img
      src={logo}
      alt={name}
      className="w-10 h-10 object-cover rounded-full opacity-80 hover:opacity-100 transition"
    />
  </a>
);

function BottomCarousel({ images }) {
  const track = [...images, ...images]; // seamless loop
  return (
    <div className="pointer-events-auto absolute bottom-0 left-0 right-0 z-[5]">
      <div className="absolute -top-10 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-black/60" />
      <div className="relative w-full overflow-hidden bg-black/30 backdrop-blur-sm border-t border-white/10">
        <motion.div
          className="flex items-center gap-4 py-3 px-2"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {track.map((src, i) => (
            <div key={i} className="shrink-0">
              <img
                src={src}
                alt="NFT preview"
                className="h-20 md:h-24 w-20 md:w-24 object-cover rounded-xl border border-white/20 shadow-sm hover:border-yellow-400 transition"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const { days, hours, minutes, seconds, isLive } = useCountdown(TARGET_ISO);

  // lightweight runtime tests
  useEffect(() => {
    try {
      const t1 = getTimeParts(((1 * 24 + 2) * 3600 + 3 * 60 + 4) * 1000);
      console.assert(
        t1.days === 1 && t1.hours === 2 && t1.minutes === 3 && t1.seconds === 4,
        "Test t1 failed",
        t1
      );
      const t2 = getTimeParts(0);
      console.assert(
        t2.days === 0 && t2.hours === 0 && t2.minutes === 0 && t2.seconds === 0,
        "Test t2 failed",
        t2
      );
      const t3 = getTimeParts(59 * 1000);
      console.assert(
        t3.seconds === 59 && t3.minutes === 0 && t3.hours === 0 && t3.days === 0,
        "Test t3 failed",
        t3
      );
      const t4 = getTimeParts(48 * 3600 * 1000);
      console.assert(
        t4.days === 2 && t4.hours === 0 && t4.minutes === 0 && t4.seconds === 0,
        "Test t4 failed",
        t4
      );
    } catch (e) {
      console.error("Self-tests failed:", e);
    }
  }, []);

  return (
    <div
      className="relative min-h-screen w-full text-white"
      style={{
        backgroundImage: "url('https://i.ibb.co/bYLHPRb/itscoming.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-between p-6 md:p-10 pb-28">
        {/* top bar */}
        <div className="w-full flex justify-between items-center">
          {/* partners */}
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wider opacity-70">
              Join our partners whilst you wait
            </span>
            <div className="flex gap-3 flex-wrap">
              {PARTNERS.map((partner, idx) => (
                <PartnerLogo key={idx} {...partner} />
              ))}
            </div>
          </div>

          {/* socials (icons only) */}
          <div className="flex gap-4">
            <a href={LINKS.discord} target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <img
                src="https://pngimg.com/d/discord_PNG3.png"
                alt="Discord"
                className="w-9 h-9 hover:opacity-80 transition"
              />
            </a>
            <a href={LINKS.x} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/X_logo_2023_%28white%29.png/500px-X_logo_2023_%28white%29.png"
                alt="X"
                className="w-8 h-8 hover:opacity-80 transition"
              />
            </a>
          </div>
        </div>

        {/* countdown */}
        <section className="flex flex-col items-center text-center mt-32 md:mt-44">
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 rounded-3xl border border-white/15 bg-black/30 backdrop-blur-md px-6 py-5 md:px-10 md:py-8 shadow-lg"
            aria-live="polite"
          >
            {isLive ? (
              <div className="text-3xl md:text-5xl font-black tracking-tight">LIVE NOW</div>
            ) : (
              <div className="flex items-center gap-4 md:gap-6">
                <Stat label="Days" value={days} />
                <div className="text-4xl md:text-6xl opacity-70">:</div>
                <Stat label="Hours" value={hours} />
                <div className="text-4xl md:text-6xl opacity-70">:</div>
                <Stat label="Mins" value={minutes} />
                <div className="text-4xl md:text-6xl opacity-70">:</div>
                <Stat label="Secs" value={seconds} />
              </div>
            )}
          </motion.div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={LINKS.mint}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold transition backdrop-blur-md border hover:border-yellow-400 hover:text-yellow-400 ${
                isLive
                  ? "bg-white text-black hover:bg-yellow-400 hover:text-black border-white"
                  : "bg-white/10 text-white border-white/20 cursor-not-allowed"
              }`}
              aria-disabled={!isLive}
            >
              {isLive ? "Mint Now" : "Mint (Coming Soon)"}
            </a>
          </div>
        </section>

        {/* footer */}
        <footer className="relative z-10 w-full flex items-center justify-between pt-10 text-xs opacity-80">
          <div>© {new Date().getFullYear()} It’s Coming</div>
          <div className="flex items-center gap-3">
            <a
              href={LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:text-yellow-400 hover:underline"
            >
              Discord
            </a>
            <span>•</span>
            <a
              href={LINKS.x}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:text-yellow-400 hover:underline"
            >
              X
            </a>
            <span>•</span>
            <a
              href={LINKS.mint}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:text-yellow-400 hover:underline"
            >
              Mint
            </a>
          </div>
        </footer>
      </main>

      <BottomCarousel images={NFT_IMAGES} />

      {/* subtle texture */}
      <div
        className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />
    </div>
  );
}
