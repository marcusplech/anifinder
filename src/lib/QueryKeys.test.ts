import { describe, expect, it } from "vitest";
import { queryKeys } from "@/lib/QueryKeys";

describe("QueryKeys", () => {
  it("trending key is stable", () => {
    expect(queryKeys.trending).toEqual(["anime", "trending"]);
  });

  it("search key includes filter segments", () => {
    expect(queryKeys.search("a", "b", "c", "d", "e")).toEqual([
      "anime",
      "search",
      "a",
      "b",
      "c",
      "d",
      "e",
    ]);
  });
});
