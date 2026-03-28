import Link from "next/link";
import Menu from "./menu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-40 flex-col items-center justify-around gap-5 border-b-3 border-blue-900 bg-linear-to-b from-white from-50% to-blue-300 md:h-38 md:flex-row md:bg-linear-to-r md:from-30%">
      <Link href="/">
        <img
          src="\images\libertas-cefet-logo.png"
          alt="Logo Libertas Cefet"
          className="mt-2 h-25 md:mt-0 md:h-30"
        />
      </Link>
      <Menu></Menu>
    </header>
  );
}
