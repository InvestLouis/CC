import { useState } from 'react'

export default function LeadForm({ ctaLabel = 'Recevoir Mon Guide Gratuit →' }: { ctaLabel?: string }) {
  const [prenom, setPrenom] = useState('')
  const [email, setEmail]   = useState('')

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <span className="absolute left-[13px] top-1/2 -translate-y-1/2 text-[#475569] pointer-events-none">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </span>
        <input
          type="text"
          placeholder="Ton prénom"
          value={prenom}
          onChange={e => setPrenom(e.target.value)}
          className="w-full h-[46px] bg-white/[0.03] border border-white/[0.07] rounded-lg
                     pl-10 pr-3 text-white text-[14px] font-light placeholder:text-[#475569]
                     outline-none focus:border-[#1D4ED8] focus:bg-[#1D4ED8]/[0.04]
                     transition-colors font-['Inter']"
        />
      </div>

      <div className="relative">
        <span className="absolute left-[13px] top-1/2 -translate-y-1/2 text-[#475569] pointer-events-none">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
        </span>
        <input
          type="email"
          placeholder="Ton adresse email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full h-[46px] bg-white/[0.03] border border-white/[0.07] rounded-lg
                     pl-10 pr-3 text-white text-[14px] font-light placeholder:text-[#475569]
                     outline-none focus:border-[#1D4ED8] focus:bg-[#1D4ED8]/[0.04]
                     transition-colors font-['Inter']"
        />
      </div>

      <button
        className="mt-2 w-full h-[50px] bg-[#1D4ED8] text-white font-['Montserrat'] font-extrabold
                   text-[11px] tracking-[1.5px] uppercase rounded-lg
                   hover:opacity-90 hover:-translate-y-px transition-all
                   shadow-[0_4px_20px_rgba(29,78,216,0.25)]
                   relative overflow-hidden"
      >
        <span className="absolute inset-0 bg-gradient-to-b from-white/[0.07] to-transparent pointer-events-none" />
        {ctaLabel}
      </button>

      <p className="flex items-center justify-center gap-1.5 mt-2 text-[11px] text-[#475569]">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
        Aucun spam · Désabonnement en 1 clic
      </p>
    </div>
  )
}
