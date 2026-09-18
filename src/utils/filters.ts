import type { CollectionEntry, Statut } from "../types/recipe";

export type StatusFilter = Statut | "all";
export type SortOrder = "newest" | "oldest" | "rating_desc" | "rating_asc";

export function isSortOrder(value: string): value is SortOrder {
  return ["newest", "oldest", "rating_desc", "rating_asc"].includes(value);
}

export function filterAndSort(
  entries: CollectionEntry[],
  query: string,
  status: StatusFilter,
  sort: SortOrder,
): CollectionEntry[] {
  const search = query.trim().toLocaleLowerCase();
  const filtered = entries.filter(
    (entry) =>
      (status === "all" || entry.status === status) &&
      entry.recipe.title.toLocaleLowerCase().includes(search),
  );
  return filtered.sort((a, b) => {
    if (sort === "rating_desc") return b.rating - a.rating;
    if (sort === "rating_asc") return a.rating - b.rating;
    const difference = Date.parse(b.addedAt) - Date.parse(a.addedAt);
    return sort === "newest" ? difference : -difference;
  });
}
