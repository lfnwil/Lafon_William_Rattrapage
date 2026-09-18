import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CollectionButton } from "../components/CollectionButton";
import { RequestError } from "../components/RequestError";
import { getRecipe } from "../services/recipes";
import type { Recipe } from "../types/recipe";

export function DetailPage() {
  const { id = "" } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(false);
    getRecipe(id, controller.signal)
      .then((result) => {
        if (!controller.signal.aborted) setRecipe(result);
      })
      .catch(() => {
        if (!controller.signal.aborted) setError(true);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, [id, attempt]);

  return (
    <section>
      <Link className="text-link" to="/">
        ← Retour à la recherche
      </Link>
      {loading ? (
        <p className="notice" role="status">
          Chargement de la recette…
        </p>
      ) : error ? (
        <RequestError onRetry={() => setAttempt(attempt + 1)} />
      ) : !recipe ? (
        <div className="empty-state">
          <h1>Recette introuvable</h1>
          <p>Cette recette n’existe pas ou n’est plus disponible.</p>
        </div>
      ) : (
        <>
          <div className="detail-header">
            <img
              src={recipe.image}
              alt={recipe.title}
              width="600"
              height="450"
            />
            <div>
              <p className="eyebrow">
                {recipe.category} · {recipe.origin}
              </p>
              <h1>{recipe.title}</h1>
              <p className="muted">Une recette à garder dans votre carnet.</p>
              <CollectionButton recipe={recipe} />
            </div>
          </div>
          <div className="detail-content">
            <aside className="ingredients">
              <h2>Ingrédients</h2>
              <ul>
                {recipe.ingredients.map((ingredient) => (
                  <li key={ingredient.name}>
                    <strong>{ingredient.quantity}</strong> {ingredient.name}
                  </li>
                ))}
              </ul>
              {recipe.ingredients.length === 0 && (
                <p>Aucun ingrédient renseigné.</p>
              )}
            </aside>
            <div>
              <h2>Préparation</h2>
              <p className="instructions">{recipe.instructions}</p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
