import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om oss | Primus-Gallopp",
  description:
    "Historien om Primus-Gallopp. Da struktur møtte kaos, og ingen av dem hadde noe særlig valg.",
};

export default function OmOssPage() {
  return (
    <main className="min-h-screen bg-[#f3efe7] text-[#111111]">
      <SiteHeader current="om-oss" />

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 lg:py-24">
          <div className="text-[11px] uppercase tracking-[0.26em] text-black/40">
            Om oss
          </div>
          <h1 className="display-font mt-4 max-w-5xl text-[clamp(3rem,6vw,5.5rem)] leading-[0.92] tracking-[-0.06em]">
            Da struktur møtte kaos, og ingen av dem hadde noe særlig valg.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/68">
            Primus-Gallopp ble formelt etablert i 2021, men historien begynner
            tidligere. Byrået er resultatet av en sammenslåing mellom to miljøer
            som hver for seg var fullt funksjonelle på papiret, men vanskeligere
            i praksis.
          </p>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto grid max-w-[1440px] gap-5 px-6 py-14 md:px-10 lg:grid-cols-2 lg:py-20">
          <article className="rounded-[30px] border border-black/10 bg-white/40 p-8 md:p-10">
            <div className="text-[11px] uppercase tracking-[0.24em] text-black/38">
              1947–2021 / Primus Strategi &amp; Rapportering
            </div>
            <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.05em]">
              Rykkin-formasjonen
            </h2>
            <p className="mt-5 text-base leading-8 text-black/68">
              Grunnlagt i 1947 av Altor Primus. Miljøet var preget av tunge
              dokumenter, metodisk alvor og en vedvarende tro på at enhver
              beslutning kunne forbedres gjennom flere runder med vurdering.
            </p>
            <p className="mt-5 text-base leading-8 text-black/68">
              Deres spesialitet var å gjøre små visuelle spørsmål store nok til å
              fortjene kvartalsvis behandling. Resultatet var høy analytisk
              tyngde, lav framdrift og et betydelig volum språk som sjelden lot
              seg motsi.
            </p>
          </article>

          <article className="rounded-[30px] border border-black/10 bg-[#e8e1d5] p-8 md:p-10">
            <div className="text-[11px] uppercase tracking-[0.24em] text-black/38">
              Før 2021 / Studio Gallopp
            </div>
            <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.05em]">
              Sareptaveien-miljøet
            </h2>
            <p className="mt-5 text-base leading-8 text-black/68">
              Studio Gallopp oppsto i Bergen som et lite, visuelt selvsikkert
              designmiljø med sterk gjennomføringsevne og begrenset interesse for
              struktur. De leverte ofte sent, men med så høy formmessig
              overbevisning at innvendinger mistet tempo underveis.
            </p>
            <p className="mt-5 text-base leading-8 text-black/68">
              Der Primus produserte innsikt, produserte Gallopp stemning. Det var
              ikke alltid klart hva som var besluttet, men det så ferdig ut.
            </p>
          </article>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#111111] text-[#f3efe7]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-14 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
          <div>
            <div className="text-[11px] uppercase tracking-[0.26em] text-white/40">
              Fusjonen
            </div>
            <h2 className="mt-4 max-w-xl text-3xl font-medium leading-tight tracking-[-0.055em] md:text-4xl">
              En samlet kraft, hovedsakelig fordi alternativene ble vurdert som
              svakere.
            </h2>
          </div>

          <div className="max-w-2xl text-base leading-8 text-white/72">
            I 2021 ble de to miljøene samlet etter en lengre intern prosess som
            ifølge arkivmaterialet startet med en nattlig forhandling på en
            veikro utenfor Minnesund. Primus brakte språk, tyngde og
            dokumentasjonsvilje. Gallopp brakte tempo, overflate og evnen til å
            få ting til å se dyrere ut enn de var. Sammen etablerte de et byrå
            bedre rustet til å møte samtidens krav til retning, form og
            etterrasjonalisering.
          </div>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-10 lg:py-20">
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-[30px] border border-black/10 bg-white/40 p-8 md:p-10">
              <div className="text-[11px] uppercase tracking-[0.24em] text-black/38">
                Navnet
              </div>
              <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.05em]">
                Hvorfor Primus-Gallopp.
              </h2>
              <p className="mt-5 text-base leading-8 text-black/68">
                Navnet ble vedtatt etter en intern prosess som strakte seg over
                14 måneder. Ingen av partene aksepterte den andres forslag fullt
                ut. Bindestreken ble stående som det første og lenge eneste
                dokumenterte kompromisset.
              </p>
              <p className="mt-5 text-base leading-8 text-black/68">
                Den symboliserer i dag den kritiske avstanden mellom en god idé
                og en faktisk gjennomføring.
              </p>
            </article>

            <article className="rounded-[30px] border border-black/10 bg-[#dcd4c7] p-8 md:p-10">
              <div className="text-[11px] uppercase tracking-[0.24em] text-black/38">
                Arkivutdrag
              </div>
              <p className="mt-5 text-xl leading-9 tracking-[-0.03em] text-black/80">
                “Det ble tidlig klart at Primus bidro med tåke, mens Gallopp
                bidro med fart. Samlet ga dette markedet en løsning det var
                vanskelig å gripe inn i.”
              </p>
              <div className="mt-6 text-sm text-black/50">
                Udatert utdrag fra fusjonsmateriale, kildegrunnlag ufullstendig.
              </div>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-10 lg:py-20">
          <div className="mb-8 text-[11px] uppercase tracking-[0.26em] text-black/40">
            Arv
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-[30px] border border-black/10 bg-white/40 p-8">
              <h3 className="text-2xl font-medium tracking-[-0.04em]">
                Arven fra Primus
              </h3>
              <p className="mt-4 text-base leading-8 text-black/68">
                1400 uavsluttede kvartalsrapporter, høy toleranse for metodisk
                språk og en dyp tillit til seriffer i alvorlige sammenhenger.
              </p>
            </article>

            <article className="rounded-[30px] border border-black/10 bg-white/40 p-8">
              <h3 className="text-2xl font-medium tracking-[-0.04em]">
                Arven fra Gallopp
              </h3>
              <p className="mt-4 text-base leading-8 text-black/68">
                Utestående forpliktelser, betydelig konseptuell selvtillit og en
                vedvarende evne til å gjøre visuell overbevisning til et
                fullverdig argument.
              </p>
            </article>
          </div>
        </div>
      </section>
