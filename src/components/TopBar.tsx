import { Mail, Phone, MapPin } from "lucide-react";

export function TopBar() {
  return (
    <div className="hidden bg-navy text-xs text-primary-foreground/85 md:block">
      <div className="container-page flex h-9 items-center justify-between">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5">
            <Mail className="h-3 w-3 text-gold" /> info.wcmghana@gmail.com
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="h-3 w-3 text-gold" /> +233 553 018 442
          </span>
        </div>
        <span className="flex items-center gap-1.5">
          <MapPin className="h-3 w-3 text-gold" /> Accra, Ghana
        </span>
      </div>
    </div>
  );
}

