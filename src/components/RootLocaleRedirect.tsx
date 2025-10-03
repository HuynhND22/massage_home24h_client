"use client";

import { useEffect } from "react";

const locales = ["vi", "en", "ko", "zh"] as const;
type Locale = typeof locales[number];

export default function RootLocaleRedirect() {
  useEffect(() => {
    try {
      const stored = localStorage.getItem("preferredLanguage") as Locale | null;
      if (stored && locales.includes(stored) && stored !== "vi") {
        const target = `/${stored}`;
        if (window.location.pathname !== target) {
          window.location.replace(target);
        }
      }
    } catch {}
  }, []);

  return null;
}