<section className="border-t border-black/10">
  <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-10 lg:py-20">
    <div className="mb-8 text-[11px] uppercase tracking-[0.26em] text-black/40">
      Ledelse og styre
    </div>

    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      <article className="rounded-[30px] border border-black/10 bg-white/40 p-8">
        <h3 className="text-2xl font-medium tracking-[-0.04em]">
          Altor Primus
        </h3>
        <div className="mt-2 text-sm uppercase tracking-[0.18em] text-black/40">
          Grunnlegger, faglig opphav
        </div>
        <p className="mt-5 text-base leading-8 text-black/68">
          Etablerte Primus Strategi & Rapportering i 1947. Etterlot seg et
          betydelig arkiv, flere uavsluttede modeller og en vedvarende tro på
          at alvor kan standardiseres.
        </p>
      </article>

      <article className="rounded-[30px] border border-black/10 bg-[#e8e1d5] p-8">
        <h3 className="text-2xl font-medium tracking-[-0.04em]">
          Sigrid Gallopp
        </h3>
        <div className="mt-2 text-sm uppercase tracking-[0.18em] text-black/40">
          Kreativ leder, visuell uro
        </div>
        <p className="mt-5 text-base leading-8 text-black/68">
          Forvalter den formmessige arven fra Sareptaveien. Kjent for å godkjenne
          retninger før de er forklart, og forklare dem bedre i etterkant.
        </p>
      </article>

<article className="rounded-[30px] border border-black/10 bg-[#111111] p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
  <h3 className="text-2xl font-medium tracking-[-0.04em] text-white">
    Eivind T. Ramm
  </h3>

  <div className="mt-2 text-sm uppercase tracking-[0.18em] text-white/45">
    Daglig leder
  </div>

  <p className="mt-5 text-base leading-8 text-white/78">
    Ansvarlig for drift, prioritering og formuleringer som holder prosesser i
    bevegelse uten å lukke dem unødvendig.
  </p>
