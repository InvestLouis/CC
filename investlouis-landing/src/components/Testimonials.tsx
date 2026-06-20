const testimonials = [
  {
    name: 'Thomas M.',
    role: 'Trader indépendant · Lyon',
    text: 'Le Volume Profile et le VWAP ont complètement changé ma lecture du marché. Je comprends enfin pourquoi le prix réagit à certains niveaux.',
    stars: 5,
    size: 'large',
  },
  {
    name: 'Julien K.',
    role: 'Ingénieur reconverti · Paris',
    text: 'J\'avais regardé des dizaines de vidéos sur les SMC sans vraiment comprendre. Louis a mis les choses dans l\'ordre en 30 pages.',
    stars: 5,
    size: 'small',
  },
  {
    name: 'Sarah D.',
    role: 'Trader forex · Bordeaux',
    text: 'Le COT Report, j\'entendais ce terme depuis des mois. Maintenant je le lis chaque vendredi. Ça a changé mes biais directionnels.',
    stars: 5,
    size: 'small',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#B8963E">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [large, ...small] = testimonials
  return (
    <section className="py-28 px-6 bg-[#0B1120]">
      <div className="max-w-[1060px] mx-auto">

        <div className="text-center mb-14 reveal">
          <p className="font-['Montserrat'] font-bold text-[10px] tracking-[2px] uppercase
                        text-[#B8963E] mb-4">
            Ils ont franchi le pas
          </p>
          <h2 className="font-['Montserrat'] font-black text-white text-[36px] leading-[1.1] tracking-[-1px]">
            Ils ont changé leur façon<br />
            <span className="text-[#3B82F6]">de lire les marchés</span>
          </h2>
        </div>

        {/* Asymmetric grid: 1 large left + 2 stacked right */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-4 items-stretch">

          {/* Large featured testimonial */}
          <div className="reveal bg-[#05080D] border border-white/[0.07] rounded-2xl p-8 flex flex-col justify-between
                          transition-all duration-500 hover:border-white/[0.12]"
               style={{ transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)' }}>
            <div>
              <Stars count={large.stars} />
              <p className="font-['Playfair_Display'] italic text-white text-[22px] leading-relaxed mt-6 mb-8">
                "{large.text}"
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05]">
              <div className="w-9 h-9 rounded-full bg-[#1D4ED8]/20 border border-[#1D4ED8]/20
                              flex items-center justify-center text-[#3B82F6] text-[13px] font-['Montserrat'] font-bold">
                {large.name[0]}
              </div>
              <div>
                <p className="font-['Montserrat'] font-bold text-white text-[13px]">{large.name}</p>
                <p className="text-[#475569] text-[11px] mt-0.5">{large.role}</p>
              </div>
            </div>
          </div>

          {/* Two smaller stacked */}
          <div className="flex flex-col gap-4">
            {small.map((t, i) => (
              <div key={i}
                className="reveal bg-[#05080D] border border-white/[0.07] rounded-2xl p-6 flex flex-col gap-4
                           transition-all duration-500 hover:border-white/[0.12]"
                style={{ transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)' }}>
                <Stars count={t.stars} />
                <p className="text-[#94A3B8] text-[14px] leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-white/[0.05]">
                  <div className="w-8 h-8 rounded-full bg-[#1D4ED8]/20 border border-[#1D4ED8]/20
                                  flex items-center justify-center text-[#3B82F6] text-[12px] font-['Montserrat'] font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-['Montserrat'] font-bold text-white text-[12px]">{t.name}</p>
                    <p className="text-[#475569] text-[10px] mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Social proof bar */}
        <div className="reveal reveal-delay-2 mt-10 flex flex-wrap items-center justify-center gap-8
                        border-t border-white/[0.05] pt-8">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {['T', 'J', 'S', 'M', 'A'].map((l, i) => (
                <div key={i} className="w-7 h-7 rounded-full bg-[#1D4ED8]/30 border border-[#05080D]
                                        flex items-center justify-center text-[#3B82F6] text-[10px]
                                        font-['Montserrat'] font-bold">
                  {l}
                </div>
              ))}
            </div>
            <span className="text-[#475569] text-[13px]">
              <span className="text-white font-medium">4 800+</span> traders ont déjà téléchargé le guide
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
