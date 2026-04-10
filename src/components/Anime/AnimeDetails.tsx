"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { getAnimeBySlug } from "@/lib/KitsuClient";
import { queryKeys } from "@/lib/QueryKeys";
import { AnimeAttributes, KitsuResource } from "@/lib/KitsuTypes";
import { statusLabelPt } from "@/lib/statusLabelPt";

interface AnimeDetailsProps {
  slug?: string;
}
type SingleAnime = KitsuResource<AnimeAttributes>;

const formatLabelPt = (format: string | null | undefined) => {
  if (!format) return "—";
  const map: Record<string, string> = {
    TV: "TV",
    tv: "TV",
    movie: "Filme",
    Movie: "Filme",
    OVA: "OVA",
    ONA: "ONA",
    special: "Especial",
    Special: "Especial",
    music: "Música",
    Music: "Música",
  };
  return map[format] ?? format;
};

const chipBase =
  "inline-flex items-center rounded-full border border-indigo-500/20 bg-white/55 px-3 py-1.5 font-[family-name:var(--font-roboto),sans-serif] text-[0.8125rem] font-semibold leading-tight text-slate-700 shadow-sm backdrop-blur-md";

const AnimeDetails = ({ slug: slugProp }: AnimeDetailsProps) => {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const id = slugProp || pathname.split("/")[2] || "";
  const idName = id.replace("-", " ");

  const { data: animeData } = useQuery({
    queryKey: queryKeys.single(id),
    queryFn: () => getAnimeBySlug(id),
    enabled: Boolean(id),
  });
  const singleAnimeData = (animeData?.data ?? []) as SingleAnime[];
  if (!singleAnimeData.length) return null;

  const attrs = singleAnimeData[0]?.attributes;
  const coverImage = attrs?.coverImage?.original;
  const posterImage = attrs?.posterImage?.small;
  const startDate = attrs?.startDate?.split("-")[0];
  const averageRating = attrs?.averageRating;
  const synopsis = attrs?.synopsis;
  const ratingRank = attrs?.ratingRank;
  const format = attrs?.subtype;
  const epiDuration = attrs?.episodeLength;
  const ageRating = attrs?.ageRatingGuide;
  const engTitle = attrs?.titles?.en;
  const status = attrs?.status;
  const popularityRank = attrs?.popularityRank;
  const canonicalTitle = attrs?.canonicalTitle;
  const episodeCount = attrs?.episodeCount;

  const displayTitle = canonicalTitle?.trim() || idName.replace(/\b\w/g, (c) => c.toUpperCase());

  const synopsisText = synopsis?.trim();
  const episodeLabel =
    episodeCount == null ? null : episodeCount === 1 ? "1 episódio" : `${episodeCount} episódios`;

  return (
    <div className="min-h-screen pb-10">
      <div>
        <div className="relative z-[997]">
          <div
            className="mt-[-58px] min-h-[220px] bg-cover bg-[position:50%_28%] bg-no-repeat [height:min(42vh,420px)] max-[760px]:mt-0 max-[760px]:h-[200px]"
            style={
              coverImage
                ? { backgroundImage: `url("${coverImage}")` }
                : { background: "linear-gradient(145deg, #1e1b4b 0%, #312e81 50%, #0f172a 100%)" }
            }
          >
            <div className="h-full w-full bg-[linear-gradient(180deg,rgba(15,23,42,0)_0%,rgba(30,27,75,0.35)_45%,rgba(15,23,42,0.88)_100%)]" />
          </div>
          <div className="relative border-b border-indigo-500/10 bg-[linear-gradient(180deg,#f8fafc_0%,#f1f5f9_48%,#eef2f7_100%)] shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_20px_48px_rgba(15,23,42,0.05)]">
            <div className="mx-auto grid min-h-[220px] w-full min-w-[320px] max-w-[1140px] grid-cols-[215px_minmax(0,1fr)] gap-x-[clamp(1rem,3vw,2rem)] px-[50px] max-[760px]:grid-cols-1 max-[1540px]:px-[30px] min-[1540px]:max-w-[1520px] min-[1540px]:px-[100px]">
              <div className="-mt-[125px] max-[760px]:-mt-[100px]">
                <div className="relative max-[760px]:grid max-[760px]:grid-cols-[110px_1fr] max-[760px]:items-end max-[760px]:gap-4">
                  {posterImage ? (
                    <Image
                      className="mt-4 w-full rounded-[10px] border-0 bg-gradient-to-br from-indigo-500/[0.06] to-slate-900/[0.03] align-top shadow-[0_20px_50px_rgba(15,23,42,0.14),0_0_0_1px_rgba(99,102,241,0.1)] max-[760px]:max-w-[110px]"
                      alt={`Pôster de ${displayTitle}`}
                      src={posterImage}
                      width={215}
                      height={303}
                      sizes="215px"
                      style={{ width: "100%", height: "auto" }}
                      priority
                    />
                  ) : null}
                </div>
                <div className="my-5 grid grid-cols-[1fr_35px] gap-4">
                  <div className="flex h-[38px] cursor-pointer items-stretch overflow-hidden rounded-[10px] bg-gradient-to-br from-indigo-600 to-indigo-500 text-sm leading-[13px] text-white shadow-[0_2px_8px_rgba(79,70,229,0.25),inset_0_1px_0_rgba(255,255,255,0.12)] transition-[box-shadow,transform,filter] duration-200 hover:-translate-y-px hover:brightness-[1.03] hover:shadow-[0_8px_24px_rgba(79,70,229,0.32),inset_0_1px_0_rgba(255,255,255,0.15)]">
                    <div className="flex flex-1 items-center justify-center pl-2.5 font-[family-name:var(--font-roboto),sans-serif]">
                      Adicionar à lista
                    </div>
                    <div className="flex w-[34px] items-center justify-center rounded-r-[10px] bg-black/20 text-white/90 max-[760px]:hidden">
                      <svg
                        className="single-chevrondown"
                        width="20"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="flex h-[38px] items-center justify-center rounded-[10px] border border-pink-600/25 bg-white/85 px-3.5 text-sm font-bold text-pink-700 shadow-[0_2px_8px_rgba(15,23,42,0.06)] transition hover:-translate-y-px hover:border-pink-600/35 hover:bg-pink-50/95 hover:shadow-[0_4px_16px_rgba(190,24,93,0.12)]"
                    aria-label="Adicionar anime aos favoritos"
                  >
                    <svg
                      className="inline-block h-[1em] overflow-visible align-[-0.125em]"
                      viewBox="0 0 512 512"
                      aria-hidden="true"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex min-w-0 flex-col gap-3 pb-2 pt-6 font-[family-name:var(--font-roboto),sans-serif]">
                <h1 className="h1-single m-0 p-0 font-[family-name:var(--font-roboto),sans-serif] text-[clamp(1.35rem,2.8vw,1.85rem)] font-bold leading-tight tracking-[-0.03em] text-slate-900">
                  {displayTitle}
                </h1>
                <div className="flex flex-wrap items-center gap-2" aria-label="Resumo rápido">
                  {format ? <span className={chipBase}>{formatLabelPt(format)}</span> : null}
                  {startDate ? <span className={chipBase}>{startDate}</span> : null}
                  {episodeLabel ? <span className={chipBase}>{episodeLabel}</span> : null}
                  {averageRating != null ? (
                    <span
                      className={`${chipBase} border-indigo-500/25 bg-gradient-to-br from-indigo-500/10 to-indigo-400/5 text-indigo-900`}
                    >
                      {averageRating}% aprovação
                    </span>
                  ) : null}
                  {ageRating ? (
                    <span
                      className={`${chipBase} border-slate-900/10 bg-slate-100/85 font-medium text-slate-600`}
                    >
                      {ageRating}
                    </span>
                  ) : null}
                </div>
                {synopsisText ? (
                  <p className="m-0 max-w-[52rem] pt-1 font-[family-name:var(--font-roboto),sans-serif] text-[0.9375rem] leading-[1.72] text-slate-600">
                    {synopsisText}
                  </p>
                ) : (
                  <p className="m-0 max-w-[52rem] pt-1 font-[family-name:var(--font-roboto),sans-serif] text-[0.9375rem] italic leading-[1.72] text-slate-600 opacity-[0.85]">
                    Sem sinopse disponível.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[1140px] bg-[linear-gradient(180deg,transparent_0%,rgba(99,102,241,0.03)_100%)] px-[50px] pt-9 max-[760px]:pt-6 max-[1540px]:px-[30px] min-[1540px]:max-w-[1520px] min-[1540px]:px-[100px]">
          <h2 className="m-0 mb-4 font-[family-name:var(--font-roboto),sans-serif] text-[1.05rem] font-bold tracking-[-0.02em] text-slate-800">
            Ficha técnica
          </h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-2.5 rounded-[14px] border border-indigo-500/10 bg-gradient-to-br from-white/70 to-slate-50/95 p-[1.35rem] text-slate-500 shadow-[0_2px_16px_rgba(15,23,42,0.04),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-sm max-[760px]:grid-cols-1">
            {[
              ["Título em inglês", engTitle ?? "—"],
              ["Formato", formatLabelPt(format)],
              ["Episódios", episodeCount ?? "—"],
              ["Duração do episódio", epiDuration != null ? `${epiDuration} min` : "—"],
              ["Status", statusLabelPt(status, "—")],
              ["Data de estreia", startDate ?? "—"],
              ["Aprovação da comunidade", averageRating != null ? `${averageRating}%` : "—"],
              ["Rank de popularidade", popularityRank ?? "—"],
              ["Rank de avaliação", ratingRank ?? "—"],
              ["Classificação etária", ageRating ?? "—"],
            ].map(([label, val]) => (
              <div
                key={label}
                className="rounded-[10px] border border-slate-900/10 bg-white/55 px-[0.95rem] py-[0.85rem] font-[family-name:var(--font-roboto),sans-serif] transition-colors hover:border-indigo-500/20"
              >
                <div className="pb-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.06em] text-slate-400">
                  {label}
                </div>
                <div className="break-words text-sm font-semibold leading-snug text-slate-800">
                  {val as string | number}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;
