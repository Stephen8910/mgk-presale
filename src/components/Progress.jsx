import React from "react";

export default function Progress({ wallet, target, percent }) {
  const pct = Math.max(0, Math.min(100, Number(percent || 75)));
  const displayStyle = { width: `${pct}%` };
  const qrUrl = `https://chart.googleapis.com/chart?chs=240x240&cht=qr&chl=solana:${wallet}`;
  return (
    <div className="panel rounded-lg p-6 shadow-lg">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <div className="text-sm text-white/60">Presale wallet</div>
          <div className="font-mono mt-1 text-sm break-words">{wallet}</div>
        </div>

        <div className="flex-1">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="text-xs text-white/60">Progress</div>
              <div className="text-2xl font-semibold neon">{pct}% funded</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-white/60">Target</div>
              <div className="text-lg font-semibold">{target} SOL</div>
            </div>
          </div>

          <div className="mt-4 bg-white/5 rounded h-4 overflow-hidden">
            <div className="h-4" style={{...displayStyle, background: 'linear-gradient(90deg, #ff2fa8, #9b5cff)'}} />
          </div>
          <div className="text-xs text-white/60 mt-2">
  This meter shows how much has been funded so far.
</div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <a className="px-4 py-2 rounded bg-white/5" href={qrUrl} target="_blank" rel="noreferrer">View QR</a>
          <a className="px-4 py-2 rounded bg-mgkneon text-black font-semibold" href={`https://explorer.solana.com/address/${wallet}?cluster=mainnet-beta`} target="_blank" rel="noreferrer">Explorer</a>
        </div>
      </div>
    </div>
  );
}
