import { Reveal } from "@/components/Reveal";
import { IFOOD_URL, WHATSAPP_URL } from "@/lib/site";

export function CtaFinal() {
  return (
    <section className="border-b-2 border-cacau bg-acai">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-10 px-5 py-20 md:px-10 md:py-28 lg:flex-row lg:items-end lg:justify-between">
        <Reveal>
          <p className="eyebrow mb-6 text-ciano">AçaíGo Lisboa · São José, SC</p>
          <h2 className="display-xl text-creme">
            Deu vontade?
            <br />
            <span className="text-ciano">Pede aqui.</span>
          </h2>
        </Reveal>

        <Reveal delay={100} className="lg:pb-4">
          <p className="font-editorial max-w-[25ch] text-2xl leading-snug text-creme md:text-3xl">
            A gente prepara por aqui. Você escolhe como receber.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="eyebrow inline-flex h-14 items-center justify-center bg-ciano px-9 text-cacau transition-colors hover:bg-creme">
              Pedir pelo WhatsApp
            </a>
            <a href={IFOOD_URL} target="_blank" rel="noopener noreferrer" className="eyebrow inline-flex h-14 items-center justify-center border-2 border-creme px-9 text-creme transition-colors hover:bg-creme hover:text-acai">
              Pedir pelo iFood
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
