import React from "react";

// === LINKS (edit these) ===
const LINKS = {
  discord: "https://t.co/pGR58q9ZCH",
  x: "https://x.com/monkeybizio",
  buy: "https://magiceden.io/marketplace/monkey_business",
};

// Community partners
const COMMUNITY_PROJECTS = [
  {
    key: "community",
    icon: "🌐",
    title: "Community",
    body:
      "You are entering into a supportive ecosystem of top Solana projects working together to grow and support one another.",
    partners: [
      {
        name: "SolGods",
        logo: "https://pbs.twimg.com/profile_images/1975650569822846976/oFVcb5bY_400x400.jpg",
        url: "https://solcity.ai/",
      },
      {
        name: "Battle Bros",
        logo: "https://pbs.twimg.com/profile_images/1920328990666960896/4QOnjC_I_400x400.jpg",
        url: "https://www.battlebros.io/",
      },
    ],
  },
];

const SUPPORTING_PARTNERS = [
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
];

/** --------------------
 * Small presentational helpers
 * -------------------- */
const PartnerLogo = ({ url, logo, name, className = "" }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center ${className}`}
    aria-label={name}
  >
    <img
      src={logo}
      alt={name}
      className="w-10 h-10 object-cover rounded-full opacity-80 hover:opacity-100 transition"
    />
  </a>
);

const Section = ({ eyebrow, title, children, className = "" }) => (
  <section className={`w-full max-w-6xl mx-auto ${className}`}>
    {eyebrow && (
      <div className="text-center text-[11px] uppercase tracking-[0.25em] opacity-70 mb-2">
        {eyebrow}
      </div>
    )}
    {title && (
      <h2 className="text-center text-2xl md:text-3xl font-semibold tracking-tight mb-6">
        {title}
      </h2>
    )}
    {children}
  </section>
);

/** --------------------
 * Content blocks
 * -------------------- */
const FEATURES = [
  {
    key: "dreamers",
    icon: "🌙",
    title: "Dreamers",
    body:
      "Our weekly space “What’s Your Dream?” gives back to the community — sharing 100% of royalties from select NFT traits to help dreamers achieve their goals.",
  },
  {
    key: "games",
    icon: "🎮",
    title: "Game Integrations",
    body:
      "Already featured in Battle Bros, with more games, raffles, and loot drops on the way. Play, win, and earn through expanding integrations.",
  },
  {
    key: "education",
    icon: "🎓",
    title: "Education",
    body:
      "With 12+ years in education, we empower newcomers with a Web3 Starter Kit and real-world financial literacy tools to build confidence and knowledge.",
  },
  {
    key: "drip",
    icon: "💧",
    title: "Drip",
    body:
      "Earn daily token drops in our Discord faucet. The more Monkeys you hold, the more rewards — including NFTs from partnered projects.",
  },
  {
    key: "tech",
    icon: "⚙️",
    title: "Tech",
    body:
      "Unlock growth with our AI Agents and Discord Bots, built to help holders monetize, grow their brand, and learn smarter in Web3.",
  },
  ...COMMUNITY_PROJECTS,
];

/** --------------------
 * Layout Components
 * -------------------- */
function Header() {
  return (
    <header className="w-full">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">🍌</span>
          <div className="font-semibold tracking-tight">Monkey Business</div>
        </div>
        <div className="flex items-center gap-3">
          <a href={LINKS.discord} aria-label="Discord">
            <img
              src="https://pngimg.com/d/discord_PNG3.png"
              alt="Discord"
              className="w-7 h-7 hover:opacity-80 transition"
            />
          </a>
          <a href={LINKS.x} aria-label="X">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/X_logo_2023_%28white%29.png/500px-X_logo_2023_%28white%29.png"
              alt="X"
              className="w-6 h-6 hover:opacity-80 transition"
            />
          </a>
          <a
            href={LINKS.buy}
            className="hidden md:inline-flex rounded-xl px-4 py-2 text-sm font-semibold bg-white text-black border border-white hover:bg-yellow-400 transition"
          >
            Buy Now
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <div className="w-full px-4 md:px-6 mt-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
        <div className="relative order-2 md:order-1">
          <div className="relative rounded-3xl border border-white/15 bg-black/40 backdrop-blur-xl p-3 shadow-2xl overflow-hidden">
            <img
              src="https://i.ibb.co/BVs9ZV30/Banana.jpg"
              alt="Banana"
              className="rounded-2xl w-full object-cover object-[5%_center]"
            />
          </div>
        </div>
        <div className="order-1 md:order-2 text-center md:text-left">
          <div className="text-[11px] uppercase tracking-[0.25em] opacity-70 mb-2">
            Future-focused. Community-first.
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            Build, Play, Learn — Together
          </h1>
          <p className="mt-3 md:mt-4 opacity-85 md:text-lg max-w-xl">
            Welcome to the community of grinders, dreamers, and builders pushing Web 3 forward.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3">
            <a
              href={LINKS.buy}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold transition backdrop-blur-md border bg-white text-black hover:bg-yellow-400 hover:text-black border-white shadow-lg"
            >
              Buy Now
            </a>
            <div className="flex items-center gap-3 opacity-90">
              <a href={LINKS.discord} aria-label="Discord">
                <img
                  src="https://pngimg.com/d/discord_PNG3.png"
                  alt="Discord"
                  className="w-8 h-8 hover:opacity-80 transition"
                />
              </a>
              <a href={LINKS.x} aria-label="X">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/X_logo_2023_%28white%29.png/500px-X_logo_2023_%28white%29.png"
                  alt="X"
                  className="w-7 h-7 hover:opacity-80 transition"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustBar() {
  return (
    <div className="w-full px-4 md:px-6 mt-10">
      <div className="max-w-6xl mx-auto rounded-2xl border border-white/10 bg-black/30 backdrop-blur p-3">
        <div className="text-center text-[10px] uppercase tracking-[0.25em] opacity-60 mb-3">
          Backed by partnerships
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {SUPPORTING_PARTNERS.map((p, i) => (
            <PartnerLogo key={i} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <Section eyebrow="What you get" title="Utility that stacks">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
        {FEATURES.map((f) => (
          <div
            key={f.key}
            className="rounded-3xl border border-white/15 bg-black/40 backdrop-blur-xl p-6 hover:border-yellow-400/70 transition text-center"
          >
            <div className="text-3xl mb-2" aria-hidden>
              {f.icon}
            </div>
            <div className="font-semibold text-lg tracking-tight mb-1">
              {f.title}
            </div>
            <p className="opacity-90 text-sm leading-relaxed mb-4">{f.body}</p>
            {f.partners && (
              <div className="flex flex-wrap justify-center items-center gap-4">
                {f.partners.map((p, i) => (
                  <PartnerLogo key={i} {...p} />
                ))}
                <span className="opacity-80 text-sm italic">and many more...</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

function CTA() {
  return (
    <Section className="mt-8">
      <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-black/30 to-black/60 backdrop-blur-xl p-6 md:p-10 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Ready to join the troop?
        </h3>
        <p className="opacity-85 mt-2 max-w-2xl mx-auto">
          Buy your Monkey and unlock partnerships, daily drip, education, and AI tools — all in one place.
        </p>
        <div className="mt-5 flex items-center justify-center gap-4">
          <a
            href={LINKS.buy}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold transition border bg-white text-black hover:bg-yellow-400 hover:text-black border-white shadow-lg"
          >
            Buy Now
          </a>
          <div className="flex items-center gap-3 opacity-90">
            <a href={LINKS.discord} aria-label="Discord">
              <img
                src="https://pngimg.com/d/discord_PNG3.png"
                alt="Discord"
                className="w-8 h-8 hover:opacity-80 transition"
              />
            </a>
            <a href={LINKS.x} aria-label="X">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/X_logo_2023_%28white%29.png/500px-X_logo_2023_%28white%29.png"
                alt="X"
                className="w-7 h-7 hover:opacity-80 transition"
              />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="w-full px-4 md:px-6 mt-12 mb-6">
      <div className="max-w-6xl mx-auto text-xs opacity-70 flex items-center justify-between">
        <div>© {new Date().getFullYear()} Monkey Business</div>
        <div className="flex items-center gap-3">
          <a
            href={LINKS.discord}
            className="underline-offset-2 hover:text-yellow-400 hover:underline"
          >
            Discord
          </a>
          <span>•</span>
          <a
            href={LINKS.x}
            className="underline-offset-2 hover:text-yellow-400 hover:underline"
          >
            X
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div
      className="min-h-screen w-full text-white relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('https://i.ibb.co/DDSMsRmK/Bananas.png')" }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10">
        <Header />
        <Hero />
        <TrustBar />
        <Features />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
