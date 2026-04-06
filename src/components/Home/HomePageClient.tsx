"use client";

import { useState } from "react";
import Search from "./Search";
import HomeCards from "./HomeCards";
import { KitsuResource } from "@/lib/KitsuTypes";
import { CardAttributes } from "./Card";

const HomePageClient = () => {
  const [search, setSearch] = useState<Array<KitsuResource<CardAttributes>>>([]);
  return (
    <>
      <Search search={setSearch} />
      {search && !search.length ? <HomeCards /> : null}
    </>
  );
};

export default HomePageClient;
