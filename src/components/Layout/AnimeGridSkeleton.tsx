import React from "react";
import {
  homeCardRailSections,
  homeListingShellClass,
  resultsGridClass,
  skeletonShimmerClass,
} from "@/lib/ui";

export function CardSkeleton() {
  return (
    <div className="grid w-[185px] max-w-full grid-rows-[min-content_auto] max-[1040px]:w-full">
      <div
        className={`h-[265px] w-full rounded-xl shadow-[0_2px_8px_rgba(15,23,42,0.06),0_0_0_1px_rgba(15,23,42,0.06)] max-[1040px]:aspect-[185/265] max-[1040px]:h-auto ${skeletonShimmerClass}`}
      />
      <div className={`mt-2.5 h-3.5 w-[88%] rounded-md ${skeletonShimmerClass}`} />
    </div>
  );
}

type ResultsGridSkeletonProps = {
  count?: number;
  /** Rótulo para leitores de tela */
  label?: string;
};

export function ResultsGridSkeleton({
  count = 12,
  label = "Carregando resultados…",
}: ResultsGridSkeletonProps) {
  return (
    <div className="mb-6" role="status" aria-label={label}>
      <div className={resultsGridClass}>
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
    <div className="mt-8" role="status" aria-label={label}>
      <div className={homeListingShellClass}>
        {Array.from({ length: n }).map((_, sectionIndex) => (
          <div key={sectionIndex} className="mb-14">
            <div
              className={`mb-5 flex items-end border-l-4 pb-0 pl-3.5 ${homeCardRailSections[sectionIndex]?.accent ?? homeCardRailSections[0].accent}`}
            >
              <div className={`mb-1.5 h-3.5 w-40 max-w-[70%] rounded-md ${skeletonShimmerClass}`} />
            </div>
            <div className={resultsGridClass}>
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
