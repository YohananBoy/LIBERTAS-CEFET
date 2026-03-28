import Link from "@mui/material/Link";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["500"],
});

export default function Menu() {
  return (
    <nav
      className={`flex flex-row gap-5 text-lg md:gap-10 md:text-xl ${kanit.className}`}
    >
      <Link
        href="#inicio"
        underline="hover"
        className="text-blue-900 no-underline hover:border-b-4 hover:text-blue-500 md:pb-1"
      >
        Início
      </Link>
      <Link
        href="#pautas"
        underline="hover"
        className="text-blue-900 no-underline hover:border-b-4 hover:text-blue-500 md:pb-1"
      >
        Pautas
      </Link>
      <Link
        href="#imagens"
        underline="hover"
        className="text-blue-900 no-underline hover:border-b-4 hover:text-blue-500 md:pb-1"
      >
        Imagens
      </Link>
      <Link
        href="#junte-se"
        underline="hover"
        className="text-blue-900 no-underline hover:border-b-4 hover:text-blue-500 md:pb-1"
      >
        Junte-se a nós!
      </Link>
    </nav>
  );
}
