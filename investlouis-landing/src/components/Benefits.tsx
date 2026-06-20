const chapters = [
  {
    num: '01',
    title: 'Les fondamentaux',
    desc: 'Comprendre comment l\'argent se multiplie : intérêts composés, allocation d\'actifs, horizon de placement.',
  },
  {
    num: '02',
    title: 'Ton premier portefeuille',
    desc: 'Construire un portefeuille diversifié avec moins de 500€ — ETF, PEA, assurance-vie.',
  },
  {
    num: '03',
    title: 'Éviter les pièges',
    desc: 'Les 7 erreurs que font 80% des investisseurs débutants et comment les contourner.',
  },
  {
    num: '04',
    title: 'Passer à l\'action',
    desc: 'Un plan hebdomadaire concret : quoi acheter, quand rééquilibrer, comment suivre.',
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
              Ce que tu vas apprendre
            </p>
            <h2 className="font-['Montserrat'] font-black text-white text-[36px] leading-[1.1]
                           tracking-[-1px] mb-6">
              4 chapitres.<br />
              <span className="text-[#3B82F6]">0 remplissage.</span>
            </h2>
            <p className="text-[#475569] text-[15px] leading-relaxed">
              Chaque page est conçue pour t'apporter une action concrète.
              Pas de théorie creuse, pas de jargon inutile.
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
