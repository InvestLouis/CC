const items = [
  { label: 'CAC 40', value: '+1.24%', up: true },
  { label: 'S&P 500', value: '+0.87%', up: true },
  { label: 'BTC/USD', value: '+3.41%', up: true },
  { label: 'EUR/USD', value: '-0.12%', up: false },
  { label: 'OR (XAU)', value: '+0.56%', up: true },
  { label: 'NASDAQ', value: '+1.09%', up: true },
  { label: 'LVMH', value: '-0.33%', up: false },
  { label: 'APPLE', value: '+2.15%', up: true },
  { label: 'DAX 40', value: '+0.74%', up: true },
  { label: 'WTI', value: '-1.02%', up: false },
]

function TickerItem({ label, value, up }: { label: string; value: string; up: boolean }) {
  return (
    <span className="flex items-center gap-2 px-6 whitespace-nowrap">
      <span className="font-['Montserrat'] font-bold text-[11px] tracking-[1px] uppercase text-[#94A3B8]">
        {label}
      </span>
      <span className={`font-['Montserrat'] font-bold text-[11px] ${up ? 'text-[#22C55E]' : 'text-[#EF4444]'}`}>
        {value}
      </span>
      <span className="text-white/10 text-[10px]">·</span>
    </span>
  )
}

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div className="relative w-full overflow-hidden border-y border-white/[0.05]
                    bg-[#0B1120] py-3">
      {/* Fade masks */}
      <div className="absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-[#0B1120] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-[#0B1120] to-transparent z-10 pointer-events-none" />

      <div className="flex ticker-animate">
        {doubled.map((item, i) => (
          <TickerItem key={i} {...item} />
        ))}
      </div>
    </div>
  )
}
