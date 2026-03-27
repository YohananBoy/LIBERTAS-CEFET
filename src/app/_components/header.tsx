import Link from "next/link";
import Menu from "./menu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-40 flex-col items-center justify-around gap-5 border-2 border-b-black bg-white md:h-38 md:flex-row">
      <Link href="/">
        <img
          src="\images\libertas-cefet-logo.png"
          alt="Logo Libertas Cefet"
          className="h-28 md:h-37"
        />
      </Link>
      <Menu></Menu>
    </header>
  );
}
