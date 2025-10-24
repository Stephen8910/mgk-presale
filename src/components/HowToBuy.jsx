import React, { useState } from "react";

export default function HowToBuy({ wallet }){
  const [copied, setCopied] = useState(false);
  async function copy(){
    await navigator.clipboard.writeText(wallet);
    setCopied(true);
    setTimeout(()=>setCopied(false), 2200);
  }
  const qr = `https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=solana:${wallet}`;

  return (
    <div className="panel rounded-lg p-6">
      <h2 className="text-2xl font-semibold neon">How to buy — manual steps</h2>
      <p className="mt-3 text-white/80">This site does not connect to wallets. To participate, send SOL directly to the official presale wallet shown below.</p>

      <div className="mt-4 grid md:grid-cols-2 gap-6 items-start">
        <div>
          <div className="bg-white/5 p-3 rounded font-mono break-words">{wallet}</div>
          <div className="mt-3 flex gap-3">
            <button onClick={copy} className="px-4 py-2 bg-mgkneon text-black rounded">{copied ? "Copied" : "Copy address"}</button>
            <a className="px-4 py-2 border border-white/10 rounded" href={`https://explorer.solana.com/address/${wallet}?cluster=mainnet-beta`} target="_blank" rel="noreferrer">View on Explorer</a>
          </div>
          <ol className="mt-4 list-decimal list-inside text-white/80 space-y-2">
            <li>Open your Solana wallet (Phantom, Solflare, etc.).</li>
            <li>Send the SOL amount to the address above.</li>
            <li>Keep your TXID for verification.</li>
            <li>We never ask for private keys or seed phrases.</li>
          </ol>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-sm text-white/60">Scan to pay</div>
          <img src="/qr.png" alt="MGK Presale QR" className="mt-3 w-44 h-44 bg-white/5 p-2 rounded" />
        </div>
      </div>
    </div>
  );
}
