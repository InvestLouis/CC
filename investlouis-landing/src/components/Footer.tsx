import AmfLogo from './AmfLogo'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12 px-6">
      <div className="max-w-[1060px] mx-auto flex flex-col md:flex-row items-center
                      justify-between gap-6">

        <div className="flex items-center gap-6">
          <span className="font-['Montserrat'] font-black text-[13px] tracking-[1.5px] uppercase text-white">
            INVEST<span className="text-[#3B82F6]">LOUIS</span>
          </span>
          <AmfLogo className="w-[52px] opacity-70" />
        </div>

        <div className="flex flex-col items-center gap-1 text-center">
          <p className="text-[#2D3748] text-[11px]">
            © 2024 InvestLouis · Louis Ronchet · Toulouse
          </p>
          <p className="text-[#2D3748] text-[11px]">
            Ce contenu est à visée éducative et ne constitue pas un conseil en investissement.
          </p>
        </div>

        <div className="flex gap-4 text-[#2D3748] text-[11px] font-['Montserrat'] tracking-wide uppercase">
          <a href="#" className="hover:text-[#475569] transition-colors">Confidentialité</a>
          <a href="#" className="hover:text-[#475569] transition-colors">Mentions légales</a>
        </div>

      </div>
    </footer>
  )
}
