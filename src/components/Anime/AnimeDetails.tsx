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

  const coverImage = singleAnimeData[0]?.attributes?.coverImage?.original;
  const posterImage = singleAnimeData[0]?.attributes?.posterImage?.small;
  const startDate = singleAnimeData[0]?.attributes?.startDate?.split("-")[0];
  const averageRating = singleAnimeData[0]?.attributes?.averageRating;
  const synopsis = singleAnimeData[0]?.attributes?.synopsis;
  const ratingRank = singleAnimeData[0]?.attributes?.ratingRank;
  const format = singleAnimeData[0]?.attributes?.subtype;
  const epiDuration = singleAnimeData[0]?.attributes?.episodeLength;
  const ageRating = singleAnimeData[0]?.attributes?.ageRatingGuide;
  const engTitle = singleAnimeData[0]?.attributes?.titles?.en;
  const status = singleAnimeData[0]?.attributes?.status;
  const popularityRank = singleAnimeData[0]?.attributes?.popularityRank;

  return (
    <div className="singlepage-content">
      <div className="media-page">
        <div className="header-wrap">
          <div className="banner" style={{ backgroundImage: `url("${coverImage}")` }}>
            <div className="shadow"></div>
          </div>
          <div className="header-single">
            <div className="sense-wrap"></div>
            <div className="container-single">
              <div className="cover-wrap">
                <div className="cover-wrap-inner" style={{ position: "relative" }}>
                  {posterImage ? (
                    <Image
                      className="posterImage"
                      alt={`Pôster de ${idName}`}
                      src={posterImage}
                      width={215}
                      height={303}
                      sizes="215px"
                      style={{ width: "100%", height: "auto" }}
                    />
                  ) : null}
                </div>
                <div className="actions">
                  <div className="list">
                    <div className="add">Adicionar à lista</div>
                    <div className="dropdown">
                      <span className="span-dropdown">
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
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="favourite"
                    aria-label="Adicionar anime aos favoritos"
                  >
                    <svg
                      className="svg-heart"
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
              <div className="content-single">
                <h1 className="h1-single">{idName}</h1>
                <p className="description-single">{synopsis}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content container">
          <div className="sidebar">
            <div className="data">
              <div className="data-set">
                <div className="type">Título em inglês</div>
                <div className="value">{engTitle ?? "—"}</div>
              </div>
              <div className="data-set">
                <div className="type">Formato</div>
                <div className="value">{formatLabelPt(format)}</div>
              </div>
              <div className="data-set">
                <div className="type">Duração do episódio</div>
                <div className="value">{epiDuration != null ? `${epiDuration} min` : "—"}</div>
              </div>
              <div className="data-set">
                <div className="type">Status</div>
                <div className="value">{statusLabelPt(status, "—")}</div>
              </div>
              <div className="data-set">
                <div className="type">Data de estreia</div>
                <div className="value">{startDate ?? "—"}</div>
              </div>
              <div className="data-set">
                <div className="type">Aprovação da comunidade</div>
                <div className="value">{averageRating != null ? `${averageRating}%` : "—"}</div>
              </div>
              <div className="data-set">
                <div className="type">Rank de popularidade</div>
                <div className="value">{popularityRank ?? "—"}</div>
              </div>
              <div className="data-set">
                <div className="type">Rank de avaliação</div>
                <div className="value">{ratingRank ?? "—"}</div>
              </div>
              <div className="data-set">
                <div className="type">Classificação etária</div>
                <div className="value">{ageRating ?? "—"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;
