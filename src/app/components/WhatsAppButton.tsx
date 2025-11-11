import Image from "next/image";
import Link from "next/link";

interface WhatsAppButtonProps {
  href?: string;
  size?: number;
  ariaLabel?: string;
  className?: string; // wrapper classes (positioning)
  pulse?: boolean;
  priority?: boolean;
}

export default function WhatsAppButton({
  href = "https://wa.me/5569993533868",
  size = 70,
  ariaLabel = "Abrir conversa no WhatsApp",
  className,
  pulse = true,
  priority = true,
}: WhatsAppButtonProps) {
  const wrapperClass = className
    ? `fixed z-50 ${className}`
    : "fixed bottom-10 right-10 z-50";

  return (
    <div className={wrapperClass}>
      <Link
        href={href}
        className={`flex items-center relative ${
          pulse ? "animate-pulse" : ""
        } hover:scale-110 transition-transform focus:outline-none focus:ring-4 focus:ring-green-300`}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/whatsApp2.webp"
          alt="Ícone do WhatsApp"
          width={size}
          height={size}
          className="z-20"
          priority={priority}
        />
      </Link>
    </div>
  );
}
