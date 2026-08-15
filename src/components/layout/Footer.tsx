import Link from "next/link";
import { company } from "@/data/company";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#3D1238] border-t border-[#7DB832]/[0.08] py-8 px-6 md:px-16">
      <div className="w-full max-w-[1360px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <span className="text-[0.76rem] text-white/30">
          &copy; {company.legalName} · {company.name} {company.establishedYear}–{currentYear}
        </span>

        <div className="flex flex-wrap items-center justify-center gap-5">
          <Link
            href="#layanan"
            className="text-[0.76rem] text-white/30 hover:text-[#9ED44F] transition-colors"
          >
            Layanan
          </Link>
          <Link
            href="#paket"
            className="text-[0.76rem] text-white/30 hover:text-[#9ED44F] transition-colors"
          >
            Paket & Harga
          </Link>
          <Link
            href="#testimoni"
            className="text-[0.76rem] text-white/30 hover:text-[#9ED44F] transition-colors"
          >
            Testimoni
          </Link>
          <Link
            href="#area"
            className="text-[0.76rem] text-white/30 hover:text-[#9ED44F] transition-colors"
          >
            Area Layanan
          </Link>
          <a
            href={company.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.76rem] text-white/30 hover:text-[#9ED44F] transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
