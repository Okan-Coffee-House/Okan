import type { ReactNode } from "react";

export type TLocale = "en" | "ar";
export type TDirection = "ltr" | "rtl";
export type TPhotoFallback =
  | "morning"
  | "wood"
  | "stone"
  | "coffee"
  | "earth"
  | "sunflower";

export interface IPhotoAsset {
  src: string;
  alt: string;
  caption?: string;
  fallback: TPhotoFallback;
}

export type TMenuCategoryId = "espresso" | "filter" | "milk" | "tea";

export interface IMenuItem {
  name: string;
  note?: string;
}

export interface IMenuCategory {
  id: TMenuCategoryId;
  name: string;
  items: IMenuItem[];
}

export interface IMenuData {
  categories: IMenuCategory[];
}

export interface IHoursRow {
  days: string;
  time: string;
}

export interface INavItem {
  href: string;
  label: string;
}

export interface IDictionary {
  seo: {
    title: string;
    description: string;
    menuTitle: string;
    menuDescription: string;
    notFoundTitle: string;
  };
  nav: {
    story: string;
    coffee: string;
    space: string;
    visit: string;
  };
  cta: {
    order: string;
    discover: string;
    visit: string;
    menu: string;
    directions: string;
    instagram: string;
    tiktok: string;
    call: string;
    whatsapp: string;
    email: string;
    journal: string;
    home: string;
  };
  hero: {
    headline: string;
    body: string;
  };
  statement: {
    lead: string;
    body: string;
  };
  story: {
    number: string;
    label: string;
    headline: string;
    body: string;
  };
  space: {
    number: string;
    label: string;
    headline: string;
    body: string;
  };
  materials: {
    number: string;
    label: string;
    headline: string;
    items: {
      marble: string;
      wood: string;
      tile: string;
      earth: string;
    };
  };
  coffee: {
    number: string;
    label: string;
    headline: string;
    stages: {
      beans: { number: string; title: string; body: string };
      extraction: { number: string; title: string; body: string };
      serving: { number: string; title: string; body: string };
      experience: { number: string; title: string; body: string };
    };
  };
  menu: {
    number: string;
    label: string;
    headline: string;
    body: string;
    categories: {
      espresso: string;
      filter: string;
      milk: string;
      tea: string;
    };
  };
  gallery: {
    number: string;
    label: string;
    headline: string;
  };
  sunflower: {
    kicker: string;
    headline: string;
    body: string;
  };
  visit: {
    number: string;
    label: string;
    headline: string;
    body: string;
    placeLabel: string;
    hoursLabel: string;
    locationLabel: string;
    placeName: string;
    locality: string;
    address: string;
    scan: string;
    hours: IHoursRow[];
  };
  footer: {
    line: string;
  };
  captions: {
    hero: string;
    story: string;
    spaceWide: string;
    spaceDetail: string;
  };
  a11y: {
    home: string;
    skip: string;
    openMenu: string;
    closeMenu: string;
    primaryNav: string;
    mobileNav: string;
    footerNav: string;
    orderSoon: string;
    map: string;
    instagramQr: string;
  };
  notFound: {
    headline: string;
    body: string;
  };
  language: {
    en: string;
    ar: string;
  };
}

export interface ILocaleContextValue {
  locale: TLocale;
  dictionary: IDictionary;
}

export interface ILocaleProviderProps {
  locale: TLocale;
  dictionary: IDictionary;
  children: ReactNode;
}

export type TLogoVariant = "color" | "reverse";

export interface ILogoProps {
  className?: string;
  markClassName?: string;
  variant?: TLogoVariant;
}

export interface IOrderLinkProps {
  href: string | null;
  className?: string;
  children: ReactNode;
}

export interface IPhotoProps {
  photo: IPhotoAsset;
  className?: string;
  imageClassName?: string;
  sizes: string;
  priority?: boolean;
  quality?: number;
}

export interface IParallaxImageProps {
  photo: IPhotoAsset;
  className?: string;
  imageClassName?: string;
  sizes: string;
  priority?: boolean;
}

export interface ISectionMetaProps {
  number: string;
  label: string;
  className?: string;
  light?: boolean;
}

export interface ISunflowerMarkProps {
  className?: string;
  accent?: boolean;
}

export interface IMobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export interface IMenuPreviewProps {
  menu: IMenuData;
}

export interface IRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export interface IStaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
}

export interface IStaggerItemProps {
  children: ReactNode;
  className?: string;
}

export interface ILanguageSwitchProps {
  className?: string;
}

export interface IJsonLdProps {
  dictionary: IDictionary;
}

export interface ICafeJsonLd {
  "@context": string;
  "@type": "CafeOrCoffeeShop";
  name: string;
  alternateName: string;
  description: string;
  url: string;
  image: string;
  logo: string;
  servesCuisine: string;
  currenciesAccepted: string;
  hasMap: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  geo: {
    "@type": "GeoCoordinates";
    latitude: number;
    longitude: number;
  };
  openingHoursSpecification: Array<{
    "@type": "OpeningHoursSpecification";
    dayOfWeek: string;
    opens: string;
    closes: string;
  }>;
  telephone?: string;
  email?: string;
  sameAs?: string[];
}
