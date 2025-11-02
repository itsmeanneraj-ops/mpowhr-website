import logoIcon from "@/assets/logo-icon.png";

export default function Logo() {
  return (
    <div className="flex items-center gap-1">
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
            lineHeight: "1.2",
          }}
        >
          <span
            style={{
              background:
                "linear-gradient(135deg, #8B6914 0%, #D4AF37 25%, #FFD700 50%, #D4AF37 75%, #8B6914 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            MpowHR
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 500,
            fontSize: "0.5rem",
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
