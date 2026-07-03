"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function RootPage() {
  useEffect(() => {
    window.location.replace("/en");
  }, []);

  return (
    <main className="flex min-h-screen w-full items-center justify-center px-6 text-center">
      <div className="max-w-md space-y-4">
        <h1 className="text-3xl font-semibold">Redirecting...</h1>
        <p className="text-muted">
          If you are not redirected automatically, continue to the{" "}
          <Link href="/en" className="underline underline-offset-4">
            English version
          </Link>{" "}
          or{" "}
          <Link href="/sk" className="underline underline-offset-4">
            Slovak version
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
