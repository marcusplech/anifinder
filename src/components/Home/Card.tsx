import Image from "next/image";
import Link from "next/link";
import { AnimeAttributes } from "@/lib/KitsuTypes";

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
    if (!episodeCount) return "Episode";
    if (episodeCount > 1) return `${episodeCount} Episodes`;
    if (episodeCount === 1) return `${episodeCount} Episode`;
    return "Episode";
  };

  return (
    <Link className="media-card" href={`/anime/${slug}`}>
      <div className="cover">
        <Image
          className="image-load"
          src={image}
          alt={`Capa de fundo ${canonicalTitle}`}
          fill
          sizes="185px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <span className="title-card">{canonicalTitle}</span>
      <div className="hover-data right">
        <div className="header">
          <div className="anime-name">{canonicalTitle}</div>
          <div className="score">
            <svg
              color="rgb(123,213,85)"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              role="img"
              className="icon face"
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
            <span className="percentage">{averageRating ? `${averageRating}%` : "N/A"}</span>
          </div>
        </div>
        <div className="studios">{ageRatingGuide ?? "Unrated"}</div>
        <div className="info">
          <span>{subtype ?? "Unknown"}</span>
          <span className="separator" style={{ padding: "0 4px" }}>
            •
          </span>
          <span>{epiCount()}</span>
          <div className="genres">
            <div className="genre">{status ?? "Unknown"}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
