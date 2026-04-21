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
      className="media-card group relative grid w-[185px] grid-rows-[min-content_auto] max-[1040px]:w-full [&:nth-last-child(-n+2)_.card-hover]:left-auto [&:nth-last-child(-n+2)_.card-hover]:right-[calc(100%+18px)]"
      href={`/anime/${slug}`}
    >
      <div className="relative z-[5] inline-block h-[265px] w-full cursor-pointer overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500/[0.08] to-cyan-400/[0.06] shadow-[0_2px_8px_rgba(15,23,42,0.06),0_0_0_1px_rgba(15,23,42,0.06)] transition-[box-shadow,transform] duration-300 group-hover:-translate-y-[3px] group-hover:shadow-[0_12px_40px_rgba(15,23,42,0.1),0_0_0_1px_rgba(99,102,241,0.2)] max-[1040px]:aspect-[185/265] max-[1040px]:h-auto max-[1040px]:rounded-[10px]">
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
      <div className="card-hover pointer-events-none invisible absolute left-[calc(100%+18px)] top-1 z-10 min-w-[300px] max-w-[min(100vw,300px)] overflow-hidden rounded-2xl border border-indigo-200/70 bg-white/90 opacity-0 shadow-[0_24px_60px_rgba(15,23,42,0.22)] backdrop-blur-sm transition-[opacity,visibility,transform] duration-300 group-hover:pointer-events-auto group-hover:visible group-hover:translate-x-1 group-hover:opacity-100 max-[1040px]:hidden max-[1400px]:left-[-35%] max-[1400px]:top-[-50%]">
        <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 px-5 py-4 text-white">
          <div className="flex items-start justify-between gap-3">
            <h4 className="line-clamp-2 text-base font-bold leading-6">{canonicalTitle}</h4>
            <div className="inline-flex shrink-0 items-center rounded-full bg-white/20 px-2.5 py-1 text-sm font-semibold">
              <svg
                color="rgb(164,248,113)"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                role="img"
                className="mr-1.5 inline-block h-[1em] overflow-visible align-[-0.125em]"
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
              {averageRating ? `${averageRating}%` : "—"}
            </div>
          </div>
        </div>
        <div className="space-y-4 px-5 py-4 text-slate-600">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-orange-200/80 bg-orange-50 px-3 py-2">
              <p className="text-[11px] font-bold uppercase tracking-wide text-orange-600">
                Classificação
              </p>
              <p className="mt-1 text-sm font-bold text-orange-700">
                {ageRatingGuide ?? "Sem classificação"}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/80 bg-slate-50 px-3 py-2">
              <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500">
                Formato
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-700">
                {subtype ?? "Desconhecido"}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-slate-200 pt-3">
            <p className="text-sm font-semibold text-slate-500">{epiCount()}</p>
            <span className="inline-flex rounded-full bg-gradient-to-r from-amber-100 to-amber-200 px-3 py-1 text-xs font-bold lowercase text-amber-900">
              {statusLabelPt(status)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
