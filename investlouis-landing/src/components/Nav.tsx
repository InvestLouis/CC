export default function Nav() {
  const scrollToForm = () => {
    document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-[60px] flex items-center px-6 lg:px-12
                    bg-[rgba(5,8,13,0.85)] backdrop-blur-2xl border-b border-white/[0.05]">
      <div className="w-full max-w-[1060px] mx-auto flex items-center justify-between">

        <div className="font-['Montserrat'] font-black text-[14px] tracking-[1.5px] uppercase text-white">
          INVEST<span className="text-[#3B82F6]">LOUIS</span>
        </div>

        <div className="hidden md:flex items-center gap-2 font-['Montserrat'] text-[10px] font-bold
                        tracking-[1.5px] uppercase text-[#B8963E]">
          <span className="w-[5px] h-[5px] rounded-full bg-[#B8963E] opacity-70" />
          Certifié AMF
          <span className="w-[5px] h-[5px] rounded-full bg-[#B8963E] opacity-70" />
        </div>

        <button
          onClick={scrollToForm}
          className="h-[34px] px-5 bg-[#1D4ED8] text-white font-['Montserrat'] font-bold
                     text-[10px] tracking-[1px] uppercase rounded-[4px]
                     transition-all duration-300
                     hover:bg-[#2563EB] hover:-translate-y-px hover:shadow-blue
                     active:scale-[0.97] active:translate-y-0"
          style={{ transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)' }}
        >
          Recevoir le PDF gratuit
        </button>

      </div>
    </nav>
  )
}
