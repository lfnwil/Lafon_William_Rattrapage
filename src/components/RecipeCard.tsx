import type { Recipe } from "../types/recipe";
import { CollectionButton } from "./CollectionButton";
import { Link } from "react-router-dom";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className="recipe-card">
      <img
        src={recipe.image}
        alt={recipe.title}
        loading="lazy"
        width="480"
        height="320"
      />
      <div className="card-body">
        <p className="metadata">
          {recipe.category} · {recipe.origin}
        </p>
        <h3>{recipe.title}</h3>
        <div className="card-actions">
          <Link
            className="text-link"
            to={`/item/${recipe.id}`}
            aria-label={`Voir la recette ${recipe.title}`}
          >
            Voir la recette
          </Link>
          <CollectionButton recipe={recipe} />
        </div>
      </div>
    </article>
  );
}
