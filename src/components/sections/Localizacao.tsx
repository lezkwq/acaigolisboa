import { Accessibility, Clock3, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ADDRESS, MAPS_URL, WHATSAPP_NUMBER } from "@/lib/site";

export function Localizacao() {
  return (
    <section id="onde-estamos" className="border-b-2 border-cacau bg-creme">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-12">
        <div className="flex flex-col justify-center px-5 py-16 md:px-10 md:py-24 lg:col-span-5 lg:px-14">
          <Reveal>
            <p className="eyebrow mb-6 text-rosa">A gente te espera</p>
            <h2 className="display-lg text-cacau">Vem pra Lisboa.</h2>
          </Reveal>

          <Reveal delay={80} className="mt-9 space-y-5">
            <div className="flex gap-4">
              <MapPin className="mt-1 size-5 shrink-0 text-acai" aria-hidden="true" />
              <address className="not-italic">
                <p className="font-display text-2xl leading-tight text-cacau uppercase md:text-3xl">{ADDRESS.street}</p>
                <p className="mt-2 text-cacau/70">{ADDRESS.district}</p>
              </address>
            </div>
            <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-4 text-cacau transition-colors hover:text-acai">
              <Phone className="size-5 text-acai" aria-hidden="true" />
              <span>(48) 99145-9574</span>
            </a>
            <div className="flex items-center gap-4 text-cacau/75">
              <Clock3 className="size-5 text-acai" aria-hidden="true" />
              <span>Abre às 12h · confira o horário atualizado no Maps</span>
            </div>
            <div className="flex items-center gap-4 text-cacau/75">
              <Accessibility className="size-5 text-acai" aria-hidden="true" />
              <span>Entrada e estacionamento acessíveis</span>
            </div>
            <p className="eyebrow pt-2 text-cacau/55">Faixa de preço informada: R$ 20–40 por pessoa</p>

            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="eyebrow mt-4 inline-flex h-14 items-center justify-center bg-acai px-8 text-creme transition-colors hover:bg-ameixa">
              Abrir rota no Google Maps
            </a>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-7">
          <img
            src="/images/milkshake-balcao.webp"
            alt="Milk shake preparado na loja com o logo da AçaíGo ao fundo"
            width={942}
            height={1670}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover object-center sm:aspect-[16/10] lg:aspect-auto lg:h-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
