import { WhatsappIcon } from "@/components/icons";
import { IFOOD_URL, WHATSAPP_URL } from "@/lib/site";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-[100svh] overflow-hidden bg-cacau">
      <picture className="absolute inset-0 -z-10 block h-full w-full">
        <source media="(max-width: 767px)" srcSet="/images/hero-lisboa-9x16.webp" />
        <img
          src="/images/hero-lisboa-16x9.webp"
          alt="Fachada da AçaíGo Lisboa, com a placa verde e magenta sobre a entrada da loja"
          width={2160}
          height={1216}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 size-full object-cover object-[50%_42%]"
        />
      </picture>

      <div className="mx-auto flex min-h-[100svh] max-w-[1600px] items-end px-5 pt-28 pb-10 md:px-10 md:pb-14 lg:justify-end lg:pb-[9vh]">
        <div className="max-w-[41rem] text-creme lg:mr-[4vw]">
          <p className="eyebrow mb-4 text-ciano md:mb-6">
            Açaí, sorvetes &amp; bons momentos · São José, SC
          </p>
          <h1 className="display-xl text-creme">
            Açaí
            <br />
            do teu <span className="text-ciano">jeito.</span>
          </h1>
          <p className="mt-5 max-w-[34ch] text-lg leading-relaxed text-creme md:mt-7 md:text-xl">
            Escolhe tua combinação favorita e aproveita. A AçaíGo Lisboa tem açaí, buffet de sorvetes,
            milk shakes, crepes e barcas.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-9">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow inline-flex h-14 items-center justify-center gap-2 bg-ciano px-7 text-cacau transition-colors hover:bg-creme"
            >
              <WhatsappIcon className="size-5" /> Pedir pelo WhatsApp
            </a>
            <a
              href={IFOOD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow inline-flex h-14 items-center justify-center border-2 border-creme px-7 text-creme transition-colors hover:bg-creme hover:text-cacau"
            >
              Pedir pelo iFood
            </a>
          </div>
        </div>
      </div>
      <div className="absolute right-5 bottom-5 hidden items-center gap-3 text-creme/85 lg:flex">
        <span className="h-px w-12 bg-ciano" />
        <span className="eyebrow">Av. Lisboa, 446 · São José</span>
      </div>
    </section>
  );
}
