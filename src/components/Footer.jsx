import React from "react";

export default function Footer(){
  const tw = process.env.REACT_APP_TWITTER || "#";
  const ig = process.env.REACT_APP_INSTAGRAM || "#";
  const fb = process.env.REACT_APP_FACEBOOK || "#";

  return (
    <footer className="py-10 mt-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white/60">MGK Official Presale • mgkofficialsolproject.com</div>
        <div className="flex gap-3">
          <a href={tw} target="_blank" rel="noreferrer" className="px-4 py-2 rounded bg-white/5">Twitter</a>
          <a href={ig} target="_blank" rel="noreferrer" className="px-4 py-2 rounded bg-white/5">Instagram</a>
          <a href={fb} target="_blank" rel="noreferrer" className="px-4 py-2 rounded bg-white/5">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
