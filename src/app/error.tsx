"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <h2 className="text-xl font-semibold text-[rgb(81,97,112)]">Algo deu errado</h2>
      <p className="max-w-md text-sm text-[rgb(116,136,153)]">{error.message}</p>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-md bg-[rgb(61,180,242)] px-4 py-2 text-sm font-semibold text-white"
      >
        Tentar novamente
      </button>
    </div>
  );
}
