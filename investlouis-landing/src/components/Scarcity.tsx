export default function Scarcity() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[700px] mx-auto">
        <div className="relative border border-[#B8963E]/20 bg-[#B8963E]/[0.03] rounded-2xl p-10 text-center">

          {/* Top accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
                          bg-[#B8963E] text-[#05080D] font-['Montserrat'] font-black
                          text-[9px] tracking-[2px] uppercase px-4 py-1.5 rounded-full">
            Disponible maintenant
          </div>

          <div className="flex flex-col items-center gap-5">
            <p className="text-[#94A3B8] text-[15px] leading-relaxed max-w-[480px]">
              Ce guide est distribué gratuitement tant que la liste est ouverte.
              Je me réserve le droit de le passer en version payante à tout moment.
            </p>

            <div className="flex items-center gap-3 text-[#B8963E]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span className="font-['Montserrat'] font-bold text-[11px] tracking-[1px] uppercase">
                Accès limité · Profites-en maintenant
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
