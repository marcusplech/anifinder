export interface KitsuResource<TAttributes> {
  id: string;
  type?: string;
  attributes: TAttributes;
}

export interface KitsuListResponse<TAttributes> {
  data: Array<KitsuResource<TAttributes>>;
}

export interface AnimeAttributes {
  episodeCount?: number | null;
  slug?: string;
  totalLength?: number | null;
  canonicalTitle?: string;
  averageRating?: string | null;
  ageRatingGuide?: string | null;
  subtype?: string | null;
  status?: string | null;
  posterImage?: { small?: string };
  coverImage?: { original?: string };
  startDate?: string;
  synopsis?: string | null;
  ratingRank?: string | number | null;
  episodeLength?: number | null;
  titles?: { en?: string };
  popularityRank?: string | number | null;
}

export interface GenreAttributes {
  name?: string;
}
