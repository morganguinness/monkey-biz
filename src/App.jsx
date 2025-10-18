import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

// === LINKS (edit these) ===
const LINKS = {
  discord: "https://t.co/pGR58q9ZCH",
  x: "https://x.com/monkeybizio",
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

// --- UI bits ---
const Box = ({ children }) => (
  <div className="px-3 md:px-4">{children}</div>
);
const Stat = ({ label, value }) => (
  <div className="flex flex-col items-center justify-center min-w-0">
    <div className="font-extrabold tracking-tight tabular-nums drop-shadow-sm leading-none text-[clamp(26px,11vw,60px)]">
      {String(value).padStart(2, "0")}
    </div>
    <div className="mt-1 uppercase tracking-[0.18em] opacity-80 text-[10px] md:text-sm">{label}</div>
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

function BottomCarousel({ images, fixed = false }) {
  const track = [...images, ...images];
  return (
    <div className={`${fixed ? "pointer-events-auto absolute bottom-0 left-0 right-0 z-[5]" : "relative w-full"}`}>
      {fixed ? (
        <div className="absolute -top-10 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-black/60" />
      ) : (
        <div className="h-6" />
      )}
      <div className={`overflow-hidden bg-black/30 backdrop-blur-sm border-t border-white/10 ${fixed ? "" : "rounded-2xl"}`}>
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

  return (
    <div
      className="relative min-h-screen w-full text-white"
      style={{
        backgroundImage: "url('https://i.ibb.co/bYLHPRb/itscoming.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-between p-4 md:p-10 pb-28">
        {/* Top bar (responsive) */}
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          {/* partners: horizontal row on all sizes */}
          <div className="order-2 md:order-1 flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wider opacity-70">Join our partners whilst you wait</span>
            <div className="flex flex-row flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
              {PARTNERS.map((partner, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <PartnerLogo {...partner} />
                </div>
              ))}
            </div>
          </div>

          {/* socials top-right on desktop, hidden on mobile */}
          <div className="hidden md:flex gap-4 order-2">
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

        <section className="flex flex-col items-center text-center mt-20 md:mt-40 w-full">
          {/* socials above timer on mobile only */}
          <div className="mb-4 md:hidden flex items-center justify-center gap-4">
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

          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-2 md:mt-4 rounded-3xl border border-white/15 bg-black/30 backdrop-blur-md px-3 py-3 md:px-10 md:py-8 shadow-lg max-w-[95vw] overflow-visible"
            aria-live="polite"
          >
            {isLive ? (
              <div className="font-black tracking-tight text-[clamp(20px,7vw,48px)] leading-none">
                LIVE NOW
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2 md:gap-6 px-1">
                <Box><Stat label="Days" value={days} /></Box>
                <div className="opacity-70 leading-none text-[clamp(18px,8.5vw,52px)]">:</div>
                <Box><Stat label="Hours" value={hours} /></Box>
                <div className="opacity-70 leading-none text-[clamp(18px,8.5vw,52px)]">:</div>
                <Box><Stat label="Mins" value={minutes} /></Box>
                <div className="opacity-70 leading-none text-[clamp(18px,8.5vw,52px)]">:</div>
                <Box><Stat label="Secs" value={seconds} /></Box>
              </div>
            )}
          </motion.div>

          {/* CTA */}
          <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-3">
            {isLive ? (
              <a
                href="https://yoursite.com/mint"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl px-5 md:px-6 py-3 text-base font-semibold transition backdrop-blur-md border bg-white text-black hover:bg-yellow-400 hover:text-black border-white"
              >
                Mint Now
              </a>
            ) : (
              <div
                className="inline-flex items-center justify-center rounded-2xl px-5 md:px-6 py-3 text-base font-semibold transition backdrop-blur-md border bg-white/10 text-white border-yellow-400 animate-pulse cursor-not-allowed"
              >
                Mint (Coming Soon)
              </div>
            )}
          </div>
        </section>

        <div className="w-full mt-8 md:mt-12">
          <BottomCarousel images={NFT_IMAGES} fixed={false} />
        </div>

        <footer className="relative z-10 w-full flex items-center justify-between pt-6 md:pt-10 text-xs opacity-80">
          <div>© {new Date().getFullYear()} Monkey Business</div>
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
          </div>
        </footer>
      </main>

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
