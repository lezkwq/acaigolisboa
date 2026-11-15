import { Reveal } from "@/components/Reveal";
import { GOOGLE_REVIEWS_URL, RATING, REVIEWS } from "@/lib/site";

export function Avaliacoes() {
  const review = REVIEWS[0];

  return (
    <section id="avaliacoes" className="border-b-2 border-cacau bg-creme">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow mb-6 text-rosa">Quem já provou</p>
          <div className="flex items-end gap-5">
            <span className="font-display text-[clamp(5rem,16vw,11rem)] leading-[0.78] text-acai">{RATING.score}</span>
            <div className="pb-2">
              <div className="text-2xl tracking-[0.18em] text-rosa" aria-label="4 de 5 estrelas">★★★★☆</div>
              <p className="eyebrow mt-2 max-w-[18ch] text-cacau/65">{RATING.count}</p>
            </div>
          </div>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow rule-link mt-8 inline-block text-cacau"
          >
            Ver avaliações no Google
          </a>
        </Reveal>

        {review && (
          <Reveal delay={100} className="border-t-2 border-cacau pt-8 md:pt-10 lg:col-span-7 lg:border-t-0 lg:border-l-2 lg:pt-0 lg:pl-12">
            <span className="font-editorial text-6xl leading-none text-rosa" aria-hidden="true">“</span>
            <blockquote className="font-display mt-3 max-w-[25ch] text-[clamp(1.75rem,4vw,3.25rem)] leading-[1.02] text-cacau uppercase">
              {review.quote}
            </blockquote>
            <p className="eyebrow mt-7 text-cacau/55">{review.author}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
