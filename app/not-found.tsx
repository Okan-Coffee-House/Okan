import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { en } from "@/content/messages/en";

export const metadata: Metadata = {
  title: en.seo.notFoundTitle,
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="content" className="flex min-h-[80svh] flex-col justify-end px-[var(--pad-x)] pb-20 pt-32">
      <Logo />
      <h1 className="display mt-10 max-w-[12ch]">{en.notFound.headline}</h1>
      <p className="mt-6 max-w-[32ch] text-ink/70">{en.notFound.body}</p>
      <Link href="/en" className="btn-ink mt-10 w-fit group">
        {en.cta.home}
        <span className="arrow" aria-hidden="true">
          →
        </span>
      </Link>
    </main>
  );
}
