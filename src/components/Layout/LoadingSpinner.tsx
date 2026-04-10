import React from "react";

const LoadingSpinner = () => (
  <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
    <div
      aria-label="Carregando…"
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "9999px",
        border: "4px solid rgba(53, 119, 255, 0.25)",
        borderTopColor: "rgb(53, 119, 255)",
        animation: "spin 0.9s linear infinite",
      }}
    />
  </div>
);

export default LoadingSpinner;
