import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { PageTitle } from "../components/PageTitle";
import { RecipeCard } from "../components/RecipeCard";
import { RequestError } from "../components/RequestError";
import { useDebounce } from "../hooks/useDebounce";
import { searchRecipes } from "../services/recipes";
import type { Recipe } from "../types/recipe";

export function SearchPage() {
  const [params, setParams] = useSearchParams();
  const query = params.get("q") ?? "";
  const debouncedQuery = useDebounce(query.trim());
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const waiting = query.trim() !== debouncedQuery;

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(false);
    searchRecipes(debouncedQuery, controller.signal)
      .then((result) => {
        if (!controller.signal.aborted) setRecipes(result);
      })
      .catch(() => {
        if (!controller.signal.aborted) setError(true);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    // L'ancienne réponse ne peut pas écraser une recherche plus récente.
    return () => controller.abort();
  }, [debouncedQuery, attempt]);

  function changeQuery(event: ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;
    setParams(value ? { q: value } : {}, { replace: true });
  }

  return (
    <section>
      <PageTitle
        eyebrow="LE CARNET DE CUISINE"
        title="Qu’est-ce qu’on cuisine ?"
        description="Trouvez une recette et gardez-la pour votre prochain repas."
      />
      <div className="search-panel">
        <label htmlFor="recipe-search">Rechercher une recette</label>
        <input
          id="recipe-search"
          type="search"
          value={query}
          onChange={changeQuery}
          placeholder="Par exemple : chicken, pasta, cake…"
          aria-describedby="search-hint"
        />
        <p id="search-hint" className="hint">
          Les recettes sont en anglais. Recherchez leur nom en anglais.
        </p>
      </div>
      {loading || waiting ? (
        <p className="notice" role="status">
          Chargement des recettes…
        </p>
      ) : error ? (
        <RequestError onRetry={() => setAttempt(attempt + 1)} />
      ) : (
        <>
          <h2 className="section-heading">
            {debouncedQuery
              ? `Résultats pour « ${debouncedQuery} »`
              : "Quelques idées à découvrir"}{" "}
            <span className="result-count">{recipes.length}</span>
          </h2>
          {recipes.length === 0 ? (
            <div className="empty-state" role="status">
              <h2>Aucune recette trouvée.</h2>
              <p>
                Essayez un autre nom en anglais, comme « chicken » ou « cake ».
              </p>
            </div>
          ) : (
            <div className="recipe-grid">
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}
