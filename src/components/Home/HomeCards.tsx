"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import Card, { CardAttributes } from "./Card";
import LoadingSpinner from "@/components/Layout/LoadingSpinner";
import { getAiringAnime, getComingAnime, getRatedAnime, getTrendingAnime } from "@/lib/KitsuClient";
import { KitsuResource } from "@/lib/KitsuTypes";
import { queryKeys } from "@/lib/QueryKeys";

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

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className="search-landing">
      <div className="container">
        <div className="landing-section">
          <div className="title-link">
            <h3>Trending Now</h3>
          </div>
          <div className="results">
            {stateTrending.map((data) => (
              <Card key={data.attributes?.slug} attributes={data.attributes} />
            ))}
          </div>
        </div>
        <div className="landing-section">
          <div className="title-link">
            <h3>Top Airing Anime</h3>
          </div>
          <div className="results">
            {stateAiring.map((data) => (
              <Card key={data.attributes.slug} attributes={data.attributes} />
            ))}
          </div>
        </div>
        <div className="landing-section">
          <div className="title-link">
            <h3>Highest Rated Anime</h3>
          </div>
          <div className="results">
            {stateRated.map((data) => (
              <Card key={data.attributes.slug} attributes={data.attributes} />
            ))}
          </div>
        </div>
        <div className="landing-section">
          <div className="title-link">
            <h3>Upcoming Anime</h3>
          </div>
          <div className="results">
            {stateComing.map((data) => (
              <Card key={data.attributes.slug} attributes={data.attributes} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
