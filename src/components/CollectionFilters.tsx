import type { ChangeEvent } from "react";
import type { SortOrder, StatusFilter } from "../utils/filters";
import { isSortOrder } from "../utils/filters";
import { isStatus } from "../utils/validation";
import { STATUSES, STATUS_LABELS } from "../utils/collection";

interface CollectionFiltersProps {
  query: string;
  status: StatusFilter;
  sort: SortOrder;
  onQueryChange: (value: string) => void;
  onStatusChange: (value: StatusFilter) => void;
  onSortChange: (value: SortOrder) => void;
}

export function CollectionFilters({
  query,
  status,
  sort,
  onQueryChange,
  onStatusChange,
  onSortChange,
}: CollectionFiltersProps) {
  function changeStatus(event: ChangeEvent<HTMLSelectElement>): void {
    const value = event.target.value;
    if (value === "all" || isStatus(value)) onStatusChange(value);
  }

  function changeSort(event: ChangeEvent<HTMLSelectElement>): void {
    if (isSortOrder(event.target.value)) onSortChange(event.target.value);
  }

  return (
    <div className="filters">
      <label>
        Rechercher par titre
        <input
          type="search"
          value={query}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onQueryChange(event.target.value)
          }
          placeholder="Nom de la recette"
        />
      </label>
      <label>
        Filtrer par statut
        <select value={status} onChange={changeStatus}>
          <option value="all">Tous les statuts</option>
          {STATUSES.map((value) => (
            <option key={value} value={value}>
              {STATUS_LABELS[value]}
            </option>
          ))}
        </select>
      </label>
      <label>
        Trier par
        <select value={sort} onChange={changeSort}>
          <option value="newest">Plus récentes</option>
          <option value="oldest">Plus anciennes</option>
          <option value="rating_desc">Meilleures notes</option>
          <option value="rating_asc">Notes croissantes</option>
        </select>
      </label>
    </div>
  );
}
