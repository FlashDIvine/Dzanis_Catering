import Link from "next/link";
import { company } from "@/data/company";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary-deep border-t border-white/10 pt-10 pb-28 md:pb-10 px-6 md:px-12 lg:px-16">
      <div className="w-full max-w-[1360px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-[0.82rem] font-semibold text-white/90">
            {company.name}
          </span>
          <span className="text-[0.74rem] text-white/50">
            &copy; {company.legalName} {company.establishedYear}–{currentYear}. Hak Cipta Dilindungi.
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5">
          <Link
            href="#layanan"
            className="text-[0.78rem] font-medium text-white/60 hover:text-white transition-colors"
          >
            Layanan
          </Link>
          <Link
            href="#harga"
            className="text-[0.78rem] font-medium text-white/60 hover:text-white transition-colors"
          >
            Paket & Harga
          </Link>
          <Link
            href="#testimoni"
            className="text-[0.78rem] font-medium text-white/60 hover:text-white transition-colors"
          >
            Testimoni
          </Link>
          <Link
            href="#area"
            className="text-[0.78rem] font-medium text-white/60 hover:text-white transition-colors"
          >
            Area Layanan
          </Link>
          <Link
            href="#faq"
            className="text-[0.78rem] font-medium text-white/60 hover:text-white transition-colors"
          >
            FAQ
          </Link>
          <a
            href={company.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.78rem] font-medium text-white/60 hover:text-accent-light transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
