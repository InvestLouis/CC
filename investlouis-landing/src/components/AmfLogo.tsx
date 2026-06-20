export default function AmfLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 110"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <text
        x="110" y="74"
        fontFamily="Arial Black, Helvetica, sans-serif"
        fontWeight="900"
        fontSize="70"
        letterSpacing="-2"
        fill="#E2001A"
        textAnchor="middle"
      >AMF</text>
      <rect x="0" y="80" width="220" height="5" fill="#003189" />
      <text
        x="110" y="104"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="400"
        fontSize="11"
        letterSpacing="0.5"
        fill="#003189"
        textAnchor="middle"
      >Autorité des marchés financiers</text>
    </svg>
  )
}
