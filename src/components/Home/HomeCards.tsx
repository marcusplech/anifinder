"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import Card, { CardAttributes } from "./Card";
import { HomeCardsSkeleton } from "@/components/Layout/AnimeGridSkeleton";
import { getAiringAnime, getComingAnime, getRatedAnime, getTrendingAnime } from "@/lib/KitsuClient";
import { KitsuResource } from "@/lib/KitsuTypes";
import { queryKeys } from "@/lib/QueryKeys";
import { homeCardRailSections, homeListingShellClass, resultsGridClass } from "@/lib/ui";

const HomeCards = () => {
  const { data: trendingData, isLoading: isTrendingLoading } = useQuery({
    queryKey: queryKeys.trending,
    queryFn: getTrendingAnime,
  });
  const { data: airingData, isLoading: isAiringLoading } = useQuery({
    queryKey: queryKeys.airing,
    queryFn: getAiringAnime,
  });
  const { data: ratedData, isLoading: isRatedLoading } = useQuery({
    queryKey: queryKeys.rated,
    queryFn: getRatedAnime,
  });
  const { data: comingData, isLoading: isComingLoading } = useQuery({
    queryKey: queryKeys.coming,
    queryFn: getComingAnime,
  });

  const stateTrending: Array<KitsuResource<CardAttributes>> = trendingData?.data ?? [];
  const stateAiring: Array<KitsuResource<CardAttributes>> = airingData?.data ?? [];
  const stateRated: Array<KitsuResource<CardAttributes>> = ratedData?.data ?? [];
  const stateComing: Array<KitsuResource<CardAttributes>> = comingData?.data ?? [];
  const loading = isTrendingLoading || isAiringLoading || isRatedLoading || isComingLoading;

  const sections = [stateTrending, stateAiring, stateRated, stateComing] as const;

  return loading ? (
    <HomeCardsSkeleton />
  ) : (
    <div className="mt-8">
      <div className={homeListingShellClass}>
        {sections.map((items, i) => (
          <div key={homeCardRailSections[i].title} className="mb-14">
            <div
              className={`mb-5 flex items-end border-l-4 pb-0 pl-3.5 ${homeCardRailSections[i].accent} max-[1065px]:mb-5`}
            >
              <h3 className="m-0 cursor-pointer text-[13px] font-extrabold uppercase tracking-[0.1em] text-slate-500 transition-colors duration-200 hover:text-indigo-500">
                {homeCardRailSections[i].title}
              </h3>
            </div>
            <div className={resultsGridClass}>
              {items.map((data) => (
                <Card key={data.attributes?.slug} attributes={data.attributes} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCards;
