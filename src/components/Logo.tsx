import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

export function Logo({
  variant = "light",
  onNavigate,
}: {
  variant?: "light" | "dark";
  onNavigate: (href: string) => void;
}) {
  return (
    <a
      href="/"
      className="group flex items-center gap-3"
      onClick={(event) => {
        event.preventDefault();
        onNavigate("/");
      }}
    >
      <motion.img
        src={logo}
        alt="WCM Ghana"
        width={56}
        height={56}
        className={`h-10 w-auto object-contain ${variant === "dark" ? "brightness-0 invert" : ""}`}
        whileHover={{ rotate: -6, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      />
      <div className="hidden leading-tight sm:block">
        <div
          className={`font-display text-sm font-bold ${
            variant === "dark" ? "text-primary-foreground" : "text-navy"
          }`}
        >
          WCM Ghana
        </div>
        <div className={`text-[10px] uppercase ${variant === "dark" ? "text-gold" : "text-muted-foreground"}`}>
          World Conference of Mayors
        </div>
      </div>
    </a>
  );
}
