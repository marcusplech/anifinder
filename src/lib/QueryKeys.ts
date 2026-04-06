export const queryKeys = {
  trending: ["anime", "trending"] as const,
  airing: ["anime", "airing"] as const,
  rated: ["anime", "rated"] as const,
  coming: ["anime", "coming"] as const,
  genres: ["genres"] as const,
  popularity: ["anime", "popularity"] as const,
  search: (text: string, genres: string, year: string, airing: string, format: string) =>
    ["anime", "search", text, genres, year, airing, format] as const,
  single: (slug: string) => ["anime", "single", slug] as const,
};
