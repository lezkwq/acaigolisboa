import { Reveal } from "@/components/Reveal";
import { ADDRESS, MAPS_URL } from "@/lib/site";

export function Sobre() {
  return (
    <section id="sobre" className="border-b-2 border-cacau bg-ciano">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-12">
        <div className="flex flex-col justify-center gap-8 px-5 py-16 md:px-10 md:py-24 lg:col-span-5 lg:px-14">
          <Reveal>
            <p className="eyebrow mb-6 text-acai">A loja</p>
            <h2 className="display-lg text-cacau">
              Vem pra
              <br />
              AçaíGo Lisboa.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="max-w-[38ch] text-lg leading-relaxed text-cacau/80 md:text-xl">
              A loja tem espaço para aproveitar no local, pedir para viagem ou receber em casa. Fica
              na Avenida Lisboa, em São José.
            </p>
            <address className="mt-7 not-italic">
              <p className="font-display text-2xl leading-tight text-cacau uppercase md:text-3xl">
                {ADDRESS.street}
              </p>
              <p className="mt-2 text-cacau/70">{ADDRESS.district}</p>
            </address>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="eyebrow mt-7 inline-flex h-14 items-center justify-center bg-acai px-8 text-creme transition-colors hover:bg-ameixa">
              Como chegar
            </a>
          </Reveal>
        </div>

        <Reveal className="border-t-2 border-cacau lg:col-span-7 lg:border-t-0 lg:border-l-2">
          <img
            src="/images/interior-lisboa.webp"
            alt="Interior da AçaíGo Lisboa, com balcão, mesas e o logo na parede verde"
            width={1547}
            height={1017}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover object-center sm:aspect-[16/10] lg:aspect-auto lg:h-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
