const chapters = [
  {
    num: '01',
    title: 'Order Flow & DOM',
    desc: 'Lire le carnet d\'ordres comme un trader de salle de marché. Identifier les zones d\'absorption et les déséquilibres acheteurs/vendeurs avant que le prix réagisse.',
  },
  {
    num: '02',
    title: 'Volume Profile & VWAP',
    desc: 'Les deux outils que tout institutionnel utilise pour trouver sa valeur juste. Comment les appliquer sur n\'importe quel marché pour optimiser tes entrées.',
  },
  {
    num: '03',
    title: 'Smart Money Concepts',
    desc: 'Comprendre comment les gros acteurs accumulent avant de bouger. Zones de liquidité, manipulation de marché, et comment en profiter plutôt qu\'en être victime.',
  },
  {
    num: '04',
    title: 'COT Report & Macro',
    desc: 'Le rapport que les hedge funds lisent chaque vendredi. Décoder le positionnement des institutionnels pour anticiper les grands mouvements directionnels.',
  },
]

export default function Benefits() {
  return (
    <section className="py-28 px-6 bg-[#0B1120]">
      <div className="max-w-[1060px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-16 items-start">

          <div>
            <p className="font-['Montserrat'] font-bold text-[10px] tracking-[2px] uppercase
                          text-[#B8963E] mb-4">
              Ce que contient le guide
            </p>
            <h2 className="font-['Montserrat'] font-black text-white text-[36px] leading-[1.1]
                           tracking-[-1px] mb-6">
              4 outils pro.<br />
              <span className="text-[#3B82F6]">Applicables demain.</span>
            </h2>
            <p className="text-[#475569] text-[15px] leading-relaxed">
              Chaque outil est expliqué avec des cas concrets sur des marchés réels.
              Pas de théorie abstraite — comment le configurer, comment le lire, quand agir.
            </p>
          </div>

          <div className="flex flex-col gap-px">
            {chapters.map((ch) => (
              <div key={ch.num}
                className="group flex gap-6 px-6 py-6 rounded-lg
                           hover:bg-white/[0.03] transition-colors cursor-default">
                <span className="font-['Montserrat'] font-black text-[28px] text-white/[0.08]
                                 tabular-nums leading-none mt-1 group-hover:text-[#1D4ED8]/40
                                 transition-colors shrink-0">
                  {ch.num}
                </span>
                <div>
                  <h3 className="font-['Montserrat'] font-bold text-white text-[16px] mb-1.5">
                    {ch.title}
                  </h3>
                  <p className="text-[#475569] text-[14px] leading-relaxed">{ch.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
