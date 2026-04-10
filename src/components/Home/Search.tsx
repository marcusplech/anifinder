"use client";
import React, { Dispatch, SetStateAction, useEffect, useMemo, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { getGenres, searchAnime } from "@/lib/KitsuClient";
import { queryKeys } from "@/lib/QueryKeys";
import {
  AnimeAttributes,
  GenreAttributes,
  KitsuListResponse,
  KitsuResource,
} from "@/lib/KitsuTypes";
import { ResultsGridSkeleton } from "@/components/Layout/AnimeGridSkeleton";
import Card, { CardAttributes } from "./Card";
import FilterSelect from "./FilterSelect";

type GenreItem = KitsuResource<GenreAttributes>;
type SearchResultItem = KitsuResource<CardAttributes>;
interface SearchProps {
  search: Dispatch<SetStateAction<SearchResultItem[]>>;
}
type FilterKey = "genres" | "year" | "format" | "airing";

const areSameResults = (a: SearchResultItem[], b: SearchResultItem[]) => {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i]?.id !== b[i]?.id) return false;
  }
  return true;
};

const FORMAT_OPTIONS = [
  { key: "TV", label: "TV" },
  { key: "Movie", label: "Filme" },
  { key: "Special", label: "Especial" },
  { key: "OVA", label: "OVA" },
  { key: "ONA", label: "ONA" },
  { key: "Music", label: "Música" },
];

const AIRING_OPTIONS = [
  { key: "Finished", label: "Finalizado" },
  { key: "Current", label: "Em exibição" },
  { key: "Unreleased", label: "Não lançado" },
  { key: "TBA", label: "A definir" },
];

const Search = ({ search }: SearchProps) => {
  const [filters, setFilters] = useState<Record<FilterKey, string>>({
    genres: "",
    year: "",
    format: "",
    airing: "",
  });
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState("");
  const [openDropdown, setOpenDropdown] = useState<FilterKey | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  const { data: genresData } = useQuery<KitsuListResponse<GenreAttributes>>({
    queryKey: queryKeys.genres,
    queryFn: getGenres,
  });
  const stateGenres: GenreItem[] = genresData?.data ?? [];
  const arrYears = Array.from({ length: 40 }, (_, i) => 2022 - i);

  const setFilter = (key: FilterKey) => (value: string) =>
    setFilters((prev) => ({ ...prev, [key]: value }));

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (ref.current && !ref.current.contains(target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedText(text);
    }, 200);
    return () => clearTimeout(timeout);
  }, [text]);

  const hasFilters = Boolean(
    debouncedText || filters.genres || filters.year || filters.airing || filters.format
  );
  const { data: searchData, isFetching } = useQuery<KitsuListResponse<AnimeAttributes>>({
    queryKey: queryKeys.search(
      debouncedText,
      filters.genres,
      filters.year,
      filters.airing,
      filters.format
    ),
    queryFn: () =>
      searchAnime({
        text: debouncedText,
        genres: filters.genres,
        year: filters.year,
        airing: filters.airing,
        format: filters.format,
      }),
    enabled: hasFilters,
  });

  const results = useMemo(() => {
    if (!hasFilters) return [];
    if (!searchData?.data?.length) return null;
    return searchData.data;
  }, [hasFilters, searchData]);

  useEffect(() => {
    const nextResults = results ?? [];
    search((prev) => (areSameResults(prev, nextResults) ? prev : nextResults));
  }, [results, search]);

  const renderedAnime = results?.map((result) => (
    <Card key={result.id} attributes={result.attributes} />
  ));
  const genreOptions = stateGenres.map((genre) => ({
    key: String(genre.attributes.name ?? genre.id),
    label: genre.attributes.name ?? "",
  }));
  const yearOptions = arrYears.map((year) => ({ key: String(year), label: String(year) }));

  return (
    <div className="search">
      <div className="container">
        <div className="filters-wrap">
          <div ref={ref} className="filters">
            <div className="filter-select">
              <div className="name">Buscar</div>
              <div className="search-wrap">
                <Image
                  src="/images/icons-search.svg"
                  alt=""
                  aria-hidden="true"
                  width={16}
                  height={16}
                  className="search-icon"
                />
                <input
                  aria-label="Buscar anime"
                  placeholder="Buscar títulos…"
                  onClick={() => setOpenDropdown(null)}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  type="search"
                  autoComplete="off"
                  className="input-search"
                />
              </div>
            </div>
            <FilterSelect
              label="Gênero"
              dropdownTitle="Gêneros"
              value={filters.genres}
              open={openDropdown === "genres"}
              onOpen={() => setOpenDropdown("genres")}
              onToggle={(open) => setOpenDropdown(open ? "genres" : null)}
              onChange={setFilter("genres")}
              options={genreOptions}
              allowTyping
            />
            <FilterSelect
              label="Ano"
              dropdownTitle="Anos"
              value={filters.year}
              open={openDropdown === "year"}
              onOpen={() => setOpenDropdown("year")}
              onToggle={(open) => setOpenDropdown(open ? "year" : null)}
              onChange={setFilter("year")}
              options={yearOptions}
            />
            <FilterSelect
              label="Formato"
              dropdownTitle="Formato"
              value={filters.format}
              open={openDropdown === "format"}
              onOpen={() => setOpenDropdown("format")}
              onToggle={(open) => setOpenDropdown(open ? "format" : null)}
              onChange={setFilter("format")}
              options={FORMAT_OPTIONS}
            />
            <FilterSelect
              label="Status de exibição"
              dropdownTitle="Status"
              value={filters.airing}
              open={openDropdown === "airing"}
              onOpen={() => setOpenDropdown("airing")}
              onToggle={(open) => setOpenDropdown(open ? "airing" : null)}
              onChange={setFilter("airing")}
              options={AIRING_OPTIONS}
            />
          </div>
        </div>
        <div>
          {!isFetching ? (
            <div className="landing-section">
              {results ? (
                <div className="results">{renderedAnime}</div>
              ) : (
                <h2 className="no-results">Nenhum resultado</h2>
              )}
            </div>
          ) : (
            <ResultsGridSkeleton count={12} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