</article>

      <article className="rounded-[30px] border border-black/10 bg-white/40 p-8">
        <h3 className="text-2xl font-medium tracking-[-0.04em]">
          Lillian Mørk
        </h3>
        <div className="mt-2 text-sm uppercase tracking-[0.18em] text-black/40">
          Styreleder
        </div>
        <p className="mt-5 text-base leading-8 text-black/68">
          Kom inn for å rydde opp, men valgte etter hvert å systematisere
          uklarheten i stedet. Har siden vært en samlende kraft i spørsmål som
          ikke lar seg avklare direkte.
        </p>
      </article>

      <article className="rounded-[30px] border border-black/10 bg-white/40 p-8">
        <h3 className="text-2xl font-medium tracking-[-0.04em]">
          Midlertidig observatør
        </h3>
        <div className="mt-2 text-sm uppercase tracking-[0.18em] text-black/40">
          Uavhengig representant
        </div>
        <p className="mt-5 text-base leading-8 text-black/68">
          Deltar i styrearbeid ved behov. Mandatets varighet og opprinnelse
          vurderes fortløpende.
        </p>
      </article>
    </div>
  </div>
</section>

<section className="border-t border-black/10 bg-[#e8e1d5]">
  <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-10 lg:py-20">
    <div className="mb-8 text-[11px] uppercase tracking-[0.26em] text-black/40">
      Rådgivende utvalg og tilsynsorganer
    </div>

    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      <article className="rounded-[30px] border border-black/10 bg-white/40 p-8">
        <h3 className="text-2xl font-medium tracking-[-0.04em]">
          Strategisk råd
        </h3>
        <p className="mt-5 text-base leading-8 text-black/68">
          Et internt organ etablert for å sikre at alle strategiske retninger
          fremstår som gjennomtenkte. Rådet møtes ved behov og konkluderer som
          regel med at arbeidet bør videreføres.
        </p>
      </article>

      <article className="rounded-[30px] border border-black/10 bg-white/40 p-8">
        <h3 className="text-2xl font-medium tracking-[-0.04em]">
          Faglig utvalg
        </h3>
        <p className="mt-5 text-base leading-8 text-black/68">
          Vurderer metodikk, begrepsbruk og nivå av presisjon i leveranser.
          Utvalget har ingen formell beslutningsmyndighet, men høy påvirkning
          på hvordan arbeidet formuleres.
        </p>
      </article>

     <article className="rounded-[30px] border border-black/10 bg-[#111111] p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
  <h3 className="text-2xl font-medium tracking-[-0.04em] text-white">
    Intern revisjon
  </h3>

  <p className="mt-5 text-base leading-8 text-white/78">
    Gjennomfører løpende vurderinger av interne prosesser. Rapportene er
    tilgjengelige, men sjelden etterspurt.
  </p>
</article>

      <article className="rounded-[30px] border border-black/10 bg-white/40 p-8">
        <h3 className="text-2xl font-medium tracking-[-0.04em]">
          Uavhengig kontrollinstans
        </h3>
        <p className="mt-5 text-base leading-8 text-black/68">
          Opprettet for å sikre nødvendig avstand til egne beslutninger.
          Instansen arbeider uavhengig, men ofte med samme grunnlag.
        </p>
      </article>

      <article className="rounded-[30px] border border-black/10 bg-white/40 p-8">
        <h3 className="text-2xl font-medium tracking-[-0.04em]">
          Midlertidig arbeidsgruppe
        </h3>
        <p className="mt-5 text-base leading-8 text-black/68">
          Etableres ved behov for å håndtere spesifikke problemstillinger.
          Gruppen oppløses når situasjonen fremstår som tilstrekkelig avklart.
        </p>
      </article>

      <article className="rounded-[30px] border border-black/10 bg-white/40 p-8">
        <h3 className="text-2xl font-medium tracking-[-0.04em]">
          Ekstern observatør
        </h3>
        <p className="mt-5 text-base leading-8 text-black/68">
          Deltar sporadisk i vurderinger og gir innspill der det anses som
          hensiktsmessig. Rolle og mandat vurderes fortløpende.
        </p>
      </article>
    </div>
  </div>
</section>
<p className="mt-10 text-xs text-black/40">
  Enkelte utvalg kan overlappe i mandat og funksjon.
</p>
      <SiteFooter />
    </main>
  );
}