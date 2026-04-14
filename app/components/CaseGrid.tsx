import { CASES } from "@/app/lib/content";

export default function CaseGrid() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-10">Utvalgte caser</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {CASES.map((c, i) => (
            <div
              key={i}
              className="border border-black/10 p-6 rounded-lg space-y-3"
            >
              <div className="text-sm text-black/50">{c.client}</div>

              <div className="text-sm">
                <span className="font-medium">Mål:</span> {c.goal}
              </div>

              <div className="text-sm">
                <span className="font-medium">Tiltak:</span> {c.action}
              </div>

              <div className="text-sm">
                <span className="font-medium">Resultat:</span> {c.result}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}