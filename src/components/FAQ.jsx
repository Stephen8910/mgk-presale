import React from "react";

export default function FAQ(){
  const faqs = [
    { q: "Why no contract address here?", a: "To reduce sniper/MEV risks and keep launch mechanics secure. Contract details will be shared later on our verified channels." },
    { q: "How do I confirm the official wallet?", a: "Confirm the address on this page and via our verified social links in the footer. Never rely on DMs." },
    { q: "Can I get a refund?", a: "Refunds are rare and case-by-case. Keep TXID as proof. Refer to official announcements for policy." },
    { q: "What tokens do you accept?", a: "For this presale we accept SOL only." },
    { q: "How do I verify my contribution?", a: "Use the transaction signature (TXID) and Solana explorer to confirm the outgoing transfer to the presale wallet." }
  ];

  return (
    <div className="panel rounded-lg p-6">
      <h2 className="text-2xl font-semibold neon">FAQ</h2>
      <div className="mt-4 space-y-4">
        {faqs.map((f,i)=>(
          <div key={i}>
            <div className="font-semibold">{f.q}</div>
            <div className="text-white/80 mt-1">{f.a}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
