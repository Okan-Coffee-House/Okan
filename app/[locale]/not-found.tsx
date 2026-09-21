import Link from "next/link";
import { headers } from "next/headers";
import { Logo } from "@/components/Logo";
import { LOCALE_HEADER } from "@/constants/locales";
import { getDictionary, getLocale, withLocale } from "@/lib/locale";

export default async function NotFound() {
  const headerList = await headers();
  const locale = getLocale(headerList.get(LOCALE_HEADER) || undefined);
  const dictionary = getDictionary(locale);

  return (
    <main id="content" className="flex min-h-[80svh] flex-col justify-end px-[var(--pad-x)] pb-20 pt-32">
      <Logo />
      <h1 className="display mt-10 max-w-[12ch] rtl:max-w-[16ch]">
        {dictionary.notFound.headline}
      </h1>
      <p className="mt-6 max-w-[32ch] text-ink/70">{dictionary.notFound.body}</p>
      <Link href={withLocale(locale)} className="btn-ink mt-10 w-fit group">
        {dictionary.cta.home}
        <span className="arrow" aria-hidden="true">
          →
        </span>
      </Link>
    </main>
  );
}
