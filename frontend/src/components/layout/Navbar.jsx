import { useLocation } from "react-router-dom";
import PillNav from "../PillNav";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Profile", href: "/profile" },
  { label: "Log In", href: "/login" },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <PillNav
      logo="/logo.svg"
      logoAlt="E-Cell Marketplace"
      items={NAV_ITEMS}
      activeHref={pathname}
      ease="power3.easeOut"
      baseColor="#10b981"
      pillColor="#0f172a"
      hoveredPillTextColor="#0f172a"
      pillTextColor="#e2e8f0"
    />
  );
}
