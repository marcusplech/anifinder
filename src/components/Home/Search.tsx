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
import LoadingSpinner from "@/components/Layout/LoadingSpinner";
import Card, { CardAttributes } from "./Card";
import FilterSelect from "./FilterSelect";

type GenreItem = KitsuResource<GenreAttributes>;
type SearchResultItem = KitsuResource<CardAttributes>;
interface SearchProps {
  search: Dispatch<SetStateAction<SearchResultItem[]>>;
}
type FilterKey = "genres" | "year" | "format" | "airing";
type DropdownType = "Genres" | "Format" | "Airing" | "Year" | null;

const areSameResults = (a: SearchResultItem[], b: SearchResultItem[]) => {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i]?.id !== b[i]?.id) return false;
  }
  return true;
};

const Search = ({ search }: SearchProps) => {
  const [filters, setFilters] = useState<Record<FilterKey, string>>({
    genres: "",
    year: "",
    format: "",
    airing: "",
  });
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState("");
  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  const { data: genresData } = useQuery<KitsuListResponse<GenreAttributes>>({
    queryKey: queryKeys.genres,
    queryFn: getGenres,
  });
  const stateGenres: GenreItem[] = genresData?.data ?? [];
  const arrYears = Array.from({ length: 40 }, (_, i) => 2022 - i);
  const formats = ["TV", "Movie", "Special", "OVA", "ONA", "Music"];
  const airingStatus = ["Finished", "Current", "Unreleased", "TBA"];

  const setFilter = (key: FilterKey) => (value: string) =>
    setFilters((prev) => ({ ...prev, [key]: value }));

  const openDropDown = (type: DropdownType) => setOpenDropdown(type);

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
    key: genre.attributes.name ?? genre.id,
    label: genre.attributes.name ?? "",
  }));
  const yearOptions = arrYears.map((year) => ({ key: String(year), label: String(year) }));
  const formatOptions = formats.map((format) => ({ key: format, label: format }));
  const airingOptions = airingStatus.map((status) => ({ key: status, label: status }));

  return (
    <div className="search">
      <div className="container">
        <div className="filters-wrap">
          <div ref={ref} className="filters">
            <div className="filter-select">
              <div className="name">Search</div>
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
                  aria-label="Search anime"
                  placeholder="Search..."
                  onClick={() => openDropDown(null)}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  type="search"
                  autoComplete="off"
                  className="input-search"
                />
              </div>
            </div>
            <FilterSelect
              label="Genres"
              dropdownTitle="Genres"
              value={filters.genres}
              open={openDropdown === "Genres"}
              onOpen={() => openDropDown("Genres")}
              onToggle={(open) => setOpenDropdown(open ? "Genres" : null)}
              onChange={setFilter("genres")}
              options={genreOptions}
            />
            <FilterSelect
              label="Year"
              dropdownTitle="Years"
              value={filters.year}
              open={openDropdown === "Year"}
              onOpen={() => openDropDown("Year")}
              onToggle={(open) => setOpenDropdown(open ? "Year" : null)}
              onChange={setFilter("year")}
              options={yearOptions}
            />
            <FilterSelect
              label="Format"
              dropdownTitle="Format"
              value={filters.format}
              open={openDropdown === "Format"}
              onOpen={() => openDropDown("Format")}
              onToggle={(open) => setOpenDropdown(open ? "Format" : null)}
              onChange={setFilter("format")}
              options={formatOptions}
            />
            <FilterSelect
              label="Airing Status"
              dropdownTitle="Airing"
              value={filters.airing}
              open={openDropdown === "Airing"}
              onOpen={() => openDropDown("Airing")}
              onToggle={(open) => setOpenDropdown(open ? "Airing" : null)}
              onChange={setFilter("airing")}
              options={airingOptions}
            />
          </div>
        </div>
        <div>
          {!isFetching ? (
            <div className="landing-section">
              {results ? (
                <div className="results">{renderedAnime}</div>
              ) : (
                <h2 className="no-results">No Results</h2>
              )}
            </div>
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
