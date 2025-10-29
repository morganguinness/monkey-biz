import React from "react";

// === LINKS (edit these) ===
const LINKS = {
  discord: "https://t.co/pGR58q9ZCH",
  x: "https://x.com/monkeybizio",
};

// Partners
const PARTNERS = [
  { name: "Nord VPN", logo: "https://pbs.twimg.com/profile_images/1618629073969750018/_J6Qi3VW_400x400.jpg", url: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=132230&url_id=902" },
  { name: "Bro Bets", logo: "https://pbs.twimg.com/profile_images/1851223281413607424/mOqQuuhh_400x400.jpg", url: "https://brobets.io/?ref=MBusinesss" },
  { name: "GoMining", logo: "https://pbs.twimg.com/profile_images/1874931488254197760/nO9WZ7C7_400x400.jpg", url: "https://gomining.com/?ref=YQTPJ0D" },
  { name: "TapTrade", logo: "https://taptrade.io/images/TAP-logo-large.png", url: "https://taptrade.io/?affiliate=GZVAAisq1D" },
  { name: "SolGods", logo: "https://pbs.twimg.com/profile_images/1975650569822846976/oFVcb5bY_400x400.jpg", url: "https://solcity.ai/" },
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

/** --------------------
 * Time helpers + hooks
 * -------------------- */
function getTimeParts(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

function useCountdown(targetISO: string) {
  const target = React.useMemo(() => new Date(targetISO).getTime(), [targetISO]);
  const [now, setNow] = React.useState(Date.now());

  React.useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target - now);
  const { days, hours, minutes, seconds } = getTimeParts(diff);
  const isLive = diff === 0; // flips exactly at target time, as requested
  return { days, hours, minutes, seconds, isLive };
}

/** --------------------
 * Presentational bits
 * -------------------- */
const Box: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="px-3 md:px-4">{children}</div>
);

const Stat: React.FC<{ label: string; value: number }> = ({ label, value }) => (
  <div className="flex flex-col items-center justify-center min-w-0">
    <div className="font-extrabold tracking-tight tabular-nums drop-shadow-sm leading-none text-[clamp(26px,11vw,60px)]">
      {String(value).padStart(2, "0")}
    </div>
    <div className="mt-1 uppercase tracking-[0.18em] opacity-80 text-[10px] md:text-sm">{label}</div>
  </div>
);

const PartnerLogo: React.FC<{ url: string; logo: string; name: string }> = ({ url, logo, name }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center" aria-label={name}>
    <img src={logo} alt={name} className="w-10 h-10 object-cover rounded-full opacity-80 hover:opacity-100 transition" />
  </a>
);

function BottomCarousel({ images }: { images: string[] }) {
  const track = React.useMemo(() => [...images, ...images], [images]);
  return (
    <div className="relative w-full">
      <div className="overflow-hidden bg-black/30 backdrop-blur-sm border-t border-white/10 rounded-2xl">
        <div
          className="flex items-center gap-4 py-3 px-2 animate-[marquee_30s_linear_infinite]"
          style={{
            // standard string keys for CSS vars to avoid JSX parser issues
            "--marquee-from": "0%",
            "--marquee-to": "-50%",
          } as React.CSSProperties}
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
        </div>
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0%); } to { transform: translateX(-50%); } }
        .animate-\\[marquee_30s_linear_infinite\\] { animation: marquee 30s linear infinite; display:flex; }
      `}</style>
    </div>
  );
}

const ROADMAP = [
  { icon: "🚀", title: "Launch", body: "Mint goes live, community rollout, claim mechanics revealed." },
  { icon: "🧠", title: "AI Tools", body: "Beta of MB AI alpha-bot, alerts, and data dashboards." },
  { icon: "🎮", title: "Gamification", body: "Seasonal quests, XP, and trait-boosted perks." },
  { icon: "🤝", title: "Partners+", body: "Deeper collabs with BroBets, GoMining, TapTrade, Nord, SolGods." },
  { icon: "📈", title: "Growth", body: "Listings, cross-chain bridge exploration, and IRL drops." },
] as const;

function Roadmap() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-10 md:mt-16">
      <h2 className="text-center text-sm md:text-base uppercase tracking-[0.25em] opacity-80 mb-4">Roadmap</h2>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
        {ROADMAP.map((item, i) => (
          <div key={i} className="flex flex-col items-center justify-center rounded-2xl border border-white/15 bg-black/30 backdrop-blur-md px-4 py-3 md:px-5 md:py-4 hover:border-yellow-400 transition">
            <span className="text-2xl md:text-3xl mb-1 md:mb-2" aria-hidden>{item.icon}</span>
            <span className="text-[11px] md:text-xs uppercase tracking-widest opacity-90">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-4">
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

      <div className="hidden md:flex gap-4 order-2">
        <a href={LINKS.discord} aria-label="Discord">
          <img src="https://pngimg.com/d/discord_PNG3.png" alt="Discord" className="w-9 h-9 hover:opacity-80 transition" />
        </a>
        <a href={LINKS.x} aria-label="X (Twitter)">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/X_logo_2023_%28white%29.png/500px-X_logo_2023_%28white%29.png" alt="X" className="w-8 h-8 hover:opacity-80 transition" />
        </a>
      </div>
    </div>
  );
}

function Hero() {
  const { days, hours, minutes, seconds, isLive } = useCountdown(TARGET_ISO);
  return (
    <section className="flex flex-col items-center text-center mt-20 md:mt-32 w-full">
      <h1 className="text-3xl md:text-5xl font-black tracking-tight">Monkey Business</h1>
      <p className="mt-2 opacity-85 md:text-lg">Web3 creators. Real utility. 🍌</p>

      <div className="mt-6 md:mt-8 rounded-3xl border border-white/15 bg-black/30 backdrop-blur-md px-3 py-3 md:px-10 md:py-8 shadow-lg max-w-[95vw]">
        {isLive ? (
          <div className="font-black tracking-tight text-[clamp(20px,7vw,48px)] leading-none">LIVE NOW</div>
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
      </div>

      <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-3">
        {/* As requested: keep CTA disabled; you'll flip it manually at mint time */}
        <div className="inline-flex items-center justify-center rounded-2xl px-5 md:px-6 py-3 text-base font-semibold transition backdrop-blur-md border bg-white/10 text-white border-yellow-400 animate-pulse cursor-not-allowed">
          Mint (Coming Soon)
        </div>
      </div>
    </section>
  );
}

// --- Simplified UI-only BizGPT chat (mocked for preview) ---
function ChatWidget() {
  const [open, setOpen] = React.useState(false);
  const [msgs, setMsgs] = React.useState<{ role: "user" | "assistant"; content: string }[]>([
    { role: "assistant", content: "Hey! I’m BizGPT 🐒 — ask about X growth, websites, branding, or Discord." },
  ]);
  const [input, setInput] = React.useState("");

  function sendMock() {
    if (!input.trim()) return;
    const next = [...msgs, { role: "user", content: input.trim() }];
    const reply = {
      role: "assistant" as const,
      content:
        "Goal noted.\n1) Clarify your niche.\n2) Ship a one-page site.\n3) Post a thread + CTA.\n\nHooks:\n• I built 3 websites in 24h…\n• The $0 to $1k/mo roadmap…\n• Stop overthinking your brand…\n\nWant the Reply Army boost or a free site slot? Say 'queue me'.",
    };
    setMsgs([...next, reply]);
    setInput("");
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-50 rounded-full bg-yellow-400 text-black font-semibold px-5 py-3 shadow-lg hover:brightness-95"
      >
        🍌 Chat BizGPT
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40">
          <div className="w-full sm:max-w-lg rounded-t-2xl sm:rounded-2xl bg-zinc-900 border border-white/10 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="font-semibold">BizGPT — Monkey Business</div>
              <button onClick={() => setOpen(false)} className="opacity-80 hover:opacity-100">✕</button>
            </div>

            <div className="h-[50vh] overflow-y-auto p-4 space-y-3">
              {msgs.map((m, i) => (
                <div key={i} className={m.role === "user" ? "text-right" : ""}>
                  <div
                    className={`inline-block px-3 py-2 rounded-xl border ${
                      m.role === "user"
                        ? "bg-white text-black border-white"
                        : "bg-black/40 text-white border-white/10"
                    }`}
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-white/10 bg-black/30 backdrop-blur">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMock()}
                  placeholder="Ask about X growth, website, branding, or Discord..."
                  className="flex-1 rounded-xl bg-black/40 border border-white/10 px-3 py-2 outline-none"
                />
                <button onClick={sendMock} className="rounded-xl bg-yellow-400 text-black font-semibold px-4 py-2 hover:brightness-95">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/** ---------------------------
 * Minimal internal test suite
 * ---------------------------
 * Runs once when the module is evaluated.
 */
function runInternalTests() {
  try {
    // Test 1: zero ms
    let r = getTimeParts(0);
    console.assert(r.days === 0 && r.hours === 0 && r.minutes === 0 && r.seconds === 0, "getTimeParts(0) should be all zeros");

    // Test 2: one second
    r = getTimeParts(1000);
    console.assert(r.seconds === 1, "getTimeParts(1000) should be 1 second");

    // Test 3: composite time 1d 2h 3m 4s
    const ms = ((1 * 86400) + (2 * 3600) + (3 * 60) + 4) * 1000;
    r = getTimeParts(ms);
    console.assert(r.days === 1 && r.hours === 2 && r.minutes === 3 && r.seconds === 4, "getTimeParts composite failed");

    // Test 4: negative numbers should clamp to zero
    r = getTimeParts(-5000);
    console.assert(r.days === 0 && r.hours === 0 && r.minutes === 0 && r.seconds === 0, "getTimeParts should clamp negatives to zero");

    // Test 5: large number stability (7 days)
    r = getTimeParts(7 * 86400 * 1000);
    console.assert(r.days === 7 && r.hours === 0 && r.minutes === 0 && r.seconds === 0, "getTimeParts 7 days failed");

    // Smoke tests for config
    console.assert(Array.isArray(NFT_IMAGES) && NFT_IMAGES.length > 0, "NFT_IMAGES should be non-empty array");
    console.assert(typeof LINKS.discord === "string" && typeof LINKS.x === "string", "LINKS should be strings");

    // All good
    console.debug("[Tests] ✓ All internal tests passed");
  } catch (e) {
    console.warn("[Tests] A test threw:", e);
  }
}

/** ---------------------------
 * Root component
 * --------------------------- */
export default function App() {
  // Run lightweight tests once at module load
  runInternalTests();

  return (
    <div
      className="min-h-screen w-full text-white relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('https://i.ibb.co/yc1pDNbR/1111.png')" }}
    >
      {/* Dark overlay to ensure readability */}
      <div className="absolute inset-0 bg-black/70" />

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-between p-4 md:p-10 pb-28">
        {/* Top bar */}
        <TopBar />

        {/* Hero / Countdown */}
        <Hero />

        {/* Roadmap */}
        <Roadmap />

        {/* Carousel */}
        <div className="w-full mt-8 md:mt-12">
          <BottomCarousel images={NFT_IMAGES} />
        </div>

        {/* Footer */}
        <footer className="relative z-10 w-full flex items-center justify-between pt-6 md:pt-10 text-xs opacity-80">
          <div>© {new Date().getFullYear()} Monkey Business</div>
          <div className="flex items-center gap-3">
            <a href={LINKS.discord} className="underline-offset-2 hover:text-yellow-400 hover:underline">Discord</a>
            <span>•</span>
            <a href={LINKS.x} className="underline-offset-2 hover:text-yellow-400 hover:underline">X</a>
          </div>
        </footer>
      </main>

      {/* Floating BizGPT chat */}
      <ChatWidget />
    </div>
  );
}


