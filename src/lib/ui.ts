/** Classes Tailwind partilhadas (evita strings longas duplicadas nos componentes). */

/** Grelha responsiva para cartões de anime (home, busca, skeleton). */
export const resultsGridClass =
  "grid justify-between gap-x-[30px] gap-y-7 [grid-template-columns:repeat(auto-fill,185px)] max-[1065px]:justify-center max-[1065px]:gap-x-5 max-[1065px]:gap-y-6 max-[1065px]:px-5 max-[1065px]:[grid-template-columns:repeat(auto-fill,minmax(125px,1fr))] max-[760px]:[grid-template-columns:repeat(auto-fill,minmax(105px,1fr))] max-[400px]:gap-5 max-[400px]:gap-x-3 max-[400px]:px-2.5 max-[400px]:[grid-template-columns:repeat(auto-fill,minmax(100px,1fr))]";

/** Preenchimento animado dos placeholders de carregamento. */
export const skeletonShimmerClass =
  "bg-[linear-gradient(105deg,#e2e8f0_0%,#f1f5f9_42%,#e2e8f0_88%)] bg-[length:200%_100%] animate-[af-shimmer_1.15s_ease-in-out_infinite]";

/** Trilhos da home: título + borda lateral colorida (mesma ordem no skeleton). */
export const homeCardRailSections = [
  { title: "Em alta agora", accent: "border-l-pink-500" },
  { title: "No ar esta temporada", accent: "border-l-cyan-500" },
  { title: "Melhor avaliados", accent: "border-l-amber-400" },
  { title: "Em breve", accent: "border-l-violet-400" },
] as const;

/** Largura máxima e padding horizontal alinhados à home (listagens + skeleton). */
export const homeListingShellClass =
  "mx-auto w-full min-w-[320px] max-w-[1520px] px-5 sm:px-8 min-[1040px]:px-[50px] min-[1540px]:px-[100px]";
