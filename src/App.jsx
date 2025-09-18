\
import React, { useState, useEffect } from "react";

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

function PickCard({ image, title, copy, cta, href, extraLink }) {
  return (
    <div className="relative rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 flex flex-col">
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

function MonkeyBizLanding() {
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
            <a href="#picks" className="hover:text-yellow-300">Top Picks</a>
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
                { name: "SolRip", href: "https://solrip.io/r/JUmCPLrl", badge: "Wallet Burner" },
                { name: "NordVPN", href: "https://nordvpn.com/", badge: "VPN" },
                { name: "FlxTime", href: "http://www.flxtime.fun", badge: "Mining" },
                { name: "Notion", href: "https://www.notion.so/", badge: "Productivity" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Top Picks */}
      <section id="picks" className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold">🏆 Monkey’s Top Picks</h2>
          <p className="mt-2 text-neutral-300 max-w-2xl">
            Our featured partners, projects, and communities.
          </p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <PickCard image="https://pbs.twimg.com/profile_images/1851223281413607424/mOqQuuhh_400x400.jpg" title="Featured Casino: Bro Bets" copy="Slots, Roulette, Sportsbook, Predictions and many more games | Deposit in $SOL $BTC $ETH" cta="Play Now" href="https://brobets.io/?ref=MBusinesss" extraLink={{ href: "https://x.com/BroBetsIo" }} />
            <PickCard image="https://pbs.twimg.com/profile_images/1926961141948850176/e_chj-33_400x400.jpg" title="Featured NFT Project: Sol Gods" copy="In the dying age of Solara, when the last solar convergence scorched the skies, 3,333 humans were chosen. Join the discord for Utility!" cta="Explore" href="https://magiceden.io/marketplace/solgods_" extraLink={{ href: "https://x.com/SOLGodNFTs" }} />
            <PickCard image="https://pbs.twimg.com/profile_images/1939095712047800320/-6a-FPqY_400x400.jpg" title="Featured Community: Vyral" copy="The home of builders where creators and founders brands become personal IPs." cta="Join Now" href="https://x.com/i/communities/1938218279698375115" extraLink={{ href: "https://x.com/vyralxyz" }} />
            <PickCard image="https://pbs.twimg.com/profile_images/1804862024381255680/_r2LLk68_400x400.jpg" title="Featured Utility (SolRip)" copy="- Clean your Wallets and Reclaim Solana in the process!\n- Earn 20% Lifetime Commission on every burn made with your link!\n- Resize your NFTs for FREE!" cta="Visit Now" href="https://solrip.io/r/JUmCPLrl" extraLink={{ href: "https://x.com/SolRip_io" }} />
          </div>
        </div>
      </section>

      {/* Guides */}
      <section id="guides" className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold">📺 Guides</h2>
          <p className="mt-2 text-neutral-300 max-w-2xl">
            Watch quick tutorials and how-tos to sharpen your Web3 skills.
          </p>
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
            <a href="https://x.com/monkeybizio" target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-yellow-300">🐦 Follow us on X</a>
            <a href="https://discord.gg/yarVDEMNjm" target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-yellow-300">💬 Join Discord</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MonkeyBizLanding;
