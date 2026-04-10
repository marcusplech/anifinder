import Image from "next/image";
import Link from "next/link";
import { AnimeAttributes } from "@/lib/KitsuTypes";
import { statusLabelPt } from "@/lib/statusLabelPt";

export type CardAttributes = AnimeAttributes;

interface CardProps {
  attributes: CardAttributes;
}

const Card = ({ attributes }: CardProps) => {
  const { episodeCount, slug, canonicalTitle, averageRating, ageRatingGuide, subtype, status } =
    attributes || {};
  const image = attributes?.posterImage?.small;
  if (!image || !slug || !canonicalTitle) return null;

  const epiCount = () => {
    if (!episodeCount) return "Episódio";
    if (episodeCount > 1) return `${episodeCount} episódios`;
    if (episodeCount === 1) return `${episodeCount} episódio`;
    return "Episódio";
  };

  return (
    <Link
      className="media-card group relative grid w-[185px] grid-rows-[min-content_auto] max-[1040px]:w-full"
      href={`/anime/${slug}`}
    >
      <div className="relative z-[5] inline-block h-[265px] w-full cursor-pointer overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500/[0.08] to-cyan-400/[0.06] shadow-[0_2px_8px_rgba(15,23,42,0.06),0_0_0_1px_rgba(15,23,42,0.06)] transition-[box-shadow,transform] duration-300 group-hover:-translate-y-[3px] group-hover:shadow-[0_12px_40px_rgba(15,23,42,0.1),0_0_0_1px_rgba(99,102,241,0.2)] max-[1040px]:h-auto max-[1040px]:rounded-[10px] max-[1040px]:before:block max-[1040px]:before:h-0 max-[1040px]:before:w-0 max-[1040px]:before:content-['']">
        <Image
          className="h-full w-full border-0 align-top opacity-100 transition-opacity duration-300"
          src={image}
          alt={`Capa de fundo ${canonicalTitle}`}
          fill
          sizes="185px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <span className="mt-2.5 line-clamp-2 cursor-pointer overflow-hidden text-sm font-semibold leading-[21px] text-slate-500 transition-colors duration-200 group-hover:text-indigo-500">
        {canonicalTitle}
      </span>
      <div className="pointer-events-none invisible absolute left-[calc(100%+18px)] top-1 z-10 min-w-[290px] max-w-[min(100vw,290px)] rounded-[10px] border border-slate-900/[0.06] bg-white p-6 opacity-0 shadow-[0_12px_40px_rgba(15,23,42,0.1)] transition-[opacity,visibility] duration-300 before:absolute before:right-full before:top-[15%] before:z-[2] before:border-y-[0.4rem] before:border-r-[0.6rem] before:border-y-transparent before:border-r-white before:content-[''] group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 max-[1040px]:hidden max-[1400px]:left-[-35%] max-[1400px]:top-[-50%] max-[1400px]:before:bottom-[-10px] max-[1400px]:before:left-[45%] max-[1400px]:before:right-auto max-[1400px]:before:top-full max-[1400px]:before:border-x-[10px] max-[1400px]:before:border-t-[10px] max-[1400px]:before:border-x-transparent max-[1400px]:before:border-t-white max-[1400px]:before:border-y-0 max-[1400px]:before:border-r-0">
        <div className="grid grid-cols-[1fr_60px] text-base font-semibold text-slate-500">
          <div className="anime-name">{canonicalTitle}</div>
          <div className="score flex justify-end">
            <svg
              color="rgb(123,213,85)"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              role="img"
              className="inline-block h-[1em] overflow-visible align-[-0.125em]"
              width="1em"
              viewBox="0 0 496 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"
                fill="currentColor"
              />
            </svg>
            <span className="inline-flex pl-0.5 align-top">
              {averageRating ? `${averageRating}%` : "—"}
            </span>
          </div>
        </div>
        <div className="mt-2.5 text-[13px] font-bold text-orange-700">
          {ageRatingGuide ?? "Sem classificação"}
        </div>
        <div className="mt-1.5 text-[13px] font-semibold text-slate-500">
          <span>{subtype ?? "Desconhecido"}</span>
          <span className="px-1">•</span>
          <span>{epiCount()}</span>
          <div className="mt-5 flex h-5 flex-wrap items-center overflow-hidden">
            <div className="inline-block h-5 rounded-[10px] bg-gradient-to-br from-amber-100 to-amber-200 px-3 text-xs font-bold lowercase leading-5 text-amber-900">
              {statusLabelPt(status)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
