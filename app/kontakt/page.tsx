import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Primus-Gallopp",
  description:
    "Kontakt Primus-Gallopp for nye mandater, selektive forespørsler og visuelt overbevisende prosesser.",
};
export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-[#f3efe7] text-[#111111]">
      <SiteHeader current="kontakt" />

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 lg:py-24">
          <div className="text-[11px] uppercase tracking-[0.26em] text-black/40">
            Kontakt
          </div>
          <h1 className="display-font mt-4 max-w-4xl text-[clamp(3rem,6vw,5.5rem)] leading-[0.92] tracking-[-0.06em]">
            Tilgjengelige for nye mandater, selektive forespørsler og visuelt overbevisende prosesser.
          </h1>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-[1440px] gap-5 px-6 py-14 md:px-10 lg:grid-cols-2 lg:py-20">
          <article className="rounded-[30px] border border-black/10 bg-white/40 p-8 md:p-10">
            <div className="text-[11px] uppercase tracking-[0.24em] text-black/38">
              E-post
            </div>
            <a
              href="mailto:post@primus-gallopp.no"
              className="mt-5 block text-3xl font-medium tracking-[-0.04em] hover:opacity-70"
            >
              post@primus-gallopp.no
            </a>
          </article>

          <article className="rounded-[30px] border border-black/10 bg-[#111111] p-8 text-[#f3efe7] md:p-10">
            <div className="text-[11px] uppercase tracking-[0.24em] text-white/40">
              Lokasjoner
            </div>
            <div className="mt-5 text-3xl font-medium tracking-[-0.04em]">
              Rykkin / Sareptaveien / Midlertidig på stedet
            </div>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/72">
              Fysiske møter vurderes fortløpende. Digitale møter gjennomføres
              ved behov, kapasitet og en viss grad av felles begrepsforståelse.
            </p>
          </article>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}