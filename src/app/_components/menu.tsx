import Link from "next/link";
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
        className="text-blue-900 no-underline transition-all ease-in hover:border-b-4 hover:text-blue-500 md:pb-1"
      >
        Início
      </Link>
      <Link
        href="#pautas"
        className="text-blue-900 no-underline transition-all ease-in hover:border-b-4 hover:text-blue-500 md:pb-1"
      >
        Pautas
      </Link>
      <Link
        href="#imagens"
        className="text-blue-900 no-underline transition-all ease-in hover:border-b-4 hover:text-blue-500 md:pb-1"
      >
        Imagens
      </Link>
      <Link
        href="#junte-se"
        className="text-blue-900 no-underline transition-all ease-in hover:border-b-4 hover:text-blue-500 md:pb-1"
      >
        Junte-se a nós!
      </Link>
    </nav>
  );
}
