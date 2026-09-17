const VARIANTS = {
  color: "/logo-cergis-full.webp",
  white: "/logo-cergis-white2.webp",
};

export default function Logo({ variant = "color", className = "h-10" }) {
  return (
    <img
      src={VARIANTS[variant]}
      alt="Cergis Networks"
      className={`w-auto max-w-full object-contain ${className}`}
      draggable="false"
    />
  );
}
