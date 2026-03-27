import Menu from "./menu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex flex-row items-center justify-around gap-5 border-2 border-b-black bg-white">
      <a href="/">
        <img
          src="\images\libertas-cefet-logo.png"
          alt="Logo Libertas Cefet"
          className="w-2xs"
        />
      </a>
      <Menu></Menu>
    </header>
  );
}
