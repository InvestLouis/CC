export default function About() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-[1060px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center">

          <div>
            <p className="font-['Montserrat'] font-bold text-[10px] tracking-[2px] uppercase
                          text-[#B8963E] mb-4">
              Qui je suis
            </p>
            <h2 className="font-['Montserrat'] font-black text-white text-[36px] leading-[1.1]
                           tracking-[-1px] mb-6">
              Louis Ronchet,<br />
              <span className="text-[#3B82F6]">certifié AMF</span>
            </h2>

            <p className="text-[#94A3B8] text-[16px] leading-[1.7] mb-5">
              Basé à Toulouse, j'ai commencé à investir avec un salaire ordinaire.
              Pas d'héritage, pas de piston — juste une méthode rigoureuse et
              l'examen AMF pour valider mes connaissances.
            </p>
            <p className="text-[#94A3B8] text-[16px] leading-[1.7] mb-8">
              Aujourd'hui j'accompagne des milliers de personnes à franchir le pas
              avec confiance. Ce guide condense l'essentiel de ce que j'aurais aimé
              avoir au départ.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Certifié AMF', 'Toulouse', '4 800+ abonnés', 'Indépendant'].map(tag => (
                <span key={tag}
                  className="px-3 py-1.5 border border-white/[0.08] rounded-full
                             text-[#475569] text-[11px] font-['Montserrat'] font-bold
                             tracking-[0.5px] uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="relative">
            <div className="aspect-[3/4] bg-[#0B1120] border border-white/[0.07] rounded-2xl
                            flex items-center justify-center overflow-hidden">
              <div className="flex flex-col items-center gap-3 text-center px-8">
                <div className="w-16 h-16 rounded-full bg-[#1D4ED8]/20 border border-[#1D4ED8]/30
                                flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <span className="text-[#475569] text-[12px] font-['Montserrat'] tracking-wide">
                  Photo de Louis<br />à intégrer
                </span>
              </div>
            </div>
            {/* Gold accent line */}
            <div className="absolute -bottom-3 left-8 right-8 h-px bg-gradient-to-r
                            from-transparent via-[#B8963E]/40 to-transparent" />
          </div>

        </div>
      </div>
    </section>
  )
}
