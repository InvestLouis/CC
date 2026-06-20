const testimonials = [
  {
    name: 'Marie T.',
    role: 'Infirmière · Lyon',
    text: 'J\'ai ouvert mon PEA dans la semaine qui a suivi. Simple, clair, sans bullshit. Exactement ce dont j\'avais besoin.',
    stars: 5,
  },
  {
    name: 'Antoine B.',
    role: 'Ingénieur · Paris',
    text: 'Enfin un contenu qui va droit au but. En 3 semaines j\'avais mon premier portefeuille ETF opérationnel.',
    stars: 5,
  },
  {
    name: 'Camille R.',
    role: 'Enseignante · Bordeaux',
    text: 'Louis explique les choses comme un ami compétent, pas comme un banquier qui veut te vendre quelque chose.',
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
            4 800 lecteurs ne peuvent<br />
            <span className="text-[#3B82F6]">pas avoir tort</span>
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
