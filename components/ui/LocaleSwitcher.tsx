"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("LocaleSwitcher");
  const [isPending, startTransition] = useTransition();

  const changeLocale = (nextLocale: (typeof routing.locales)[number]) => {
    const hash = window.location.hash;

    startTransition(() => {
      router.replace(`${pathname}${hash}`, { locale: nextLocale });
    });
  };

  return (
    <div aria-label={t("label")}
      className="flex items-center rounded-full border border-line bg-surface p-1 shadow-lg"
      role="group"
    >
      {routing.locales.map((supportedLocale) => (
        <button
          key={supportedLocale}
          type="button"
          aria-label={
            supportedLocale === "en" ? t("english") : t("slovak")
          }
          aria-pressed={locale === supportedLocale}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase transition-colors duration-300 cursor-pointer
            ${locale === supportedLocale
              ? "bg-action text-action-ink"
              : "text-muted hover:text-ink"
            }`}
          disabled={isPending || locale === supportedLocale}
          onClick={() => changeLocale(supportedLocale)}
        >
          {supportedLocale}
        </button>
      ))}
    </div>
  );
}
