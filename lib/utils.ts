export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function mailHref(email: string): string {
  return `mailto:${email}`;
}

export function isRemoteHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}
