import { HERO } from "@/app/lib/content";

export default function Hero() {
  return (
    <section className="py-24 border-b border-black/10">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          {HERO.title}
        </h1>

        <p className="text-xl text-black/70 mb-4">{HERO.subtitle}</p>

        <p className="text-base text-black/60 max-w-xl">
          {HERO.description}
        </p>
      </div>
    </section>
  );
}