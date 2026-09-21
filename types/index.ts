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
  width: number;
  height: number;
}

export type TCoffeeMethod = "v60" | "espresso" | "filter" | "milk";
export type TCoffeeFactKey =
  | "country"
  | "region"
  | "process"
  | "roast"
  | "bestFor"
  | "altitude";

export interface ICoffeeSelection {
  id: string;
  name: string;
  method: TCoffeeMethod;
  country?: string;
  region?: string;
  producer?: string;
  variety?: string;
  process?: string;
  altitude?: string;
  tastingNotes?: string[];
  roast?: string;
  bestFor?: string;
  description?: string;
  image?: string;
  sourceUrl: string;
  sourceDate?: string;
  verified: boolean;
}

export type TBrewMethodKey = "v60" | "espresso" | "milk";
export type TMenuCategory =
  | "filter"
  | "espresso"
  | "milk"
  | "tea"
  | "dessert"
  | "seasonal";
export type TSpacePhotoKey = "wide" | "nook" | "outside" | "bar";
export type TGalleryCaptionKey =
  | "morning"
  | "close"
  | "toGo"
  | "street"
  | "details"
  | "outsideOkan";
export type TGalleryArea =
  | "terrace"
  | "window"
  | "takeaway"
  | "street"
  | "door"
  | "planter";

export interface IMenuItem {
  id: string;
  category: TMenuCategory;
  nameEn: string;
  nameAr?: string;
  descriptionEn?: string;
  descriptionAr?: string;
  price?: number;
  currency?: "KWD";
  availableHot?: boolean;
  availableIced?: boolean;
  featured?: boolean;
  seasonal?: boolean;
  sourceUrl?: string;
  verified: boolean;
}

export interface IHoursRow {
  days: string;
  time: string;
}

export interface INavItem {
  href: string;
  label: string;
}

export type TBrewFactKey = "bestFor" | "style" | "servedAs";

export interface IBrewMethodCopy {
  title: string;
  descriptor: string;
  body: string;
  bestFor: string;
  style: string;
  servedAs: string;
}

export interface IDictionary {
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    menuTitle: string;
    menuDescription: string;
    notFoundTitle: string;
  };
  nav: {
    coffee: string;
    menu: string;
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
  };
  hero: {
    kicker: string;
    headline: string;
    body: string;
  };
  coffee: {
    number: string;
    label: string;
    headline: string;
    body: string;
    secondary: string;
  };
  currentCoffees: {
    label: string;
    headline: string;
    body: string;
    notes: string;
    facts: Record<TCoffeeFactKey, string>;
  };
  brewMethods: {
    number: string;
    label: string;
    headline: string;
    body: string;
    facts: Record<TBrewFactKey, string>;
    methods: Record<TBrewMethodKey, IBrewMethodCopy>;
  };
  menu: {
    number: string;
    label: string;
    headline: string;
    body: string;
    categories: Record<TMenuCategory, string>;
    navCategories: Record<TMenuCategory, string>;
    todaysCoffee: string;
    askBar: string;
  };
  space: {
    number: string;
    label: string;
    headline: string;
    body: string;
    secondary: string;
    captions: Record<TSpacePhotoKey, string>;
  };
  gallery: {
    number: string;
    label: string;
    headline: string;
    captions: Record<TGalleryCaptionKey, string>;
  };
  sunflower: {
    lines: string[];
  };
  visit: {
    number: string;
    label: string;
    headline: string;
    body: string;
    placeLabel: string;
    hoursLabel: string;
    locationLabel: string;
    plusCodeLabel: string;
    placeName: string;
    locality: string;
    city: string;
    region: string;
    country: string;
    hours: IHoursRow[];
    amenities: {
      outdoor: string;
      takeaway: string;
    };
    contactLabel: string;
    detailsLabel: string;
    placeLine: string;
  };
  footer: {
    name: string;
    locality: string;
    line: string;
    rights: string;
    signature: string;
    contact: string;
    support: string;
    meta: string;
    explore: string;
    visitHeading: string;
    around: string;
    brew: string;
  };
  captions: {
    hero: string;
  };
  a11y: {
    home: string;
    skip: string;
    openMenu: string;
    closeMenu: string;
    primaryNav: string;
    mobileNav: string;
    footerNav: string;
    map: string;
    menuCategories: string;
    directions: string;
    callOkan: string;
    instagramOkan: string;
    tiktokOkan: string;
    emailOkan: string;
  };
  notFound: {
    headline: string;
    body: string;
    cta: string;
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
  priority?: boolean;
}

export interface IOrderLinkProps {
  href: string | null;
  className?: string;
  children: ReactNode;
}

export interface IHashLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
  ariaCurrent?: "true";
}

export type TPhotoTone = "editorial" | "sunflower" | "plain";

export interface IPhotoProps {
  photo: IPhotoAsset;
  className?: string;
  imageClassName?: string;
  sizes: string;
  priority?: boolean;
  quality?: number;
  tone?: TPhotoTone;
}

export interface ISectionMetaProps {
  number?: string;
  label: string;
  className?: string;
  light?: boolean;
}

export interface ITypedHeadingProps {
  lines: string[];
}

export interface IMobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export interface IRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  duration?: number;
  amount?: number;
}

export interface IRevealTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p";
}

export interface IStaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  as?: "div" | "dl";
}

export interface IStaggerItemProps {
  children: ReactNode;
  className?: string;
  y?: number;
  x?: number;
  duration?: number;
}

export interface IRevealImageProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: number;
}

export interface ILanguageSwitchProps {
  className?: string;
}

export interface ILocaleTransitionProps {
  children: ReactNode;
  locale: TLocale;
}

export interface IJsonLdProps {
  dictionary: IDictionary;
}

export type TFooterActionIcon =
  | "directions"
  | "call"
  | "instagram"
  | "tiktok"
  | "email";

export interface IFooterAction {
  label: string;
  href: string | null;
  icon: TFooterActionIcon;
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
