import { PageTitle } from "../components/PageTitle";
import { useState } from "react";
import { useCollection } from "../hooks/useCollection";
import { CollectionEntryCard } from "../components/CollectionEntryCard";
import { CollectionFilters } from "../components/CollectionFilters";
import { filterAndSort } from "../utils/filters";
import type { SortOrder, StatusFilter } from "../utils/filters";
import { Link } from "react-router-dom";

export function CollectionPage() {
  const { entries } = useCollection();
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [sort, setSort] = useState<SortOrder>("newest");
  const visibleEntries = filterAndSort(entries, query, status, sort);
  return (
    <section id="collection">
      <PageTitle
        eyebrow="À GARDER SOUS LA MAIN"
        title="Ma collection"
        description="Vos recettes, vos notes et vos petits ajustements."
      />
      {entries.length === 0 ? (
        <div className="empty-state">
          <h2>Votre carnet attend ses premières recettes.</h2>
          <p>Ajoutez une recette depuis la recherche pour la retrouver ici.</p>
          <Link className="button" to="/">
            Découvrir les recettes
          </Link>
        </div>
      ) : (
        <>
          <CollectionFilters
            query={query}
            status={status}
            sort={sort}
            onQueryChange={setQuery}
            onStatusChange={setStatus}
            onSortChange={setSort}
          />
          <p className="hint" role="status">
            {visibleEntries.length} recette(s) affichée(s) sur {entries.length}.
            Les modifications sont enregistrées automatiquement.
          </p>
          <div className="collection-list">
            {visibleEntries.map((entry) => (
              <CollectionEntryCard key={entry.recipe.id} entry={entry} />
            ))}
          </div>
          {visibleEntries.length === 0 && (
            <div className="empty-state">
              <h2>Aucune recette ne correspond aux filtres.</h2>
              <p>Essayez un autre titre ou un autre statut.</p>
            </div>
          )}
        </>
      )}
    </section>
  );
}
