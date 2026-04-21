import React from "react";

const LoadingSpinner = () => (
  <div className="grid min-h-screen place-items-center">
    <div
      className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600"
      aria-label="Carregando…"
    />
  </div>
);

export default LoadingSpinner;
