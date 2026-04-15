import Link from "next/link";

type SiteHeaderProps = {
  current?: "home" | "tjenester" | "caser" | "om-oss" | "kontakt";
};

function navClass(isActive: boolean) {
  return isActive
    ? "text-black"
    : "text-black/65 transition hover:text-black";
}

export default function SiteHeader({
  current = "home",
}: SiteHeaderProps) {
  return (
    <header className="border-b border-black/10">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="flex flex-col gap-1">
          <div className="text-[16px] md:text-[18px] font-medium tracking-[0.14em] text-black/80">
            PRIMUS-GALLOPP
          </div>
          <div className="text-sm text-black/60 font-medium tracking-[-0.03em]">
            Strategi / Identitet / Kampanje / Presentasjon
          </div>
          <div className="hidden text-[10px] uppercase tracking-[0.28em] text-black/30 md:block">
            PG-STEDSNAVN / PG-SAREPTAVEIEN / PG-REMOTE
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <Link href="/tjenester" className={navClass(current === "tjenester")}>
            Tjenester
          </Link>
          <Link href="/caser" className={navClass(current === "caser")}>
            Caser
          </Link>
          <Link href="/om-oss" className={navClass(current === "om-oss")}>
            Om oss
          </Link>
          <Link href="/kontakt" className={navClass(current === "kontakt")}>
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
}