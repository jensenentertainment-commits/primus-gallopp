import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata: Metadata = {
  title: "Tjenester | Primus-Gallopp",
  description:
    "Tjenester utviklet for retning, tyngde og overbevisende prosesser. Merkevarestrategi, visuell identitet, kampanjeutvikling og semantisk tåkelegging.",
};

const secondaryServices = [
  {
    title: "Visuell identitet",
    text: "Systemer og uttrykk som signaliserer kontroll, retning og en overbevisende grad av intern enighet.",
  },
  {
    title: "Kampanjeutvikling",
    text: "Konsepter utviklet for oppmerksomhet, rekkevidde og rapportering som fremstår sterke også etter publisering.",
  },
  {
    title: "Presentasjon & pitch",
    text: "Materiell som gjør komplekse beslutninger enklere å støtte, eller i det minste vanskeligere å avvise.",
  },
];

const additionalServices = [
  {
    title: "Semantisk tåkelegging",
    text: "Vi omformulerer interne utfordringer til begreper som reduserer behovet for videre avklaring.",
    tone: "muted",
  },
  {
    title: "Grafisk presisering",
    text: "Brukes når løsningen i hovedsak er riktig, men fortsatt trenger å fremstå mer tilsiktet.",
    tone: "muted",
  },
  {
    title: "Intern begeistring",
    text: "For organisasjoner som trenger å kjenne at noe skjer, selv når det foreløpig primært skjer i språk, struktur og forventning.",
    tone: "accent",
  },
] as const;

const processSteps = [
  {
    step: "01",
    title: "Kartlegging",
    text: "Vi identifiserer hva virksomheten sier, hva den mener og hva den forsøker å slippe unna å si direkte.",
  },
  {
    step: "02",
    title: "Formulering",
    text: "Vi utvikler språk, posisjon og struktur som gjør retningen enklere å støtte internt.",
  },
  {
    step: "03",
    title: "Presisering",
    text: "Hierarki, form og begrepsbruk justeres til løsningen fremstår mer tilsiktet enn tilfeldig.",
  },
  {
    step: "04",
    title: "Presentasjon",
    text: "Løsningen settes i system og gjøres klar for rommet, dokumentet og oppsummeringen etterpå.",
  },
];

const relatedWork = [
  {
    href: "/caser",
    label: "Case 01",
    title: "Fra lokal aktør til premium konsept.",
    variant: "light",
  },
  {
    href: "/nfi",
    label: "Case 05",
    title: "Norsk Forventningsinstitutt",
    variant: "tinted",
  },
];

export default function TjenesterPage() {
  return (
    <main className="min-h-screen bg-[#f3efe7] text-[#111111]">
      <SiteHeader current="tjenester" />

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1100px] px-6 py-16 md:px-10 lg:py-24">
          <div className="text-[11px] uppercase tracking-[0.26em] text-black/40">
            Tjenester
          </div>

          <h1 className="display-font mt-4 max-w-4xl text-[clamp(3rem,6vw,5.5rem)] leading-[0.92] tracking-[-0.06em]">
            Tjenester utviklet for tydelighet,
            <br />
            fremdrift og overbevisende etterarbeid.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-black/68">
            Vi utvikler språk, struktur og visuell tyngde for virksomheter som
            trenger å fremstå mer avklarte enn de nødvendigvis er.
          </p>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1100px] px-6 py-14 md:px-10 lg:py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-start">
            <div>
              <div className="text-[11px] uppercase tracking-[0.24em] text-black/40">
                Kjerneområde
              </div>

              <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] md:text-5xl">
                Merkevarestrategi
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-black/70">
                Vi definerer en tydelig posisjon og formulerer den presist nok
                til å bli stående uendret i flere kvartaler.
              </p>

              <p className="mt-6 max-w-xl text-sm leading-7 text-black/58">
                Brukes når virksomheter trenger retning, språk og en struktur
                som virker besluttet nok til å samle organisasjonen rundt videre
                arbeid.
              </p>
            </div>

            <div className="rounded-[24px] border border-black/10 bg-[#111111] p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
              <div className="text-sm text-white/55">Typiske leveranser</div>

              <ul className="mt-6 space-y-3 text-base leading-7 text-white/80">
                <li>Posisjonering</li>
                <li>Begrepsapparat</li>
                <li>Narrativ struktur</li>
                <li>Strategisk presentasjon</li>
                <li>Intern forankring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1100px] px-6 py-14 md:px-10 lg:py-20">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.26em] text-black/40">
                Øvrige tjenester
              </div>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.05em] md:text-4xl">
                Leveranser på tvers av form, struktur og beslutningsrom.
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-black/60">
              Tjenester utviklet for å se riktige ut i rommet, dokumentet og
              oppsummeringen etterpå.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {secondaryServices.map((service, index) => (
              <article
                key={service.title}
                className={`rounded-[26px] border border-black/10 p-7 ${
                  index === 1 ? "bg-[#e8e1d5]" : "bg-white/40"
                }`}
              >
                <div className="text-[11px] uppercase tracking-[0.22em] text-black/38">
                  0{index + 2} / Tjeneste
                </div>
                <h3 className="mt-5 text-2xl font-medium tracking-[-0.045em]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-black/68">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1100px] px-6 py-14 md:px-10 lg:py-20">
          <div className="mb-8 text-[11px] uppercase tracking-[0.26em] text-black/40">
            Tjenester utenfor ordinært omfang
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {additionalServices.map((service) => (
              <article
                key={service.title}
                className={`rounded-[24px] border border-black/10 p-6 ${
                  service.tone === "accent"
                    ? "bg-[#d82323] text-white"
                    : "bg-[#e8e1d5]"
                }`}
              >
                <h3
                  className={`text-2xl font-medium tracking-[-0.04em] ${
                    service.tone === "accent" ? "text-white" : "text-black"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`mt-4 text-sm leading-7 ${
                    service.tone === "accent"
                      ? "text-white/82"
                      : "text-black/68"
                  }`}
                >
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#111111] text-white">
        <div className="mx-auto max-w-[1100px] px-6 py-14 md:px-10 lg:py-20">
          <div className="mb-8">
            <div className="text-[11px] uppercase tracking-[0.26em] text-white/42">
              Arbeidsprosess
            </div>
            <h2 className="mt-3 max-w-3xl text-3xl font-medium tracking-[-0.05em] md:text-4xl">
              En arbeidsform utviklet for å skape retning uten å lukke for mye
              for tidlig.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <article
                key={step.step}
                className="rounded-[22px] border border-white/10 bg-white/5 p-6"
              >
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/42">
                  {step.step}
                </div>
                <h3 className="mt-3 text-xl font-medium tracking-[-0.04em] text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/72">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1100px] px-6 py-14 md:px-10 lg:py-20">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.26em] text-black/40">
                Relatert arbeid
              </div>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.05em] md:text-4xl">
                Tjenester som allerede har materialisert seg i arbeid.
              </h2>
            </div>

            <Link
              href="/caser"
              className="text-sm text-black/65 underline underline-offset-4 transition hover:text-black"
            >
              Se alle caser
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {relatedWork.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`rounded-[26px] border border-black/10 p-7 transition hover:-translate-y-[1px] ${
                  item.variant === "tinted" ? "bg-[#e8e1d5]" : "bg-white/40"
                }`}
              >
                <div className="text-sm text-black/45">{item.label}</div>
                <div className="mt-3 text-2xl font-medium tracking-[-0.045em]">
                  {item.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}