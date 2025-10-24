import React from "react";
import Hero from "./components/Hero";
import Progress from "./components/Progress";
import HowToBuy from "./components/HowToBuy";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  const wallet = process.env.REACT_APP_PRESALE_WALLET || "NoWalletProvided";
  const target = parseFloat(process.env.REACT_APP_PRESALE_TARGET_SOL || "1000");
  const percent = parseFloat(process.env.REACT_APP_PROGRESS_PERCENT || "75");

  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-6">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded bg-gradient-to-br from-[#2b0033] to-[#3e0033] flex items-center justify-center text-lg font-bold neon">MGK</div>
            <div>
              <div className="text-lg font-semibold neon">{process.env.REACT_APP_SITE_TITLE}</div>
              <div className="text-xs text-white/60">mgkofficialsolproject.com</div>
            </div>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#how" className="hover:underline">How to buy</a>
            <a href="#faq" className="hover:underline">FAQ</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Hero />
        <section className="max-w-4xl mx-auto px-6 -mt-12">
          <Progress wallet={wallet} target={target} percent={percent} />
        </section>

        <section id="how" className="max-w-4xl mx-auto px-6 mt-8">
          <HowToBuy wallet={wallet} />
        </section>

        <section id="faq" className="max-w-4xl mx-auto px-6 mt-8">
          <FAQ />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
