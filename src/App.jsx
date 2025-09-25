import React, { useState, useEffect } from "react";

export default function MonkeyBizLanding() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showVocab, setShowVocab] = useState(false);

  // ESC key to close overlays
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setShowOverlay(false);
        setShowVocab(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 relative">
      {/* Overlays */}
      {showOverlay && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setShowOverlay(false)}
        >
          <div
            className="bg-neutral-900 p-6 rounded-2xl max-w-md text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4">🚀 Start Here</h3>
            <p className="text-neutral-300 mb-3">1. Get a wallet (Phantom, MetaMask, Trust Wallet)</p>
            <p className="text-neutral-300 mb-3">2. Add funds via exchange (Binance, Coinbase, OKX)</p>
            <p className="text-neutral-300 mb-3">3. Explore NFTs, DeFi, and Casinos responsibly</p>
            <p className="text-neutral-400 text-sm">Close this window by clicking outside or pressing ESC.</p>
          </div>
        </div>
      )}

      {showVocab && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setShowVocab(false)}
        >
          <div
            className="bg-neutral-900 p-6 rounded-2xl max-w-md text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4">📚 Key Vocab</h3>
            <ul className="space-y-2 text-neutral-300">
              <li><strong>Wallet:</strong> App or device to store crypto.</li>
              <li><strong>DEX:</strong> Decentralized Exchange (peer-to-peer trading).</li>
              <li><strong>CEX:</strong> Centralized Exchange like Binance or Coinbase.</li>
              <li><strong>NFT:</strong> Non-fungible token, unique digital item.</li>
              <li><strong>DeFi:</strong> Decentralized Finance, on-chain money apps.</li>
              <li><strong>DYOR:</strong> Do Your Own Research.</li>
            </ul>
            <p className="text-neutral-400 text-sm mt-4">Click outside or press ESC to close.</p>
          </div>
        </div>
      )}

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-neutral-950/70 border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl">🍌</span>
            <span className="font-bold text-lg tracking-tight">Monkey Business</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#starter-kit" className="hover:text-yellow-300">Starter Kit</a>
            <a href="#picks" className="hover:text-yellow-300">Must Haves</a>
            <a href="#guides" className="hover:text-yellow-300">Guides</a>
            <a href="#community" className="hover:text-yellow-300">Community</a>
          </nav>
          <button
            onClick={() => setShowOverlay(true)}
            className="md:hidden inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-yellow-300 text-neutral-900 font-semibold"
          >
            Start Here
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden bg-cover bg-center min-h-screen"
        style={{ backgroundImage: "url('https://monkeyplanner.carrd.co/assets/images/image04.jpg?v=66515d9d')" }}
      >
        <div className="bg-neutral-950/70 flex items-end justify-center text-center min-h-screen">
          <div className="max-w-3xl px-4 pb-28">
            <p className="text-neutral-200 text-lg md:text-xl">
              Everything you need to trade, play and navigate Web3.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={() => setShowOverlay(true)}
                className="px-5 py-3 rounded-2xl bg-yellow-300 text-neutral-900 font-semibold"
              >
                🚀 Start Here
              </button>
              <button
                onClick={() => setShowVocab(true)}
                className="px-5 py-3 rounded-2xl border border-neutral-200 bg-neutral-950/50 text-neutral-100 hover:border-neutral-400"
              >
                📚 Key Vocab
              </button>
            </div>
            <p className="mt-6 text-sm text-neutral-200">
              Degen-tested, beginner-friendly. Always DYOR. Not financial advice.
            </p>
          </div>
        </div>
      </section>

      {/* Starter Kit */}
      <section id="starter-kit" className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold">🧰 Monkey-Approved Starter Kit</h2>
          <p className="mt-2 text-neutral-300 max-w-2xl">
            The essential toolbox to start and scale your Web3 journey.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ToolCard
              icon="🔐"
              title="Wallets"
              copy="Hot wallets, hardware wallets, and multi-sig setups."
              items={[
                { name: "MetaMask", href: "https://metamask.io/", badge: "Ethereum" },
                { name: "Trust Wallet", href: "https://trustwallet.com/", badge: "Multi-chain" },
                { name: "Phantom", href: "https://phantom.app/", badge: "Solana" },
                { name: "Ledger", href: "https://www.ledger.com/", badge: "Hardware" },
                { name: "Coinbase Wallet", href: "https://www.coinbase.com/wallet", badge: "CEX Wallet" },
                { name: "Exodus", href: "https://www.exodus.com/", badge: "Multi-asset" },
                { name: "Rainbow", href: "https://rainbow.me/", badge: "Ethereum" },
                { name: "Safe (Gnosis)", href: "https://safe.global/", badge: "Multi-sig" },
              ]}
            />
            <ToolCard
              icon="💱"
              title="Exchanges"
              copy="Centralized and decentralized options for buying and trading."
              items={[
                { name: "Binance", href: "https://www.binance.com/", badge: "CEX" },
                { name: "Coinbase", href: "https://www.coinbase.com/", badge: "CEX" },
                { name: "Bybit", href: "https://www.bybit.com/", badge: "CEX" },
                { name: "OKX", href: "https://www.okx.com/", badge: "CEX" },
                { name: "Uniswap", href: "https://app.uniswap.org/", badge: "DEX" },
                { name: "TapTrade", href: "https://taptrade.io/?affiliate=GZVAAisq1D", badge: "Trading" },
              ]}
            />
            <ToolCard
              icon="🎮"
              title="Play & Earn"
              copy="Casinos, GameFi and other play-to-earn platforms. Play responsibly."
              items={[
                { name: "Bro Bets", href: "https://brobets.io/?ref=MBusinesss", badge: "Casino" },
                { name: "Stake", href: "https://stake.com/", badge: "Casino" },
                { name: "Zed Run", href: "https://zed.run/", badge: "GameFi" },
              ]}
            />
            <ToolCard
              icon="🖼️"
              title="NFTs & Marketplaces"
              copy="Top places to mint, buy, and sell NFTs."
              items={[
                { name: "Magic Eden", href: "https://magiceden.io/", badge: "Solana" },
                { name: "OpenSea", href: "https://opensea.io/", badge: "Ethereum" },
                { name: "Launch My NFT", href: "https://launchmynft.io/", badge: "Creator" },
                { name: "Blur", href: "https://blur.io/", badge: "Pro Traders" },
              ]}
            />
            <ToolCard
              icon="📊"
              title="Analytics & Trading"
              copy="Tools for charts, analytics, and on-chain data."
              items={[
                { name: "DEX Screener", href: "https://dexscreener.com/", badge: "Charts" },
                { name: "TradingView", href: "https://www.tradingview.com/", badge: "Charts" },
                { name: "GMX", href: "https://gmx.io/", badge: "Perps" },
                { name: "1inch", href: "https://1inch.io/", badge: "Aggregator" },
              ]}
            />
            <ToolCard
              icon="🛠️"
              title="Utilities"
              copy="Extra tools, VPNs, productivity, and safety."
              items={[
                { name: "GoMining", href: "https://gomining.com/?ref=YQTPJ0D", badge: "Mining" },
                { name: "NordVPN", href: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=132230&url_id=902", badge: "VPN" },
                { name: "NordPass", href: "https://go.nordpass.io/aff_c?offer_id=488&aff_id=132230&url_id=9356", badge: "Password" },
                { name: "FlxTime", href: "http://www.flxtime.fun", badge: "Mining" },
                { name: "Notion", href: "https://www.notion.so/", badge: "Productivity" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Must Haves (Top Picks) */}
      <section id="picks" className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold">🔥 Monkey’s Must Haves</h2>
          <p className="mt-2 text-neutral-300 max-w-2xl">
            Essential affiliate partners—curated for performance, safety, and ease of use.
          </p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <PickCard
              image="https://pbs.twimg.com/profile_images/1874931488254197760/nO9WZ7C7_400x400.jpg"
              title="Featured Mining: GoMining"
              copy="Go mining right from your phone and harness the power of verified data centers. It’s mining made easy, anytime, anywhere!"
              cta="Start Mining"
              href="https://gomining.com/?ref=YQTPJ0D"
              extraLink={{ href: "https://x.com/GoMining_token" }}
            />
            <PickCard
              image="https://pbs.twimg.com/profile_images/1851223281413607424/mOqQuuhh_400x400.jpg"
              title="Featured Casino: Bro Bets"
              copy="Slots, Roulette, Sportsbook, Predictions & more. Deposit in $SOL, $BTC, $ETH."
              cta="Play Now"
              href="https://brobets.io/?ref=MBusinesss"
              extraLink={{ href: "https://x.com/BroBetsIo" }}
            />
            <PickCard
              image="https://taptrade.io/images/TAP-logo-large.png"
              title="Featured Trading: TapTrade"
              copy="The Premium AI Trading Suite. Signals on Crypto, Stocks, Forex, and Memecoins."
              cta="Trade Now"
              href="https://taptrade.io/?affiliate=GZVAAisq1D"
              extraLink={{ href: "https://x.com/TAPfintech" }}
            />
            <PickCard
              image="https://pbs.twimg.com/profile_images/1618629073969750018/_J6Qi3VW_400x400.jpg"
              title="Featured Security: NordVPN"
              copy="Experience the internet without anyone looking over your shoulder. Work, stream, and play safely with the world’s leading VPN."
              cta="Get VPN"
              href="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=132230&url_id=902"
              extraLink={{ href: "https://x.com/NordVPN" }}
            />
          </div>
        </div>
      </section>

      {/* Guides (privacy‑enhanced embeds, no playlist overlay) */}
      <section id="guides" className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold">📺 Guides</h2>
          <p className="mt-2 text-neutral-300 max-w-2xl">
            Watch quick tutorials and how-tos to sharpen your Web3 skills.
          </p>

          {/* Embedded videos */}
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube-nocookie.com/embed/GmRbLcmX4A4?rel=0"
                title="Intro to Web3 & Wallets"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube-nocookie.com/embed/upIfGA0R30o?rel=0"
                title="DeFi Basics in 10 Minutes"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube-nocookie.com/embed/x1ORD2BNuDg?rel=0"
                title="NFT Marketplaces Explained"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section id="community" className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">🤝 Join Our Community</h2>
          <p className="mt-2 text-neutral-300 max-w-2xl mx-auto">
            Connect with fellow degens, builders, and traders. Share alpha and grow together.
          </p>
          <div className="mt-8 flex justify-center gap-5">
            <a href="https://x.com/monkeybizio" className="px-5 py-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-yellow-300">𝕏 Follow us on X</a>
            <a href="https://discord.gg/yarVDEMNjm" className="px-5 py-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-yellow-300">💬 Join Discord</a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ToolCard({ icon, title, copy, items }) {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? items : items.slice(0, 3);

  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl" aria-hidden>{icon}</span>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        {items.length > 3 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm text-yellow-300 hover:underline"
            aria-label={expanded ? `Collapse ${title}` : `Expand ${title}`}
          >
            {expanded ? "▲" : "▼"}
          </button>
        )}
      </div>
      <p className="mt-2 text-neutral-300 text-sm">{copy}</p>
      <ul className="mt-4 space-y-2">
        {visibleItems.map((it, i) => (
          <li key={i} className="flex items-center justify-between gap-2">
            <a href={it.href} className="hover:text-yellow-300 underline underline-offset-4" target="_blank" rel="noopener noreferrer">{it.name}</a>
            <span className="text-xs text-neutral-400 px-2 py-1 rounded-full border border-neutral-700">{it.badge}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PickCard({ image, title, copy, cta, href, extraLink, badge }) {
  return (
    <div className="relative rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 flex flex-col">
      {badge && (
        <span className="absolute top-3 left-3 text-[11px] uppercase tracking-wide bg-yellow-300/90 text-neutral-900 border border-yellow-400 rounded-full px-2 py-0.5 shadow">
          {badge}
        </span>
      )}
      {image && (
        <div className="flex items-center justify-between">
          <img src={image} alt={title} className="w-12 h-12 rounded-full mb-3" />
          {extraLink && (
            <a
              href={extraLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-yellow-300 text-xl"
              title="View on X"
            >
              𝕏
            </a>
          )}
        </div>
      )}
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-neutral-300 text-sm flex-1 whitespace-pre-line">{copy}</p>
      <div className="mt-4 flex justify-center">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-yellow-300 text-neutral-900 font-semibold"
        >
          {cta}
        </a>
      </div>
    </div>
  );
}
