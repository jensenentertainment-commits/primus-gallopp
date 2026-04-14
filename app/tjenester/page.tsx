import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import { services } from "@/app/lib/content";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tjenester | Primus-Gallopp",
  description:
    "Tjenester utviklet for retning, tyngde og overbevisende prosesser. Merkevarestrategi, visuell identitet, kampanjeutvikling og semantisk tåkelegging.",
};

export default function TjenesterPage() {
  return (
    <main className="min-h-screen bg-[#f3efe7] text-[#111111]">
      <SiteHeader current="tjenester" />

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 lg:py-24">
          <div className="text-[11px] uppercase tracking-[0.26em] text-black/40">
            Tjenester
          </div>
          <h1 className="display-font mt-4 max-w-4xl text-[clamp(3rem,6vw,5.5rem)] leading-[0.92] tracking-[-0.06em]">
            Tjenester utviklet for retning, tyngde og overbevisende prosesser.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-black/68">
            Vi arbeider i skjæringspunktet mellom strategi, form og formulering.
            Utfallet er ofte tydeligere enn utgangspunktet.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-10 lg:py-20">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`rounded-[30px] border border-black/10 p-8 ${
                  index === 4 ? "bg-[#dcd4c7]" : "bg-white/40"
                }`}
              >
                <div className="text-[11px] uppercase tracking-[0.24em] text-black/38">
                  0{index + 1} / Tjeneste
                </div>
                <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.05em]">
                  {service.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-black/68">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}