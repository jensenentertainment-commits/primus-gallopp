import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Norsk Forventningsinstitutt",
  description:
    "Vi arbeider for mer presise forventninger i et komplekst samfunnsbilde.",
};

const focusAreas = [
  {
    title: "Privat forventning",
    text: "Kartlegging og oppfølging av forventningsnivå i husholdninger, relasjoner og mindre beslutningsmiljøer.",
  },
  {
    title: "Offentlig forventning",
    text: "Arbeid med rammer for hva innbyggere, brukere og aktører med rimelighet kan håpe på.",
  },
  {
    title: "Utsatt forventning",
    text: "Forventninger som er til stede, men som av hensyn til prosess, kapasitet eller tone ennå ikke kan innfris.",
  },
  {
    title: "Tverrsektoriell utjevning",
    text: "Tiltak for å harmonisere forventningsnivå mellom aktører som ikke deler språk, tempo eller ansvarsbilde.",
  },
];

const publications = [
  {
    type: "Rapport 2025",
    title: "Forventning før avklaring",
    text: "En gjennomgang av hvordan forventning etableres, opprettholdes og i enkelte tilfeller overlever full mangel på konkret grunnlag.",
    status: "Publisert",
  },
  {
    type: "Veileder",
    title: "Moderat håp i krevende tider",
    text: "Praktisk støtte for virksomheter og individer med behov for et mer bærekraftig forhold til mulige utfall.",
    status: "Tilgjengelig",
  },
  {
    type: "Temanotat",
    title: "Forventningspress i hybride prosesser",
    text: "Om møtepunktet mellom digitale flater, fysiske rom og antakelser ingen formelt har tatt ansvar for.",
    status: "Under distribusjon",
  },
];

const stats = [
  { label: "Publikasjoner", value: "18" },
  { label: "Fagnotater", value: "43" },
  { label: "Pågående vurderinger", value: "Vedvarende" },
  { label: "Regional dekning", value: "Foreløpig" },
];

const board = [
  {
    name: "Ragna V. Forberg",
    role: "Direktør",
    text: "Ansvarlig for instituttets samlede arbeid med forventningsnivå, faglig retning og nasjonal tilstedeværelse i krevende forløp.",
  },
  {
    name: "Leif M. Orden",
    role: "Avdelingsdirektør, analyse",
    text: "Leder arbeidet med kartlegging, kategorisering og vurdering av forventningsutvikling på tvers av sektorer og nivåer.",
  },
  {
    name: "Siv H. Mellem",
    role: "Leder, publikasjoner og veiledning",
    text: "Forvalter instituttets publikasjoner, veiledere og språklige rammeverk for presis og håndterbar forventning.",
  },
];

