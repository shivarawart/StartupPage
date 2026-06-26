import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappNumber = "911234567890"; // Replace with your number

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi,%20I%20want%20to%20learn%20more%20about%20your%20language%20courses`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="group fixed bottom-6 right-6 z-[999]"
    >
      {/* Pulse Ring */}
      <span
        className="
        absolute
        inset-0
        rounded-full
        bg-green-500/40
        animate-ping
      "
      />

      {/* Outer Glow */}
      <span
        className="
        absolute
        inset-0
        rounded-full
        blur-xl
        bg-green-500/40
        opacity-0
        transition
        duration-300
        group-hover:opacity-100
      "
      />

      {/* Main Button */}
      <div
        className="
        relative
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-gradient-to-br
        from-green-500
        to-green-600
        text-white
        shadow-[0_10px_35px_rgba(34,197,94,0.45)]
        transition-all
        duration-300
        group-hover:scale-110
      "
      >
        <MessageCircle size={30} />
      </div>

      {/* Tooltip */}
      <div
        className="
        pointer-events-none
        absolute
        right-20
        top-1/2
        -translate-y-1/2
        whitespace-nowrap
        rounded-xl
        bg-slate-900
        px-4
        py-2
        text-sm
        font-medium
        text-white
        opacity-0
        transition-all
        duration-300
        group-hover:opacity-100
        group-hover:right-24
      "
      >
        Chat With Us 👋
      </div>
    </a>
  );
}
