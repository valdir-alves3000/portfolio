import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";

export function Navbar() {
  return (
    <header className="w-full p-10 lg:bg-gray-700 lg:border-b lg:border-gray-600">
      <NavbarDesktop />
      <NavbarMobile />
    </header>
  );
}
