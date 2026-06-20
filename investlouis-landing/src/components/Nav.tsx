export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-[60px] flex items-center px-12
                    bg-[rgba(5,8,13,0.82)] backdrop-blur-2xl border-b border-white/[0.06]">
      <div className="w-full max-w-[1060px] mx-auto flex items-center justify-between">

        <div className="font-['Montserrat'] font-black text-[14px] tracking-[1.5px] uppercase text-white">
          INVEST<span className="text-[#3B82F6]">LOUIS</span>
        </div>

        <div className="flex items-center gap-2 font-['Montserrat'] text-[10px] font-bold
                        tracking-[1.5px] uppercase text-[#B8963E]">
          <span className="w-[5px] h-[5px] rounded-full bg-[#B8963E] opacity-70" />
          Certifié AMF
          <span className="w-[5px] h-[5px] rounded-full bg-[#B8963E] opacity-70" />
        </div>

        <button className="h-[34px] px-4 bg-[#1D4ED8] text-white font-['Montserrat'] font-bold
                           text-[10px] tracking-[1px] uppercase rounded-[4px]
                           hover:opacity-85 transition-opacity">
          Recevoir le guide
        </button>

      </div>
    </nav>
  )
}
