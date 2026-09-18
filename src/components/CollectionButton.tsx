import { useCollection } from "../hooks/useCollection";
import type { Recipe } from "../types/recipe";

interface CollectionButtonProps {
  recipe: Recipe;
}

export function CollectionButton({ recipe }: CollectionButtonProps) {
  const { entries, addRecipe, removeRecipe } = useCollection();
  const isSaved = entries.some((entry) => entry.recipe.id === recipe.id);
  return (
    <button
      type="button"
      className={isSaved ? "secondary" : ""}
      aria-label={`${isSaved ? "Retirer" : "Ajouter"} ${recipe.title} ${isSaved ? "de" : "à"} ma collection`}
      onClick={() => (isSaved ? removeRecipe(recipe.id) : addRecipe(recipe))}
    >
      {isSaved ? "✓ Retirer" : "+ Ajouter"}
    </button>
  );
}
