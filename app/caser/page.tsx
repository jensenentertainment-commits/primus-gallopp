import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import { cases } from "@/app/lib/content";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Caser | Primus-Gallopp",
  description:
    "Utvalgte caser fra Primus-Gallopp. Arbeid utviklet for tydelighet, fremdrift og overbevisende etterarbeid.",
};

export default function CaserPage() {
  return (
    <main className="min-h-screen bg-[#f3efe7] text-[#111111]">
      <SiteHeader current="caser" />

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 lg:py-24">
          <div className="text-[11px] uppercase tracking-[0.26em] text-black/40">
            Caser
          </div>
          <h1 className="display-font mt-4 max-w-4xl text-[clamp(3rem,6vw,5.5rem)] leading-[0.92] tracking-[-0.06em]">
            Arbeid utviklet for tydelighet, fremdrift og overbevisende etterarbeid.
          </h1>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-10 lg:py-20">
          <div className="grid gap-5">
            {cases.map((item, index) => (
              <article
                key={item.id}
                className={`rounded-[34px] border border-black/10 p-8 md:p-10 ${
                  index === 1 ? "bg-[#111111] text-[#f3efe7]" : "bg-white/40"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div
                    className={`text-[11px] uppercase tracking-[0.24em] ${
                      index === 1 ? "text-white/42" : "text-black/40"
                    }`}
                  >
                    Case {item.id} / {item.category}
                  </div>
                  <div
                    className={`text-sm ${
                      index === 1 ? "text-white/45" : "text-black/45"
                    }`}
                  >
                    {item.client}
                  </div>
                </div>

                <h2 className="mt-6 max-w-4xl text-4xl font-medium leading-[0.98] tracking-[-0.07em] md:text-5xl">
                  {item.title}
                </h2>

                <p
                  className={`mt-6 max-w-3xl text-base leading-8 ${
                    index === 1 ? "text-white/72" : "text-black/68"
                  }`}
                >
                  {item.body}
                </p>

                <div
                  className={`mt-8 border-t pt-5 text-sm ${
                    index === 1
                      ? "border-white/10 text-white/50"
                      : "border-black/10 text-black/50"
                  }`}
                >
                  {item.meta}
                </div>
            {item.id === "05" && (
  <div
    className={`mt-5 text-sm ${
      index === 1 ? "text-white/70" : "text-black/70"
    }`}
  >
    <Link href="/nfi" className="underline underline-offset-4">
      Se løsning →
    </Link>
  </div>
)}
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}