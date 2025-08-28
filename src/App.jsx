import React, { useState, useEffect } from "react";
import { ArrowRight, Gamepad2, Images, Twitter, Users, Calendar, Settings, X as CloseIcon, ChevronLeft, ChevronRight, Send } from "lucide-react";

const LOGO_SRC = "https://monkeyplanner.carrd.co/assets/images/image19.jpg?v=b414956b"; // external logo URL provided by user

const SECTIONS = [
  {
    id: "welcome",
    title: "Welcome",
    image: "https://monkeyplanner.carrd.co/assets/images/image04.jpg?v=78a110ae",
    eyebrow: null,
    blurb:
      "A playful hub for partners, builders, NFTs, and games. Where ideas go bananas and community comes first.",
    cta: { label: "Join the Discord", href: "https://discord.com/invite/yarVDEMNjm" },
  },
  {
    id: "nfts",
    title: "NFTs",
    image: "https://monkeyplanner.carrd.co/assets/images/image20.jpg?v=c0a9e424",
    blurb:
      "Coming Soon — Our very own NFT collection. Holders of our NFT become members of the business. The art work alone is outstanding, but the utility is even hotter.",
  },
  {
    id: "games",
    title: "Games",
    image: "https://monkeyplanner.carrd.co/assets/images/image01.jpg?v=78a110ae",
    blurb:
      "Play-4-Fun. Play-2-Win. Whichever suits your project best. All games are made to represent your project, engage the community and onboard newbies.",
  },
    {
    id: "creative-studio",
    title: "Creative Studio",
    image: "https://monkeyplanner.carrd.co/assets/images/image03.jpg?v=78a110ae",
    blurb:
      "Monkey Business offers all projects at all stages their services.",
  },
  {
    id: "partners",
    title: "Partners",
    image: "https://monkeyplanner.carrd.co/assets/images/image02.jpg?v=78a110ae",
    blurb:
      "Our jungle grows with strong collaborations. Already we have partnered up with the following projects.",
  },

  {
    id: "spaces",
    title: "Spaces",
    image: "https://monkeyplanner.carrd.co/assets/images/image09.jpg?v=78a110ae",
    blurb:
      "Jump into Spaces — IRL & URL. AMAs, collab calls, watch parties, and strategy huddles.",
  }
];

// Example content lists (swap these with your real items)
const NFT_ITEMS = [
  { title: "Monkey Biz #1", img: "https://monkeyplanner.carrd.co/assets/images/image14.jpg?v=b8d8129a" },
  { title: "Monkey Biz #2", img: "https://monkeyplanner.carrd.co/assets/images/image13.jpg?v=b8d8129a" },
  { title: "Monkey Biz #3", img: "https://monkeyplanner.carrd.co/assets/images/image15.jpg?v=b8d8129a" },
];

const GAME_ITEMS = [
  { title: "Turtz", img: "https://pbs.twimg.com/profile_images/1954715641878814720/VYZhwmdt_400x400.jpg", href: "https://turtz.netlify.app/" },
  { title: "Planet X Invader", img: "https://monkeyplanner.carrd.co/assets/images/image17.jpg?v=e7d2872f", href: "https://planetxinvader.netlify.app/" },
  { title: "Decent Ducks", img: "https://pbs.twimg.com/profile_images/1947055552904716288/obGq_WEQ_400x400.jpg", href: "https://decentducks.netlify.app/" },
];

// Partners are now data-driven for easy edits
const PARTNER_ITEMS = [
  { title: "$TURTZ", img: "https://pbs.twimg.com/profile_images/1954715641878814720/VYZhwmdt_400x400.jpg", href: "https://x.com/SeaTurtz" },
  { title: "PLANET X ALIENS", img: "https://pbs.twimg.com/profile_images/1920581201733054464/Cdp83l6K_400x400.png", href: "https://x.com/PlanetXAliens" },
  { title: "SOL GODS", img: "https://pbs.twimg.com/profile_images/1926961141948850176/e_chj-33_400x400.jpg", href: "https://x.com/SOLGodNFTs" },
];

function Lightbox({ open, onClose, img, title, onPrev, onNext }) {
  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, onPrev, onNext]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4" onClick={onClose}>
      {/* Close (X) */}
      <button
        aria-label="Close"
        className="absolute right-4 top-4 rounded-full bg-white p-2 text-black shadow hover:bg-neutral-200"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
      >
        <CloseIcon className="h-5 w-5" />
      </button>

      {/* Prev */}
      <button
        aria-label="Previous"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-black shadow hover:bg-white"
        onClick={(e) => { e.stopPropagation(); onPrev?.(); }}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Next */}
      <button
        aria-label="Next"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-black shadow hover:bg-white"
        onClick={(e) => { e.stopPropagation(); onNext?.(); }}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="max-h-[96vh] max-w-[96vw] overflow-hidden rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <img src={img} alt={title} className="max-h-[90vh] max-w-[96vw] h-auto w-auto bg-black object-contain" />
      </div>
    </div>
  );
}

