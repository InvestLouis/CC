import { useState } from 'react'

export default function LeadForm({ ctaLabel = 'Télécharger La Clé de la Rentabilité →' }: { ctaLabel?: string }) {
  const [prenom, setPrenom] = useState('')
  const [email, setEmail]   = useState('')
  const [emailError, setEmailError] = useState('')
  const [prenomError, setPrenomError] = useState('')

  const validateEmail = (v: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    let valid = true
    if (!prenom.trim()) { setPrenomError('Entre ton prénom'); valid = false }
    else setPrenomError('')
    if (!validateEmail(email)) { setEmailError('Adresse email invalide'); valid = false }
    else setEmailError('')
    if (valid) {
      // Systeme.io integration point
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-2.5">
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
          onChange={e => { setPrenom(e.target.value); if (e.target.value.trim()) setPrenomError('') }}
          className={`w-full h-[46px] bg-white/[0.03] border rounded-lg
                     pl-10 pr-3 text-white text-[14px] font-light placeholder:text-[#334155]
                     outline-none transition-all duration-300
                     focus:bg-[#1D4ED8]/[0.05]
                     ${prenomError
                       ? 'border-red-500/50 focus:border-red-500'
                       : 'border-white/[0.07] focus:border-[#1D4ED8]'}`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)', fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif' }}
        />
        {prenomError && (
          <p className="mt-1 text-[11px] text-red-400">{prenomError}</p>
        )}
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
          onChange={e => { setEmail(e.target.value); if (validateEmail(e.target.value)) setEmailError('') }}
          className={`w-full h-[46px] bg-white/[0.03] border rounded-lg
                     pl-10 pr-3 text-white text-[14px] font-light placeholder:text-[#334155]
                     outline-none transition-all duration-300
                     focus:bg-[#1D4ED8]/[0.05]
                     ${emailError
                       ? 'border-red-500/50 focus:border-red-500'
                       : 'border-white/[0.07] focus:border-[#1D4ED8]'}`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)', fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif' }}
        />
        {emailError && (
          <p className="mt-1 text-[11px] text-red-400">{emailError}</p>
        )}
      </div>

      <button
        type="submit"
        className="mt-1.5 w-full h-[50px] bg-[#1D4ED8] text-white font-['Montserrat'] font-extrabold
                   text-[11px] tracking-[1.5px] uppercase rounded-lg relative overflow-hidden
                   transition-all duration-500 active:scale-[0.98]
                   hover:bg-[#2563EB] hover:-translate-y-[1px]"
        style={{
          transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)',
          boxShadow: '0 4px 24px rgba(29,78,216,0.3), inset 0 1px 1px rgba(255,255,255,0.12)',
        }}
      >
        <span className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />
        {ctaLabel}
      </button>

      <p className="flex items-center justify-center gap-1.5 mt-1 text-[11px] text-[#334155]">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
        Aucun spam · Désabonnement en 1 clic
      </p>
    </form>
  )
}
