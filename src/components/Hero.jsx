import React from "react";

export default function Hero(){
  return (
    <section className="py-24 bg-gradient-to-b from-[#050005] to-[#070011]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold neon">MGK Official Presale</h1>
        <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
          Official MGK presale — transparent, manual contributions only. No contract on this site.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <div className="px-6 py-3 rounded-lg panel">
            <div className="text-xs text-white/60">Presale window</div>
            <div className="font-semibold mt-1">TBA</div>
          </div>
          <div className="px-6 py-3 rounded-lg panel">
            <div className="text-xs text-white/60">Token</div>
            <div className="font-semibold mt-1">MGK</div>
          </div>
        </div>
      </div>
    </section>
  );
}
