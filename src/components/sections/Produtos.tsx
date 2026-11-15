import { Reveal } from "@/components/Reveal";
import { CATEGORIES } from "@/lib/site";

export function Produtos() {
  return (
    <section id="cardapio" className="border-b-2 border-cacau bg-creme">
      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-5 text-acai">Pra matar a vontade</p>
            <h2 className="display-lg max-w-[13ch] text-cacau">Escolhe o teu favorito.</h2>
          </div>
          <p className="font-editorial max-w-[30ch] text-xl text-cacau/75 md:pb-2 md:text-2xl">
            Do açaí montado do teu jeito à barca pra dividir.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5">
          {CATEGORIES.map((category, index) => (
            <Reveal key={category.id} delay={index * 70} className="group bg-white">
              <div className="overflow-hidden bg-amarelo">
                <img
                  src={category.image}
                  alt={category.alt}
                  width={900}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                />
              </div>
              <div className="border-x-2 border-b-2 border-cacau px-5 py-5 md:px-6 md:py-6">
                <span className="eyebrow text-rosa">0{index + 1}</span>
                <h3 className="font-display mt-3 text-2xl leading-none text-cacau uppercase md:text-3xl">
                  {category.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cacau/70">{category.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="eyebrow mt-8 text-cacau/55">
          Disponibilidade e valores podem variar. Consulte o cardápio atualizado ao fazer seu pedido.
        </p>
      </div>
    </section>
  );
}
