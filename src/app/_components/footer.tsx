import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-row items-center justify-between bg-blue-700 p-10 text-white">
      <div>
        <p>LIBERTAS CEFET</p>
        <p>&quot;Em busca da liberdade do CEFET-NF&quot;</p>
      </div>
      <p>
        &copy; 2026 • Yohanan{" "}
        <Link
          href={"https://github.com/YohananBoy"}
          target="_blank"
          className="underline decoration-white decoration-dashed decoration-0"
        >
          github.com/YohananBoy
        </Link>
      </p>
    </footer>
  );
}
