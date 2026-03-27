import Link from "@mui/material/Link";

export default function Menu() {
  return (
    <nav className="flex flex-row gap-5 md:gap-10">
      <Link href="#inicio" underline="hover">
        Início
      </Link>
      <Link href="#pautas" underline="hover">
        Pautas
      </Link>
      <Link href="#imagens" underline="hover">
        Imagens
      </Link>
      <Link href="#junte-se" underline="hover">
        Junte-se a nós!
      </Link>
    </nav>
  );
}
