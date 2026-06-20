export default function Scarcity() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-[700px] mx-auto reveal">
        <div className="relative border border-[#B8963E]/15 bg-[#B8963E]/[0.025] rounded-2xl p-10 text-center"
             style={{ boxShadow: '0 0 0 1px rgba(184,150,62,0.06) inset' }}>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="inline-block bg-[#B8963E] text-[#05080D] font-['Montserrat'] font-black
                             text-[9px] tracking-[2px] uppercase px-4 py-1.5 rounded-full">
              Disponible maintenant
            </span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <p className="text-[#64748B] text-[15px] leading-relaxed max-w-[460px]">
              Ce guide est distribué gratuitement tant que la liste est ouverte.
              Je me réserve le droit de le passer en version payante à tout moment.
            </p>

            <div className="flex items-center gap-2.5 text-[#B8963E]">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span className="font-['Montserrat'] font-bold text-[10px] tracking-[1.5px] uppercase">
                Accès limité · Profites-en maintenant
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
