const chapters = [
  {
    num: '01',
    title: 'Lire les intentions du marché',
    tool: 'Order Flow & DOM',
    desc: 'Tu verras les zones où les gros acheteurs s\'accumulent — avant que le prix réagisse. Finis les entrées en retard.',
  },
  {
    num: '02',
    title: 'Entrer au bon prix, pas au mauvais moment',
    tool: 'Volume Profile & VWAP',
    desc: 'Les institutionnels ont une valeur juste en tête. Ce chapitre t\'apprend à la calculer toi aussi, et à l\'utiliser pour optimiser chaque entrée.',
  },
  {
    num: '03',
    title: 'Arrêter de te faire chasser',
    tool: 'Smart Money Concepts',
    desc: 'Tes stops se déclenchent juste avant que le prix parte dans ton sens ? Ce n\'est pas de la malchance. Ce chapitre t\'explique pourquoi — et comment l\'éviter.',
  },
  {
    num: '04',
    title: 'Savoir dans quel sens souffle le vent',
    tool: 'COT Report & Macro',
    desc: 'Les hedge funds publient leur positionnement chaque vendredi. Ce chapitre t\'apprend à le lire en 10 minutes et à aligner tes trades sur la tendance de fond.',
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
                  <h3 className="font-['Montserrat'] font-bold text-white text-[16px] mb-0.5">
                    {ch.title}
                  </h3>
                  <p className="font-['Montserrat'] text-[10px] tracking-[1px] uppercase text-[#1D4ED8] mb-2">
                    {ch.tool}
                  </p>
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
