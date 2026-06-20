const testimonials = [
  {
    name: 'Thomas M.',
    role: 'Trader indépendant · Lyon',
    text: 'Le Volume Profile et le VWAP ont complètement changé ma lecture du marché. Je comprends enfin pourquoi le prix réagit à certains niveaux.',
    stars: 5,
  },
  {
    name: 'Julien K.',
    role: 'Ingénieur reconverti · Paris',
    text: 'J\'avais regardé des dizaines de vidéos sur les SMC sans vraiment comprendre. Louis a mis les choses dans l\'ordre en 30 pages chrono.',
    stars: 5,
  },
  {
    name: 'Sarah D.',
    role: 'Trader forex · Bordeaux',
    text: 'Le COT Report, j\'entendais ce terme depuis des mois. Maintenant je le lis chaque vendredi. Ça a changé mes biais directionnels.',
    stars: 5,
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
  return (
    <section className="py-28 px-6 bg-[#0B1120]">
      <div className="max-w-[1060px] mx-auto">

        <div className="text-center mb-14">
          <p className="font-['Montserrat'] font-bold text-[10px] tracking-[2px] uppercase
                        text-[#B8963E] mb-4">
            Ils ont franchi le pas
          </p>
          <h2 className="font-['Montserrat'] font-black text-white text-[36px] leading-[1.1] tracking-[-1px]">
            Ils ont changé leur façon<br />
            <span className="text-[#3B82F6]">de lire les marchés</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div key={i}
              className="bg-[#05080D] border border-white/[0.07] rounded-xl p-6
                         flex flex-col gap-4">
              <Stars count={t.stars} />
              <p className="text-[#94A3B8] text-[14px] leading-relaxed flex-1">
                "{t.text}"
              </p>
              <div>
                <p className="font-['Montserrat'] font-bold text-white text-[13px]">{t.name}</p>
                <p className="text-[#475569] text-[11px] mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
