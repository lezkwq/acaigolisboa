import { Reveal } from "@/components/Reveal";
import { IFOOD_URL, WHATSAPP_URL } from "@/lib/site";

export function Editorial() {
  return (
    <section className="border-b-2 border-cacau bg-ameixa">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <img
            src="/images/acai-montado.webp"
            alt="Açaí com morangos e creme servido pela AçaíGo"
            width={935}
            height={1683}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full object-cover object-center sm:aspect-[16/10] lg:aspect-auto lg:h-full"
          />
        </Reveal>

        <div className="flex flex-col justify-center gap-8 px-5 py-14 md:px-10 md:py-20 lg:col-span-6 lg:px-14">
          <Reveal>
            <p className="eyebrow mb-5 text-ciano">O verdadeiro sabor do açaí, do seu jeito</p>
            <h2 className="display-lg text-creme">
              Monta a tua
              <br />
              combinação.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <span className="mb-6 block h-[2px] w-16 bg-ciano" />
            <p className="max-w-[37ch] text-lg leading-relaxed text-creme/85 md:text-xl">
              Escolhe a base, combina com teus acompanhamentos favoritos e pede do jeito que você
              gosta. A gente prepara por aqui e também entrega.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="eyebrow inline-flex h-14 items-center justify-center bg-ciano px-7 text-cacau transition-colors hover:bg-creme">
                Pedir pelo WhatsApp
              </a>
              <a href={IFOOD_URL} target="_blank" rel="noopener noreferrer" className="eyebrow inline-flex h-14 items-center justify-center border-2 border-creme px-7 text-creme transition-colors hover:bg-creme hover:text-ameixa">
                Pedir pelo iFood
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
