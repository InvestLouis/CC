import AmfLogo from './AmfLogo'
import LeadForm from './LeadForm'

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-[60px] overflow-hidden">
      {/* Single light source — top right */}
      <div className="absolute top-[-100px] right-[-100px] w-[700px] h-[700px]
                      bg-[#1D4ED8] opacity-[0.055] blur-[140px] rounded-full pointer-events-none" />
      {/* Bottom left counter-light */}
      <div className="absolute bottom-0 left-[-80px] w-[400px] h-[300px]
                      bg-[#0B1120] opacity-80 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative w-full max-w-[1060px] mx-auto px-6 py-24
                      grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-14 items-center">

        {/* LEFT */}
        <div className="flex flex-col gap-8">
          <div className="fade-up">
            <AmfLogo className="w-[80px] opacity-85" />
          </div>

          <div className="fade-up-2 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 w-fit
                            border border-[#B8963E]/25 bg-[#B8963E]/[0.05]
                            px-3 py-1.5 rounded-full">
              <span className="w-[5px] h-[5px] rounded-full bg-[#B8963E]" />
              <span className="font-['Montserrat'] font-bold text-[10px] tracking-[1.5px]
                               uppercase text-[#B8963E]">
                Guide Gratuit · Certifié AMF
              </span>
            </div>

            <h1 className="font-['Montserrat'] font-black text-white leading-[1.07]
                           text-[40px] lg:text-[52px] tracking-[-1.5px]">
              Arrête de trader<br />
              <span className="text-[#3B82F6]">contre les institutions.</span><br />
              Trade avec elles.
            </h1>

            <p className="text-[#64748B] text-[17px] leading-[1.7] font-light max-w-[460px]">
              Order flow, Volume Profile, COT Report — les outils des salles de
              marché, expliqués pour un trader retail. Gratuit, certifié AMF,
              applicable cette semaine.
            </p>
          </div>

          {/* Trust strip */}
          <div className="fade-up-3 flex items-center gap-6 pt-2">
            {[
              { val: '4 800+', label: 'lecteurs actifs' },
              { val: '4.9 / 5', label: 'note moyenne' },
              { val: '100%', label: 'gratuit' },
            ].map((item, i) => (
              <>
                {i > 0 && <div key={`sep-${i}`} className="w-px h-8 bg-white/[0.07]" />}
                <div key={item.val} className="flex flex-col">
                  <span className="font-['Montserrat'] font-black text-white text-[21px] tabular-nums">{item.val}</span>
                  <span className="text-[#475569] text-[11px] tracking-wide">{item.label}</span>
                </div>
              </>
            ))}
          </div>
        </div>

        {/* RIGHT — double-bezel form card */}
        <div id="hero-form" className="relative fade-up-2">
          {/* Outer shell */}
          <div className="p-[1.5px] rounded-2xl bg-gradient-to-b from-white/[0.1] to-white/[0.03]"
               style={{ boxShadow: '0 32px 80px rgba(29,78,216,0.15), 0 4px 16px rgba(0,0,0,0.4)' }}>
            {/* Inner core */}
            <div className="bg-[#0B1120] rounded-[calc(1rem-1.5px)] p-8"
                 style={{ boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.06)' }}>

              {/* PDF placeholder */}
              <div className="w-full h-[148px] bg-[#05080D] border border-white/[0.05]
                              rounded-xl mb-6 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2.5 text-center px-4">
                  <div className="w-9 h-9 rounded-lg bg-[#1D4ED8]/15 border border-[#1D4ED8]/20
                                  flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.5">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-[12px] font-['Montserrat'] font-bold tracking-wide">
                      La Clé de la Rentabilité
                    </p>
                    <p className="text-[#334155] text-[10px] mt-0.5 tracking-wider uppercase">
                      Guide PDF · Couverture à venir
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <h2 className="font-['Montserrat'] font-black text-white text-[17px] leading-tight mb-1">
                  Accède au guide — gratuitement
                </h2>
                <p className="text-[#334155] text-[13px]">
                  Dans ta boîte mail en 2 minutes. Zéro spam.
                </p>
              </div>

              <LeadForm />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
