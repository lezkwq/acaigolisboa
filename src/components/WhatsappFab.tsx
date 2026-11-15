import { WhatsappIcon } from "@/components/icons";
import { WHATSAPP_URL } from "@/lib/site";

/** Atalho fixo de pedido pelo WhatsApp no celular. */
export function WhatsappFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir pelo WhatsApp da AçaíGo Lisboa"
      className="fixed right-4 bottom-4 z-40 flex size-13 items-center justify-center rounded-full border-2 border-creme bg-ciano text-cacau shadow-lg transition-transform hover:scale-105 lg:hidden"
    >
      <WhatsappIcon className="size-6" />
    </a>
  );
}
