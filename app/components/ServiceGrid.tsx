import { SERVICES } from "@/app/lib/content";

export default function ServiceGrid() {
  return (
    <section className="py-20 border-b border-black/10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-10">Tjenester</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((s, i) => (
            <div key={i} className="space-y-2">
              <div className="font-medium">{s.title}</div>
              <p className="text-sm text-black/60">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}