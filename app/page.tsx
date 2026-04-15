import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import { cases, facts, services, signals } from "@/app/lib/content";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3efe7] text-[#111111]">
      <SiteHeader current="home" />

      <section className="border-b border-black/10">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-6 py-14 md:px-10 lg:grid-cols-[1.25fr_0.75fr] lg:py-24">
          <div className="max-w-6xl">
            <div className="hero-reveal text-[11px] uppercase tracking-[0.28em] text-black/40">
              Uavhengig design- og reklamebyrå
            </div>

            <h1 className="display-font hero-reveal hero-reveal-delay-1 max-w-5xl text-[clamp(3.2rem,7vw,6.6rem)] font-semibold leading-[0.88] tracking-[-0.06em]">
              Kommunikasjon
              <br />
              for virksomheter
              <br />
              med høye ambisjoner
              <br />
              og varierende premisser.
            </h1>

            <div className="hero-reveal hero-reveal-delay-2 mt-8 h-px w-24 bg-black/20" />

            <p className="hero-reveal hero-reveal-delay-2 mt-8 max-w-2xl text-lg leading-8 text-black/68 md:text-[1.15rem]">
              Primus-Gallopp utvikler identiteter, kampanjer og presentasjoner
              for selskaper som ønsker å fremstå tydelige, relevante og
              strategisk overbeviste, også når grunnlaget er ujevnt fordelt.
            </p>

            <div className="hero-reveal hero-reveal-delay-3 mt-10 flex flex-wrap gap-4">
              <Link
                href="/caser"
                className="inline-flex items-center rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-[#f3efe7] transition hover:opacity-90"
              >
                Se utvalgte caser
              </Link>
              <Link
                href="/tjenester"
                className="inline-flex items-center rounded-full border border-black/15 px-6 py-3 text-sm font-medium text-black transition hover:bg-black/5"
              >
                Våre tjenester
              </Link>
            </div>

            <p className="hero-reveal hero-reveal-delay-4 mt-10 text-[11px] uppercase tracking-[0.24em] text-black/38">
              Selected clients include organisations, concepts and temporary alignments
            </p>
          </div>

          <div className="flex flex-col justify-between gap-5 lg:pl-6">
            <article className="hero-reveal hero-reveal-delay-2 rounded-[30px] border border-black/10 bg-[#111111] p-8 text-[#f3efe7]">
              <div className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                Utvalgt mandat
              </div>
              <div className="mt-5 text-sm text-white/55">Case 02 / DirectFarm+</div>
              <h2 className="mt-3 text-[clamp(2rem,3vw,3rem)] font-medium leading-[1] tracking-[-0.055em]">
                {cases[1].title}
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-white/72">
                {cases[1].body}
              </p>
              <div className="mt-8 h-px w-full bg-white/10" />
              <div className="mt-5 text-sm text-white/55">
                Resultat: 0% konvertering / 100% intern ro
              </div>
            </article>

            <div className="grid grid-cols-2 gap-3">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-[22px] border border-black/10 bg-white/40 p-5"
                >
                  <div className="text-[11px] uppercase tracking-[0.22em] text-black/38">
                    {fact.label}
                  </div>
                  <div className="mt-3 text-2xl font-medium tracking-[-0.04em]">
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#dcd4c7]">
        <div className="mx-auto max-w-[1440px] px-6 py-10 md:px-10">
          <div className="grid gap-4 md:grid-cols-3">
            {signals.map((signal) => (
              <div
                key={signal}
                className="rounded-[20px] border border-black/10 bg-white/30 px-5 py-6 text-sm leading-7 text-black/68"
              >
                {signal}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#111111] text-[#f3efe7]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-14 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/40">
              Om tilnærmingen
            </div>
            <h2 className="mt-4 max-w-xl text-3xl font-medium leading-tight tracking-[-0.055em] md:text-4xl">
              Vi tror på tydelig form, sterk retning og beslutninger som tåler
              etterrasjonalisering.
            </h2>
          </div>

          <div className="max-w-2xl text-base leading-8 text-white/70">
            Primus-Gallopp kombinerer strategisk språk, visuell presisjon og
            kontrollerte mengder overbevisning for å hjelpe virksomheter med å
            fremstå mer samstemte enn de nødvendigvis er. Vi arbeider på tvers
            av identitet, kampanje, presentasjon og intern begeistring.
          </div>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-10 lg:py-20">
          <div className="mb-10 grid gap-6 md:grid-cols-[1fr_0.5fr] md:items-end">
            <div>
              <div className="text-[11px] uppercase tracking-[0.26em] text-black/40">
                Selected capabilities
              </div>
              <h2 className="mt-3 max-w-4xl text-3xl font-medium tracking-[-0.055em] md:text-4xl">
                Tjenester med høy gjennomføringsevne og varierende premisser.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-black/60">
              Vi designer systemer, kampanjer og presentasjoner som ser
              strategiske ut i rommet, i dokumentet og i oppsummeringen etterpå.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <article className="rounded-[32px] border border-black/10 bg-white/55 p-8 md:row-span-2 md:p-10">
              <div className="text-[11px] uppercase tracking-[0.24em] text-black/38">
                01 / Kjerneområde
              </div>
              <h3 className="mt-6 max-w-md text-3xl font-medium leading-tight tracking-[-0.055em]">
                {services[0].title}
              </h3>
              <p className="mt-5 max-w-lg text-base leading-8 text-black/68">
                {services[0].text}
              </p>
              <div className="mt-10 max-w-sm text-sm leading-7 text-black/52">
                Brukes når virksomheter trenger en tydeligere identitet, en ny
                retning eller et språk som virker besluttet nok til å stå i fred
                en stund.
              </div>
            </article>

            {services.slice(1).map((service, index) => (
              <article
                key={service.title}
                className={`rounded-[20px] border border-black/10 p-10 shadow-[0_20px_60px_rgba(0,0,0,0.25)] ${
                  index === 1 ? "bg-[#e8e1d5]" : "bg-white/40"
                }`}
              >
                <div className="text-[11px] uppercase tracking-[0.24em] text-black/38">
                  0{index + 2} / Tjeneste
                </div>
                <h3 className="mt-5 text-2xl font-medium tracking-[-0.05em]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-black/68">
                  {service.text}
                </p>
              </article>
            ))}

            <article className="rounded-[30px] border border-black/10 bg-[#d82323] p-8 text-white  ">
              <div className="text-[11px] uppercase tracking-[0.24em] text-white/52">
                05 / Tillegg
              </div>
              <h3 className="mt-5 text-2xl font-medium tracking-[-0.02em] tracking-[-0.02em] rotate-[-0.5deg]">
                Intern begeistring
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/82">
                For organisasjoner som trenger å kjenne at noe skjer, selv når
                det foreløpig primært skjer i språk, struktur og forventning.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-10 lg:py-20">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.26em] text-black/40">
                Selected work
              </div>
              <h2 className="mt-3 max-w-4xl text-3xl font-medium tracking-[-0.055em] md:text-4xl">
                Caser utviklet for tydelighet, fremdrift og overbevisende
                etterarbeid.
              </h2>
            </div>
            <Link
              href="/caser"
              className="text-sm font-medium text-black/65 underline decoration-black/20 underline-offset-4 transition hover:text-black"
            >
              Se alle caser
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
            <article className="rounded-[36px] border border-black/10 bg-[#e8e1d5] p-8 md:p-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="text-[11px] uppercase tracking-[0.24em] text-black/42">
                  Case {cases[0].id} / {cases[0].category}
                </div>
                <div className="text-sm text-black/45">{cases[0].client}</div>
              </div>

              <h3 className="mt-8 max-w-3xl text-4xl font-medium leading-[0.98] tracking-[-0.075em] md:text-5xl">
                {cases[0].title}
              </h3>

              <p className="mt-6 max-w-2xl text-base leading-8 text-black/68">
                {cases[0].body}
              </p>

              <div className="mt-10 grid gap-3 md:grid-cols-3">
                <div className="rounded-[22px] border border-black/10 bg-white/35 p-5">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-black/38">
                    Resultat
                  </div>
                  <div className="mt-3 text-2xl font-medium tracking-[-0.04em]">
                    Lavere salg
                  </div>
                </div>
                <div className="rounded-[22px] border border-black/10 bg-white/35 p-5">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-black/38">
                    Effekt
                  </div>
                  <div className="mt-3 text-2xl font-medium tracking-[-0.04em]">
                    Høyere tyngde
                  </div>
                </div>
                <div className="rounded-[22px] border border-black/10 bg-white/35 p-5">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-black/38">
                    Leveranse
                  </div>
                  <div className="mt-3 text-lg font-medium tracking-[-0.04em]">
                    {cases[0].meta}
                  </div>
                </div>
              </div>
            </article>

            <div className="grid gap-5">
              {cases.slice(1).map((item, index) => (
                <article
                  key={item.id}
                  className={`rounded-[30px] border border-black/10 p-8 ${
                    index === 0 ? "bg-[#111111] text-[#f3efe7]" : "bg-white/45"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div
                      className={`text-[11px] uppercase tracking-[0.24em] ${
                        index === 0 ? "text-white/42" : "text-black/38"
                      }`}
                    >
                      Case {item.id} / {item.category}
                    </div>
                    <div
                      className={`text-sm ${
                        index === 0 ? "text-white/45" : "text-black/45"
                      }`}
                    >
                      {item.client}
                    </div>
                  </div>

                  <h3 className="mt-6 text-2xl font-medium leading-tight tracking-[-0.05em]">
                    {item.title}
                  </h3>

                  <p
                    className={`mt-4 text-sm leading-7 ${
                      index === 0 ? "text-white/72" : "text-black/68"
                    }`}
                  >
                    {item.body}
                  </p>

                  <div
                    className={`mt-8 border-t pt-4 text-sm ${
                      index === 0
                        ? "border-white/10 text-white/50"
                        : "border-black/10 text-black/50"
                    }`}
                  >
                    {item.meta}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-14 md:px-10 lg:flex-row lg:items-end lg:justify-between lg:py-20">
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.26em] text-black/40">
              Kontakt
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.055em] md:text-4xl">
              Tilgjengelige for nye mandater, selektive forespørsler og visuelt
              overbevisende prosesser.
            </h2>
          </div>

          <div className="flex flex-col gap-4 text-sm text-black/65">
            <a href="mailto:post@primus-gallopp.no" className="hover:text-black">
              post@primus-gallopp.no
            </a>
            <div>Stedsnavn / Sareptaveien / Midlertidig på stedet</div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}