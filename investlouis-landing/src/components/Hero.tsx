import AmfLogo from './AmfLogo'
import LeadForm from './LeadForm'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-[60px] overflow-hidden">
      {/* Single light source — top right blue glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px]
                      bg-[#1D4ED8] opacity-[0.07] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative w-full max-w-[1060px] mx-auto px-6 py-20
                      grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-center">

        {/* LEFT — headline block */}
        <div className="flex flex-col gap-8">
          <div className="fade-up">
            <AmfLogo className="w-[90px] opacity-90" />
          </div>

          <div className="fade-up-2 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 w-fit
                            border border-[#B8963E]/30 bg-[#B8963E]/[0.06]
                            px-3 py-1.5 rounded-full">
              <span className="w-[5px] h-[5px] rounded-full bg-[#B8963E]" />
              <span className="font-['Montserrat'] font-bold text-[10px] tracking-[1.5px]
                               uppercase text-[#B8963E]">
                Guide Gratuit · Certifié AMF
              </span>
            </div>

            <h1 className="font-['Montserrat'] font-black text-white leading-[1.08]
                           text-[42px] lg:text-[54px] tracking-[-1.5px]">
              Investis Comme<br />
              <span className="text-[#3B82F6]">les Pros</span> Dès<br />
              le Premier Mois
            </h1>

            <p className="text-[#94A3B8] text-[17px] leading-[1.65] font-light max-w-[480px]">
              Le guide que les conseillers bancaires ne veulent pas
              que tu lises. Stratégies concrètes, zéro jargon,
              résultats mesurables.
            </p>
          </div>

          {/* Trust strip */}
          <div className="fade-up-3 flex items-center gap-6 pt-2">
            <div className="flex flex-col">
              <span className="font-['Montserrat'] font-black text-white text-[22px]">4 800+</span>
              <span className="text-[#475569] text-[11px] tracking-wide">lecteurs actifs</span>
            </div>
            <div className="w-px h-8 bg-white/[0.08]" />
            <div className="flex flex-col">
              <span className="font-['Montserrat'] font-black text-white text-[22px]">4.9 / 5</span>
              <span className="text-[#475569] text-[11px] tracking-wide">note moyenne</span>
            </div>
            <div className="w-px h-8 bg-white/[0.08]" />
            <div className="flex flex-col">
              <span className="font-['Montserrat'] font-black text-white text-[22px]">100%</span>
              <span className="text-[#475569] text-[11px] tracking-wide">gratuit</span>
            </div>
          </div>
        </div>

        {/* RIGHT — form card */}
        <div className="relative fade-up-2">
          {/* Subtle card glow */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-b
                          from-white/[0.08] to-transparent pointer-events-none" />
          <div className="relative bg-[#0B1120] border border-white/[0.07] rounded-2xl p-8
                          shadow-[0_32px_64px_rgba(0,0,0,0.5)]">

            {/* PDF cover mockup placeholder */}
            <div className="w-full h-[160px] bg-[#101828] border border-white/[0.06]
                            rounded-lg mb-6 flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-center px-4">
                <div className="w-8 h-8 rounded bg-[#1D4ED8]/20 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                  </svg>
                </div>
                <span className="text-[#475569] text-[11px] font-['Montserrat'] tracking-wide uppercase">
                  Guide PDF · Couverture à venir
                </span>
              </div>
            </div>

            <div className="mb-5">
              <h2 className="font-['Montserrat'] font-black text-white text-[18px] leading-tight mb-1">
                Accède au Guide Gratuitement
              </h2>
              <p className="text-[#475569] text-[13px]">
                Reçois-le instantanément dans ta boîte mail.
              </p>
            </div>

            <LeadForm />
          </div>
        </div>

      </div>
    </section>
  )
}
