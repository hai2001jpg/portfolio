"use client";

import { useLayoutEffect } from "react";
import { useLocale } from "next-intl";

export default function DocumentLocaleSync() {
  const locale = useLocale();

  useLayoutEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
