import { InstagramIcon, WhatsappIcon } from "@/components/icons";
import { ADDRESS, IFOOD_URL, INSTAGRAM_URL, NAV_ITEMS, WHATSAPP_URL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-cacau">
      <div className="mx-auto max-w-[1600px] px-5 py-14 md:px-10 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#inicio" className="inline-flex items-center gap-3 text-creme">
              <img src="/brand/acaigo-lisboa-logo.png" alt="" width={64} height={64} className="size-14 rounded-full" />
              <span className="font-display text-3xl uppercase">AçaíGo Lisboa</span>
            </a>
            <address className="mt-5 not-italic text-creme/65">
              <p>{ADDRESS.street}</p>
              <p>{ADDRESS.district}</p>
            </address>
            <div className="mt-6 flex items-center gap-2">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram da AçaíGo Lisboa" className="flex size-12 items-center justify-center border-2 border-creme/25 text-creme transition-colors hover:border-ciano hover:text-ciano">
                <InstagramIcon className="size-5" />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da AçaíGo Lisboa" className="flex size-12 items-center justify-center border-2 border-creme/25 text-creme transition-colors hover:border-ciano hover:text-ciano">
                <WhatsappIcon className="size-5" />
              </a>
            </div>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="eyebrow mb-5 text-creme/45">Navegue</p>
            <ul className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="eyebrow rule-link inline-block text-creme/75 transition-colors hover:text-creme">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow mb-5 text-creme/45">Faça seu pedido</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="eyebrow rule-link mb-4 inline-block text-creme/75 hover:text-creme">WhatsApp</a>
            <br />
            <a href={IFOOD_URL} target="_blank" rel="noopener noreferrer" className="eyebrow rule-link inline-block text-creme/75 hover:text-creme">iFood Lisboa</a>
          </div>
        </div>

        <p className="eyebrow mt-14 border-t border-creme/15 pt-6 text-creme/40">AçaíGo Lisboa · São José, SC</p>
      </div>
    </footer>
  );
}