export default function NfiPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#17201f]">
      <header className="border-b border-[#17201f]/10 bg-[#eef2ec]">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-3 md:px-10">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#17201f]/55">
            Sist oppdatert: løpende
          </div>
          <Link
            href="/caser"
            className="text-sm text-[#17201f]/70 transition hover:text-[#17201f]"
          >
            Tilbake til caser
          </Link>
        </div>
      </header>

      <header className="border-b border-[#17201f]/10 bg-[#f7f5ef]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-5 px-6 py-6 md:px-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#17201f]/45">
              Nasjonal fagaktør
            </div>
            <div className="mt-2 text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.05em] text-[#1f2b28]">
              Norsk Forventningsinstitutt
            </div>
            <div className="mt-3 max-w-2xl text-base leading-7 text-[#17201f]/68">
              Vi arbeider for mer presise forventninger i et komplekst
              samfunnsbilde.
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#17201f]/65">
            <a href="#mandat" className="hover:text-[#17201f]">
              Mandat
            </a>
            <a href="#fagomrader" className="hover:text-[#17201f]">
              Fagområder
            </a>
            <a href="#publikasjoner" className="hover:text-[#17201f]">
              Publikasjoner
            </a>
            <a href="#organisering" className="hover:text-[#17201f]">
              Organisering
            </a>
          </nav>
        </div>
      </header>

      <section className="border-b border-[#17201f]/10">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-6 py-12 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#17201f]/45">
              Om instituttet
            </div>
            <h1 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.96] tracking-[-0.06em] text-[#1f2b28]">
              Forventning som
              <br />
              fagområde, rammeverk
              <br />
              og samfunnsforhold.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#17201f]/68">
              Norsk Forventningsinstitutt følger utviklingen i forventningsnivå
              på tvers av sektorer, bidrar til god forventningspraksis og styrker
              beredskap der utsiktene er uklare, men oppmerksomheten allerede er
              høy.
            </p>
          </div>

          <div className="grid gap-4">
            <article className="border border-[#17201f]/10 bg-[#e8ece6] p-6">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#17201f]/45">
                Status
              </div>
              <div className="mt-3 text-2xl font-medium tracking-[-0.04em] text-[#1f2b28]">
                Operativ
              </div>
              <p className="mt-4 text-sm leading-7 text-[#17201f]/65">
                Instituttet er i ordinær drift og arbeider løpende med analyse,
                veiledning og publisering innen forventningsrelaterte spørsmål.
              </p>
            </article>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <article
                  key={stat.label}
                  className="border border-[#17201f]/10 bg-white/50 p-5"
                >
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[#17201f]/45">
                    {stat.label}
                  </div>
                  <div className="mt-3 text-2xl font-medium tracking-[-0.04em] text-[#1f2b28]">
                    {stat.value}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="mandat" className="border-b border-[#17201f]/10 bg-[#1f2b28] text-[#f7f5ef]">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-12 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:py-16">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/45">
              Mandat
            </div>
            <h2 className="mt-4 max-w-lg text-3xl font-medium leading-tight tracking-[-0.05em] md:text-4xl">
              Å bidra til mer håndterbare nivåer av håp, antakelse og fremtidstro.
            </h2>
          </div>

          <div className="max-w-2xl text-base leading-8 text-white/76">
            Instituttet arbeider kunnskapsbasert med å identifisere,
            kategorisere og ved behov moderere forventning i møte med politikk,
            tjenester, prosesser og utviklingsløp. Arbeidet skjer i samspill med
            offentlig sektor, relevante miljøer og andre som vurderes som
            tilstrekkelig berørte.
          </div>
        </div>
      </section>

      <section id="fagomrader" className="border-b border-[#17201f]/10">
        <div className="mx-auto max-w-[1280px] px-6 py-12 md:px-10 lg:py-16">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#17201f]/45">
                Fagområder
              </div>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.05em] text-[#1f2b28] md:text-4xl">
                Instituttets overordnede arbeidsområder
              </h2>
            </div>
            <div className="max-w-xl text-sm leading-7 text-[#17201f]/62">
              Arbeidet er organisert i fire fagområder med relevans for samtidige
              og fremtidige forventningsforhold.
            </div>
          </div>

          <div className="grid gap-0 border border-[#17201f]/10">
            {focusAreas.map((area, index) => (
              <article
                key={area.title}
                className={`grid gap-4 p-6 md:grid-cols-[0.8fr_1.2fr] ${
                  index !== focusAreas.length - 1 ? "border-b border-[#17201f]/10" : ""
                } ${index % 2 === 0 ? "bg-white/40" : "bg-[#eef2ec]"}`}
              >
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[#17201f]/45">
                    0{index + 1}
                  </div>
                  <h3 className="mt-3 text-2xl font-medium tracking-[-0.04em] text-[#1f2b28]">
                    {area.title}
                  </h3>
                </div>
                <p className="max-w-2xl text-base leading-8 text-[#17201f]/68">
                  {area.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="publikasjoner" className="border-b border-[#17201f]/10">
        <div className="mx-auto max-w-[1280px] px-6 py-12 md:px-10 lg:py-16">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#17201f]/45">
                Publikasjoner
              </div>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.05em] text-[#1f2b28] md:text-4xl">
                Rapporter, veiledere og tematiske vurderinger
              </h2>
            </div>
            <div className="text-sm text-[#17201f]/55">
              Publiseres fortløpende
            </div>
          </div>

          <div className="grid gap-0 border border-[#17201f]/10">
            {publications.map((item, index) => (
              <article
                key={item.title}
                className={`grid gap-5 p-6 lg:grid-cols-[0.22fr_1fr_0.2fr] lg:items-start ${
                  index !== publications.length - 1
                    ? "border-b border-[#17201f]/10"
                    : ""
                } ${index === 1 ? "bg-[#1f2b28] text-white" : "bg-white/40"}`}
              >
                <div
                  className={`text-[11px] uppercase tracking-[0.2em] ${
                    index === 1 ? "text-white/45" : "text-[#17201f]/45"
                  }`}
                >
                  {item.type}
                </div>

                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.04em]">
                    {item.title}
                  </h3>
                  <p
                    className={`mt-4 max-w-2xl text-base leading-8 ${
                      index === 1 ? "text-white/76" : "text-[#17201f]/68"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>

                <div
                  className={`text-sm ${
                    index === 1 ? "text-white/52" : "text-[#17201f]/52"
                  }`}
                >
                  {item.status}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="organisering" className="border-b border-[#17201f]/10 bg-[#eef2ec]">
        <div className="mx-auto max-w-[1280px] px-6 py-12 md:px-10 lg:py-16">
          <div className="mb-8">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#17201f]/45">
              Organisering
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.05em] text-[#1f2b28] md:text-4xl">
              Ledelse og faglig ansvar
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {board.map((person) => (
              <article
                key={person.name}
                className="border border-[#17201f]/10 bg-[#f7f5ef] p-6"
              >
                <h3 className="text-2xl font-medium tracking-[-0.04em] text-[#1f2b28]">
                  {person.name}
                </h3>
                <div className="mt-2 text-sm uppercase tracking-[0.18em] text-[#17201f]/45">
                  {person.role}
                </div>
                <p className="mt-5 text-base leading-8 text-[#17201f]/68">
                  {person.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#f7f5ef]">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-10 md:px-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#17201f]/45">
              Norsk Forventningsinstitutt
            </div>
            <div className="mt-3 max-w-xl text-sm leading-7 text-[#17201f]/62">
              Nasjonal fagaktør for forventningsrelaterte spørsmål, nivåer og
              utviklingstrekk.
            </div>
          </div>

          <div className="flex flex-col gap-3 text-sm text-[#17201f]/62 lg:items-end">
            <Link href="/caser" className="transition hover:text-[#17201f]">
              Tilbake til caser
            </Link>
            <Link href="/kontakt" className="transition hover:text-[#17201f]">
              Kontakt Primus-Gallopp
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}