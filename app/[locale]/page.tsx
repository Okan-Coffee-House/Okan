import { BrandStatement } from "@/components/BrandStatement";
import { CoffeeJourney } from "@/components/CoffeeJourney";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Materials } from "@/components/Materials";
import { MenuPreview } from "@/components/MenuPreview";
import { Space } from "@/components/Space";
import { Story } from "@/components/Story";
import { SunflowerMoment } from "@/components/SunflowerMoment";
import { Visit } from "@/components/Visit";
import { getMenu } from "@/lib/foodics";
import { getDictionary, getLocale } from "@/lib/locale";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = getLocale((await params).locale);
  const dictionary = getDictionary(locale);
  const menu = await getMenu(locale);

  return (
    <main id="content">
      <JsonLd dictionary={dictionary} />
      <Hero />
      <BrandStatement />
      <Story />
      <Space />
      <Materials />
      <CoffeeJourney />
      <MenuPreview menu={menu} />
      <Gallery />
      <SunflowerMoment />
      <Visit />
    </main>
  );
}
