import LeadForm from './LeadForm'

export default function CtaFinal() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] bg-[#1D4ED8] opacity-[0.06] blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-[560px] mx-auto text-center flex flex-col items-center gap-8">

        <div>
          <p className="font-['Montserrat'] font-bold text-[10px] tracking-[2px] uppercase
                        text-[#B8963E] mb-4">
            Dernière chance
          </p>
          <h2 className="font-['Montserrat'] font-black text-white text-[36px] lg:text-[44px]
                         leading-[1.1] tracking-[-1px] mb-4">
            Les institutions tradent.<br />
            <span className="text-[#3B82F6]">Et toi ?</span>
          </h2>
          <p className="text-[#475569] text-[16px] leading-relaxed">
            Rejoins 4 800 traders qui ont arrêté de se battre contre le marché
            et ont commencé à lire ce que les institutionnels font vraiment.
          </p>
        </div>

        <div className="w-full max-w-[380px]">
          <LeadForm ctaLabel="Je Veux Mon Guide Gratuit →" />
        </div>

      </div>
    </section>
  )
}