function ItemCard({ title, img, href, onClick }) {
  const Wrapper = ({ children }) =>
    href ? (
      <a href={href} className="group block" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <button type="button" onClick={onClick} className="group block text-left">
        {children}
      </button>
    );

  return (
    <Wrapper>
      <div className="group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
        <div className="relative h-40 w-full md:h-48">
          <img src={img} alt={title} className="h-full w-full object-cover" loading="lazy" decoding="async" />
          {href && (
            <span className="pointer-events-none absolute right-2 top-2 rounded-full bg-black/70 px-2 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
              Play now →
            </span>
          )}
        </div>
        <div className="px-3 py-2">
          <div className="text-sm font-semibold text-neutral-900 group-hover:underline">{title}</div>
        </div>
      </div>
    </Wrapper>
  );
}

function BrandLogo({ src, label = "Monkey Business", small = false }) {
  const [error, setError] = useState(false);
  return (
    <span className="flex items-center gap-2 font-extrabold">
      {!error ? (
        <img
          src={src}
          alt={`${label} logo`}
          className={`rounded-md object-contain ${small ? "h-7 w-7" : "h-8 w-8"}`}
          onError={() => setError(true)}
        />
      ) : (
        <span className={`inline-flex items-center justify-center rounded-md bg-white text-black ${small ? "h-7 w-7" : "h-8 w-8"}`}>
          MB
        </span>
      )}
      <span className="hidden sm:block">{label}</span>
    </span>
  );
}

