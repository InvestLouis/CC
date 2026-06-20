const rows = [
  {
    pain: 'Ton argent dort à 3% sur un livret A',
    cost: 'Tu perds du pouvoir d\'achat chaque année',
    fix: 'Stratégie d\'allocation multi-supports',
  },
  {
    pain: 'Tu ne sais pas par où commencer',
    cost: 'Paralysie — tu n\'investis jamais',
    fix: 'Plan d\'action en 5 étapes claires',
  },
  {
    pain: 'La bourse te fait peur',
    cost: 'Tu rates des années de capitalisation',
    fix: 'Approche progressive, risque maîtrisé',
  },
  {
    pain: 'Trop d\'information contradictoire en ligne',
    cost: 'Mauvaises décisions, pertes évitables',
    fix: 'Méthode vérifiée, source certifiée AMF',
  },
]

export default function Problem() {
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-[1060px] mx-auto">

        <div className="mb-14">
          <p className="font-['Montserrat'] font-bold text-[10px] tracking-[2px] uppercase
                        text-[#B8963E] mb-4">
            Le diagnostic
          </p>
          <h2 className="font-['Montserrat'] font-black text-white text-[36px] lg:text-[44px]
                         leading-[1.1] tracking-[-1px] max-w-[560px]">
            Pourquoi ton argent<br />
            <span className="text-[#3B82F6]">ne travaille pas</span> pour toi
          </h2>
        </div>

        {/* Structural table */}
        <div className="border border-white/[0.07] rounded-xl overflow-hidden">
          <div className="grid grid-cols-[1fr_1fr_1fr] bg-[#0B1120] border-b border-white/[0.07]">
            <div className="px-6 py-3">
              <span className="font-['Montserrat'] font-bold text-[9px] tracking-[2px] uppercase text-[#475569]">
                Problème actuel
              </span>
            </div>
            <div className="px-6 py-3 border-l border-white/[0.07]">
              <span className="font-['Montserrat'] font-bold text-[9px] tracking-[2px] uppercase text-[#475569]">
                Coût réel
              </span>
            </div>
            <div className="px-6 py-3 border-l border-white/[0.07]">
              <span className="font-['Montserrat'] font-bold text-[9px] tracking-[2px] uppercase text-[#B8963E]">
                Dans le guide
              </span>
            </div>
          </div>

          {rows.map((row, i) => (
            <div key={i}
              className={`grid grid-cols-[1fr_1fr_1fr] ${i < rows.length - 1 ? 'border-b border-white/[0.05]' : ''}
                          hover:bg-white/[0.02] transition-colors`}>
              <div className="px-6 py-5 flex items-start gap-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#EF4444]/60 shrink-0" />
                <span className="text-[#94A3B8] text-[14px] leading-snug">{row.pain}</span>
              </div>
              <div className="px-6 py-5 border-l border-white/[0.05] flex items-start">
                <span className="text-[#475569] text-[14px] leading-snug italic">{row.cost}</span>
              </div>
              <div className="px-6 py-5 border-l border-white/[0.05] flex items-start gap-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#22C55E]/60 shrink-0" />
                <span className="text-[#CBD5E1] text-[14px] leading-snug">{row.fix}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pullquote */}
        <div className="mt-12 pl-6 border-l-2 border-[#B8963E]/40">
          <p className="font-['Playfair_Display'] italic text-[#94A3B8] text-[18px] leading-relaxed">
            "La différence entre ceux qui créent de la richesse et les autres n'est pas le salaire —
            c'est la méthode."
          </p>
          <p className="mt-3 font-['Montserrat'] font-bold text-[10px] tracking-[1.5px] uppercase text-[#475569]">
            Louis Ronchet · InvestLouis
          </p>
        </div>

      </div>
    </section>
  )
}
