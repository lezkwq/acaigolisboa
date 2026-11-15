import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { Produtos } from "@/components/sections/Produtos";
import { Editorial } from "@/components/sections/Editorial";
import { Sobre } from "@/components/sections/Sobre";
import { Avaliacoes } from "@/components/sections/Avaliacoes";
import { Localizacao } from "@/components/sections/Localizacao";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsappFab } from "@/components/WhatsappFab";

const TITLE = "AçaíGo Lisboa | Açaí, sorvetes e crepes em São José";
const DESCRIPTION =
  "Açaí do teu jeito, buffet de sorvetes, milk shakes, crepes e barcas na Avenida Lisboa, em São José, SC.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: "/og-acaigo-lisboa.jpg" },
      { property: "og:image:alt", content: "Fachada da AçaíGo Lisboa em São José, Santa Catarina" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "IceCreamShop",
          name: "AçaíGo Lisboa",
          description: DESCRIPTION,
          telephone: "+5548991459574",
          priceRange: "R$ 20–40",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Avenida Lisboa, 446",
            addressLocality: "São José",
            addressRegion: "SC",
            postalCode: "88107-350",
            addressCountry: "BR",
          },
          sameAs: ["https://www.instagram.com/acaigolisboa/", "https://www.instagram.com/acaigooficial/"],
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.0", reviewCount: "312" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-creme">
      <SiteHeader />
      <main>
        <Hero />
        <Produtos />
        <Editorial />
        <Sobre />
        <Avaliacoes />
        <Localizacao />
        <CtaFinal />
      </main>
      <SiteFooter />
      <WhatsappFab />
    </div>
  );
}
