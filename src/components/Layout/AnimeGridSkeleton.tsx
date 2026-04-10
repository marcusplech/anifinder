import React from "react";

const RAIL_CLASS: readonly string[] = [
  "home-rail--trending",
  "home-rail--airing",
  "home-rail--rated",
  "home-rail--coming",
];

export function CardSkeleton() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-card-poster skeleton-shimmer-fill" />
      <div className="skeleton-card-title skeleton-shimmer-fill" />
    </div>
  );
}

type ResultsGridSkeletonProps = {
  count?: number;
  /** Rótulo para leitores de tela */
  label?: string;
};

export function ResultsGridSkeleton({ count = 12, label = "Carregando resultados…" }: ResultsGridSkeletonProps) {
  return (
    <div className="landing-section" role="status" aria-label={label}>
      <div className="results">
        {Array.from({ length: count }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

type HomeCardsSkeletonProps = {
  /** Quantidade de blocos (Em alta, No ar, …). Padrão: 4. */
  sections?: number;
  cardsPerSection?: number;
  label?: string;
};

export function HomeCardsSkeleton({
  sections = 4,
  cardsPerSection = 6,
  label = "Carregando listagens…",
}: HomeCardsSkeletonProps) {
  const n = Math.min(Math.max(sections, 1), 4);

  return (
    <div className="search-landing" role="status" aria-label={label}>
      <div className="container">
        {Array.from({ length: n }).map((_, sectionIndex) => (
          <div
            key={sectionIndex}
            className={`landing-section home-rail ${RAIL_CLASS[sectionIndex] ?? "home-rail--trending"}`}
          >
            <div className="title-link">
              <div className="skeleton-section-title skeleton-shimmer-fill" />
            </div>
            <div className="results">
              {Array.from({ length: cardsPerSection }).map((_, j) => (
                <CardSkeleton key={j} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
