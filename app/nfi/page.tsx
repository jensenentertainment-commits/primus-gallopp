import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Norsk Forventningsinstitutt",
  description:
    "Vi arbeider for mer presise forventninger i et komplekst samfunnsbilde.",
};

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

const keyFigures = [
  { label: "Publikasjoner", value: "18" },
  { label: "Fagnotater", value: "43" },
  { label: "Pågående vurderinger", value: "Vedvarende" },
  { label: "Regional dekning", value: "Foreløpig" },
];

export default function NfiPage() {
  return (
    <main className="min-h-screen bg-[#f6f4ee] text-[#1b2422]">
      <div className="border-b border-[#1b2422]/10 bg-[#e7ece7]">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-3 md:px-8">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#1b2422]/55">
            Nasjonal fagaktør / Løpende oppdatert
          </div>
          <Link
            href="/caser"
            className="text-sm text-[#1b2422]/68 transition hover:text-[#1b2422]"
          >
            Tilbake til caser
          </Link>
        </div>
      </div>

      <header className="border-b border-[#1b2422]/10">
        <div className="mx-auto max-w-[1180px] px-5 py-8 md:px-8 md:py-10">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#1b2422]/45">
            Norsk Forventningsinstitutt
          </div>
          <div className="mt-3 max-w-4xl text-[clamp(2.2rem,4.5vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#22302d]">
            Vi arbeider for mer presise forventninger i et komplekst samfunnsbilde.
          </div>

          <div className="mt-8 grid gap-8 border-t border-[#1b2422]/10 pt-8 md:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-2xl text-base leading-8 text-[#1b2422]/68">
              Norsk Forventningsinstitutt følger utviklingen i forventningsnivå
              på tvers av sektorer, bidrar til god forventningspraksis og styrker
              beredskap der utsiktene er uklare, men oppmerksomheten allerede er
              høy.
            </div>

            <div className="grid gap-0 border border-[#1b2422]/10 bg-white/45">
              {keyFigures.map((item, index) => (
                <div
                  key={item.label}
                  className={`grid grid-cols-[0.9fr_1.1fr] gap-4 px-5 py-4 ${
                    index !== keyFigures.length - 1
                      ? "border-b border-[#1b2422]/10"
                      : ""
                  }`}
                >
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[#1b2422]/45">
                    {item.label}
                  </div>
                  <div className="text-base font-medium tracking-[-0.03em] text-[#22302d]">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section id="mandat" className="border-b border-[#1b2422]/10">
        <div className="mx-auto grid max-w-[1180px] gap-8 px-5 py-10 md:px-8 md:grid-cols-[0.8fr_1.2fr] md:py-14">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#1b2422]/45">
              Mandat
            </div>
          </div>
          <div className="max-w-3xl">
            <p className="text-xl leading-9 tracking-[-0.03em] text-[#22302d] md:text-2xl">
              Instituttet arbeider kunnskapsbasert med å identifisere,
              kategorisere og ved behov moderere forventning i møte med politikk,
              tjenester, prosesser og utviklingsløp.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#1b2422]/68">
              Arbeidet skjer i samspill med offentlig sektor, relevante miljøer
              og andre som vurderes som tilstrekkelig berørte.
            </p>
          </div>
        </div>
      </section>

      <section id="publikasjoner" className="border-b border-[#1b2422]/10 bg-[#fbfaf7]">
        <div className="mx-auto max-w-[1180px] px-5 py-10 md:px-8 md:py-14">
          <div className="mb-8 grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#1b2422]/45">
              Publikasjoner
            </div>
            <div>
              <h2 className="text-3xl font-medium tracking-[-0.05em] text-[#22302d] md:text-4xl">
                Rapporter, veiledere og tematiske vurderinger
              </h2>
            </div>
          </div>

          <div className="border border-[#1b2422]/10 bg-white/55">
            {publications.map((item, index) => (
              <article
                key={item.title}
                className={`grid gap-5 px-5 py-6 md:grid-cols-[0.22fr_1fr_0.18fr] ${
                  index !== publications.length - 1
                    ? "border-b border-[#1b2422]/10"
                    : ""
                }`}
              >
                <div className="text-[11px] uppercase tracking-[0.18em] text-[#1b2422]/45">
                  {item.type}
                </div>

                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.04em] text-[#22302d]">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-[#1b2422]/68">
                    {item.text}
                  </p>
                </div>

                <div className="text-sm text-[#1b2422]/52">{item.status}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="fagomrader" className="border-b border-[#1b2422]/10">
        <div className="mx-auto max-w-[1180px] px-5 py-10 md:px-8 md:py-14">
          <div className="mb-8 grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#1b2422]/45">
              Fagområder
            </div>
            <div>
              <h2 className="text-3xl font-medium tracking-[-0.05em] text-[#22302d] md:text-4xl">
                Instituttets overordnede arbeidsområder
              </h2>
            </div>
          </div>

          <div className="grid gap-0 border border-[#1b2422]/10">
            {focusAreas.map((area, index) => (
              <article
                key={area.title}
                className={`grid gap-4 px-5 py-6 md:grid-cols-[0.7fr_1.3fr] ${
                  index !== focusAreas.length - 1
                    ? "border-b border-[#1b2422]/10"
                    : ""
                } ${index % 2 === 0 ? "bg-[#eef2ed]" : "bg-white/45"}`}
              >
                <h3 className="text-2xl font-medium tracking-[-0.04em] text-[#22302d]">
                  {area.title}
                </h3>
                <p className="max-w-2xl text-base leading-8 text-[#1b2422]/68">
                  {area.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="organisering" className="border-b border-[#1b2422]/10">
        <div className="mx-auto max-w-[1180px] px-5 py-10 md:px-8 md:py-14">
          <div className="mb-8 grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#1b2422]/45">
              Organisering
            </div>
            <div>
              <h2 className="text-3xl font-medium tracking-[-0.05em] text-[#22302d] md:text-4xl">
                Ledelse og faglig ansvar
              </h2>
            </div>
          </div>

          <div className="border border-[#1b2422]/10 bg-white/45">
            {board.map((person, index) => (
              <article
                key={person.name}
                className={`grid gap-4 px-5 py-6 md:grid-cols-[0.55fr_1.45fr] ${
                  index !== board.length - 1 ? "border-b border-[#1b2422]/10" : ""
                }`}
              >
                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.04em] text-[#22302d]">
                    {person.name}
                  </h3>
                  <div className="mt-2 text-sm uppercase tracking-[0.18em] text-[#1b2422]/45">
                    {person.role}
                  </div>
                </div>
                <p className="max-w-2xl text-base leading-8 text-[#1b2422]/68">
                  {person.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#1b2422]/10 bg-[#e7ece7]">
        <div className="mx-auto grid max-w-[1180px] gap-8 px-5 py-10 md:px-8 md:grid-cols-[0.8fr_1.2fr] md:py-14">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#1b2422]/45">
            Casegrunnlag
          </div>
          <div className="max-w-3xl">
            <p className="text-base leading-8 text-[#1b2422]/68">
              Norsk Forventningsinstitutt er utviklet av Primus-Gallopp som del
              av arbeid med navn, identitet, språklig rammeverk og digital
              tilstedeværelse.
            </p>
            <div className="mt-6 flex flex-wrap gap-5 text-sm text-[#1b2422]/68">
              <Link href="/caser" className="underline underline-offset-4">
                Tilbake til caser
              </Link>
              <Link href="/kontakt" className="underline underline-offset-4">
                Kontakt Primus-Gallopp
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#f6f4ee]">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-8 md:px-8">
          <div className="text-sm text-[#1b2422]/58">
            Norsk Forventningsinstitutt
          </div>
          <div className="text-sm text-[#1b2422]/42">
            Forventning / Fagområder / Publikasjoner
          </div>
        </div>
      </footer>
    </main>
  );
}