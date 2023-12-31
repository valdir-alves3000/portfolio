import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";

export function Navbar() {
  return (
    <header className="w-full p-7 lg:bg-gray-700 lg:border-b lg:border-gray-600 lg:px-20 lg:py-10">
      <NavbarDesktop />
      <NavbarMobile />
    </header>
  );
}