function SectionHero({ id, image, eyebrow, title, blurb, cta }) {
  return (
    <section id={id} className="relative min-h-[92vh] w-full overflow-hidden bg-yellow-50 scroll-mt-28">
      <img
        src={image}
        alt={`${title} background`}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="relative mx-auto flex h-[92vh] max-w-7xl flex-col items-start justify-end px-6 pb-20 text-white md:px-10">
        {eyebrow && (
          <p className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wider backdrop-blur">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">{title}</h1>
        {blurb && (
          <p className="mt-4 max-w-2xl text-base/relaxed text-white/90 md:text-lg/relaxed">{blurb}</p>
        )}
        {cta?.href && (
          <a
            href={cta.href}
            className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/20"
          >
            {cta.label} <ArrowRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </section>
  );
}

function SectionBlock({ id, image, title, blurb, reverse = false, children }) {
  return (
    <section id={id} className="relative isolate bg-yellow-50 scroll-mt-28">
      <div
        className={`relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24`}
      >
        <div className={reverse ? "md:order-2" : "md:order-1"}>
          <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
          {blurb && (
            <p className="mt-4 max-w-prose text-base/relaxed text-neutral-600">{blurb}</p>
          )}
          {children}
        </div>
        <div className={reverse ? "md:order-1" : "md:order-2"}>
          <div className="overflow-hidden rounded-2xl shadow-xl h-80 md:h-[400px]">
            <img src={image} alt={`${title} visual`} className="h-full w-full object-cover object-center" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Nav() {
  const links = [
    { href: "#welcome", label: "Welcome" },
    { href: "#nfts", label: "NFTs" },
    { href: "#games", label: "Games" },
    { href: "#creative-studio", label: "Creative Studio" },
    { href: "#partners", label: "Partners" },
    { href: "#spaces", label: "Spaces" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto w-full max-w-7xl px-4">
      <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-white backdrop-blur lg:px-6">
        <a href="#welcome" className="flex items-center gap-2 font-extrabold">
          <BrandLogo src={LOGO_SRC} />
        </a>
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:opacity-80">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="https://x.com/monkeybizio" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold backdrop-blur hover:bg-white/20 md:text-sm"
        >
          Follow <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

export default function MonkeyBusinessLanding() {
  const [lb, setLb] = useState({ open: false, index: 0 });
  return (
    <main className="scroll-smooth bg-white text-neutral-900">
      <Nav />

      {/* Welcome / Hero */}
      <SectionHero
        id={SECTIONS[0].id}
        title={SECTIONS[0].title}
        image={SECTIONS[0].image}
        eyebrow={SECTIONS[0].eyebrow}
        blurb={SECTIONS[0].blurb}
        cta={SECTIONS[0].cta}
      />

      {/* NFTs (image left) */}
      <SectionBlock
        id={SECTIONS[1].id}
        title={SECTIONS[1].title}
        image={SECTIONS[1].image}
        blurb={SECTIONS[1].blurb}
        reverse
      >
        <div className="mt-6 space-y-4">
          <p className="text-sm text-neutral-700">As seen on NFT Calendar.</p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {NFT_ITEMS.map((it, i) => (
              <ItemCard key={it.title} title={it.title} img={it.img} onClick={() => setLb({ open: true, index: i })} />
            ))}
          </div>
        </div>
      </SectionBlock>

      {/* Games (image left) */}
      <SectionBlock
        id={SECTIONS[2].id}
        title={SECTIONS[2].title}
        image={SECTIONS[2].image}
        blurb={SECTIONS[2].blurb}
      >
        <div className="mt-6 space-y-4">
          <p className="text-sm text-neutral-600">The following games are some examples we have made for other projects:</p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {GAME_ITEMS.map((it) => (
              <ItemCard key={it.title} {...it} />
            ))}
          </div>
        </div>
      </SectionBlock>

      {/* Creative Studio (image right) */}
      <SectionBlock
        id={SECTIONS[3].id}
        title={SECTIONS[3].title}
        image={SECTIONS[3].image}
        blurb={SECTIONS[3].blurb}
        reverse
      >
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700 ring-1 ring-amber-200">
                <Images className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Art</h3>
            </div>
            <p className="mt-3 text-sm text-neutral-600">We create posters, logos, memecoin designs and NFT collections as well as custom stickers and emojis.</p>
            <div className="mt-4 h-1 w-12 rounded-full bg-amber-200 transition-all group-hover:w-16"></div>
          </div>

          <div className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700 ring-1 ring-amber-200">
                <Calendar className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Social Calendars</h3>
            </div>
            <p className="mt-3 text-sm text-neutral-600">We create a whole schedule of posts for you — full tweets and images to ease your workload.</p>
            <div className="mt-4 h-1 w-12 rounded-full bg-amber-200 transition-all group-hover:w-16"></div>
          </div>

          <div className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700 ring-1 ring-amber-200">
                <Settings className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Development</h3>
            </div>
            <p className="mt-3 text-sm text-neutral-600">We build you amazing Websites, set up your Discord so you look professional and ready.</p>
            <div className="mt-4 h-1 w-12 rounded-full bg-amber-200 transition-all group-hover:w-16"></div>
          </div>

          <div className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700 ring-1 ring-amber-200">
                <Gamepad2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Games</h3>
            </div>
            <p className="mt-3 text-sm text-neutral-600">We develop fun retro‑style arcade games to attract new members and keep the current community engaged.</p>
            <div className="mt-4 h-1 w-12 rounded-full bg-amber-200 transition-all group-hover:w-16"></div>
          </div>
        </div>

        <div className="mt-8">
          <a
            href="https://discord.com/invite/yarVDEMNjm"
            className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-neutral-800"
          >
            Start a project <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </SectionBlock>

      {/* Partners (image left) */}
      <SectionBlock
        id={SECTIONS[4].id}
        title={SECTIONS[4].title}
        image={SECTIONS[4].image}
        blurb={SECTIONS[4].blurb}
      >
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {PARTNER_ITEMS.map((p) => (
            <a key={p.title} href={p.href} target="_blank" rel="noreferrer" className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              <div className="h-32 w-full">
                <img src={p.img} alt={`${p.title} logo`} className="h-full w-full object-cover" loading="lazy" decoding="async" />
              </div>
              <div className="px-3 py-2 text-sm font-semibold text-neutral-900">{p.title}</div>
            </a>
          ))}
        </div>
        <p className="mt-4 text-sm text-neutral-600">More to follow...</p>
      </SectionBlock>

      {/* Spaces (image right) */}
      <SectionBlock
        id={SECTIONS[5].id}
        title={SECTIONS[5].title}
        image={SECTIONS[5].image}
        blurb={SECTIONS[5].blurb}
        reverse
      >
        <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-neutral-700">
          <li>Weekly Twitter/X Spaces — Community updates & builder AMAs</li>
          <li>Monthly collab calls — Partner intros & project pitches</li>
          <li>Special events — Game nights, watch parties, and seasonal drops</li>
        </ul>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="https://x.com/monkeybizio"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-neutral-50"
          >
            <Twitter className="h-4 w-4" /> X / Twitter
          </a>
          <a
            href="https://discord.com/invite/yarVDEMNjm"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-neutral-50"
          >
            <Users className="h-4 w-4" /> Discord
          </a>
          <a
            href="https://t.me/monkeybizio"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-neutral-50"
          >
            <Send className="h-4 w-4" /> Telegram
          </a>
        </div>
      </SectionBlock>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-neutral-600 md:flex-row md:px-10">
          <div className="flex items-center gap-2 font-extrabold text-neutral-900">
            <BrandLogo src={LOGO_SRC} small />
          </div>
          <nav className="flex flex-wrap items-center gap-4">
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#spaces" className="hover:underline">Contact</a>
          </nav>
          <p>© {new Date().getFullYear()} Monkey Business. All rights reserved.</p>
        </div>
      </footer>

      <Lightbox
        open={lb.open}
        onClose={() => setLb({ open: false, index: lb.index })}
        img={NFT_ITEMS[lb.index]?.img}
        title={NFT_ITEMS[lb.index]?.title}
        onPrev={() => setLb({ open: true, index: (lb.index - 1 + NFT_ITEMS.length) % NFT_ITEMS.length })}
        onNext={() => setLb({ open: true, index: (lb.index + 1) % NFT_ITEMS.length })}
      />
    </main>
  );
}
