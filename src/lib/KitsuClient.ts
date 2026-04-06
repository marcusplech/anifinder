import { AnimeAttributes, GenreAttributes, KitsuListResponse } from "@/lib/KitsuTypes";
const BASE_URL = "https://kitsu.io/api/edge";

type SearchFilters = {
  text?: string;
  genres?: string;
  year?: string;
  airing?: string;
  format?: string;
};

async function request<T>(path: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`, {
    next: { revalidate: 120 },
  });
  if (!response.ok) throw new Error(`Kitsu request failed: ${response.status}`);
  return response.json();
}

export async function getTrendingAnime() {
  return request<KitsuListResponse<AnimeAttributes>>("/trending/anime?limit=6?");
}
export async function getRatedAnime() {
  return request<KitsuListResponse<AnimeAttributes>>(
    "/anime?page[limit]=6&page[offset]=6&sort=-averageRating"
  );
}
export async function getComingAnime() {
  return request<KitsuListResponse<AnimeAttributes>>(
    "/anime?page[limit]=6&page[offset]=5&sort=-startDate"
  );
}
export async function getAiringAnime() {
  return request<KitsuListResponse<AnimeAttributes>>(
    "/anime?page[limit]=6&page[offset]=0&sort=-startDate&sort=-averageRating"
  );
}
export async function getGenres() {
  return request<KitsuListResponse<GenreAttributes>>(
    "/genres?page%5Blimit%5D=20&page%5Boffset%5D=0"
  );
}
export async function getPopularityAnime() {
  return request<KitsuListResponse<AnimeAttributes>>(
    "/anime?page[limit]=10&page[offset]=0&sort=popularityRank"
  );
}

export async function searchAnime(filters: SearchFilters) {
  const params = new URLSearchParams();
  if (filters.text) params.append("filter[text]", filters.text);
  if (filters.genres) params.append("filter[categories]", filters.genres);
  if (filters.year) params.append("filter[year]", filters.year);
  if (filters.airing) params.append("filter[status]", filters.airing);
  if (filters.format) params.append("filter[subtype]", filters.format);
  if (!params.toString()) return { data: [] };
  return request<KitsuListResponse<AnimeAttributes>>(`/anime?${params.toString()}`);
}

export async function getAnimeBySlug(slug: string) {
  return request<KitsuListResponse<AnimeAttributes>>(
    `/anime?filter[text]=${encodeURIComponent(slug)}`
  );
}
