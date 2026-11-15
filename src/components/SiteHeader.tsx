import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { InstagramIcon, WhatsappIcon } from "@/components/icons";
import { INSTAGRAM_URL, NAV_ITEMS, WHATSAPP_URL } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between gap-4 px-5 md:h-24 md:px-10">
        <a href="#inicio" className="flex items-center gap-3 text-cacau lg:text-creme" aria-label="AçaíGo Lisboa — início">
          <img
            src="/brand/acaigo-lisboa-logo.png"
            alt=""
            width={58}
            height={58}
            className="size-12 rounded-full object-contain md:size-14"
          />
          <span className="font-display text-xl leading-none tracking-tight uppercase md:text-2xl">
            AçaíGo <span className="text-rosa lg:text-ciano">Lisboa</span>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="eyebrow rule-link inline-block text-cacau lg:text-creme">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da AçaíGo Lisboa"
            className="flex size-11 items-center justify-center text-cacau transition-colors hover:text-rosa lg:text-creme lg:hover:text-ciano"
          >
            <InstagramIcon className="size-5" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pedir pelo WhatsApp"
            className="hidden h-11 items-center justify-center bg-acai px-5 text-creme transition-colors hover:bg-ameixa sm:inline-flex"
          >
            <WhatsappIcon className="mr-2 size-4" />
            <span className="eyebrow">Pedir agora</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="ml-1 flex size-11 flex-col items-center justify-center gap-[5px] border-2 border-cacau text-cacau lg:hidden"
          >
            <span className={cn("block h-[2px] w-5 bg-current transition-transform duration-300", open && "translate-y-[7px] rotate-45")} />
            <span className={cn("block h-[2px] w-5 bg-current transition-opacity duration-200", open && "opacity-0")} />
            <span className={cn("block h-[2px] w-5 bg-current transition-transform duration-300", open && "-translate-y-[7px] -rotate-45")} />
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className="fixed inset-x-0 top-20 bottom-0 z-40 flex flex-col justify-between bg-ameixa px-6 pt-8 pb-8 lg:hidden"
      >
        <nav aria-label="Navegação do celular">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.href} className="border-b border-creme/20">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display flex items-baseline gap-4 py-4 text-[2rem] leading-none text-creme uppercase"
                >
                  <span className="font-sans text-[0.65rem] tracking-[0.2em] text-creme/50">0{index + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="eyebrow flex h-14 items-center justify-center bg-ciano text-cacau">
          <WhatsappIcon className="mr-2 size-5" /> Fazer pedido
        </a>
      </div>
    </header>
  );
}
