import { BrewMethods } from "@/components/BrewMethods";
import { CoffeeProgram } from "@/components/CoffeeProgram";
import { CurrentCoffees } from "@/components/CurrentCoffees";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { MenuSection } from "@/components/MenuSection";
import { Space } from "@/components/Space";
import { SunflowerMoment } from "@/components/SunflowerMoment";
import { Visit } from "@/components/Visit";
import { getDictionary, getLocale } from "@/lib/locale";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = getLocale((await params).locale);
  const dictionary = getDictionary(locale);

  return (
    <main id="content">
      <JsonLd dictionary={dictionary} />
      <Hero />
      <CoffeeProgram />
      <CurrentCoffees />
      <BrewMethods />
      <MenuSection />
      <Space />
      <SunflowerMoment />
      <Gallery />
      <Visit />
    </main>
  );
}
