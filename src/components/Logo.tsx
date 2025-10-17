import logoIcon from "@/assets/logo-icon.png";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* Phoenix Icon */}
      <img src={logoIcon} alt="MpowHR Phoenix Logo" className="h-12 w-auto" />

      {/* Text Content */}
      <div className="flex flex-col">
        {/* Main Logo Text */}
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 800,
            fontSize: "1.5rem",
            background: "linear-gradient(135deg, #B8941F 0%, #8B7A1A 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: "1",
          }}
        >
          MpowHR
        </div>

        {/* Tagline */}
        <div
          style={{
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 500,
            fontSize: "0.625rem",
            color: "#D4AF37", // Golden color
            letterSpacing: "0.2em",
            marginTop: "0.2rem",
            textTransform: "uppercase",
          }}
        >
          People Brilliance
        </div>
      </div>
    </div>
  );
}
