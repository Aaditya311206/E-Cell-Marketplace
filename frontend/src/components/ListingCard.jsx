const ACCENT_PALETTE = [
  "bg-rose-500/20 text-rose-300 border-rose-500/30",
  "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "bg-purple-500/20 text-purple-300 border-purple-500/30",
  "bg-amber-500/20 text-amber-300 border-amber-500/30",
  "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  "bg-teal-500/20 text-teal-300 border-teal-500/30",
];

function pickAccent(seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return ACCENT_PALETTE[hash % ACCENT_PALETTE.length];
}

export default function ListingCard({ title, price, type, seller, dept, onClick }) {
  const accent = pickAccent(type || dept || title || "");
  const initial = seller ? seller.charAt(0).toUpperCase() : "?";

  return (
    <div onClick={onClick} className="glass-card rounded-[2rem] p-3 flex flex-col group cursor-pointer">
      <div className={`w-full aspect-square ${accent} rounded-[1.5rem] relative mb-4 flex items-center justify-center border overflow-hidden`}>
        <div className="text-7xl group-hover:scale-110 transition duration-500 opacity-80">📦</div>
        {price != null && (
          <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-full text-sm font-extrabold text-white border border-slate-700">
            ${price}
          </div>
        )}
      </div>

      <div className="px-2 pb-2">
        <h4 className="font-bold text-white text-sm leading-snug mb-3 line-clamp-2">{title}</h4>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
              {initial}
            </div>
            <span className="text-xs font-bold text-slate-400">{seller}</span>
          </div>
          {(type || dept) && (
            <span className="text-xs font-medium text-slate-500">{type || dept}</span>
          )}
        </div>
      </div>
    </div>
  );
}
