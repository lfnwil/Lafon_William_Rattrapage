import type {
  CollectionEntry,
  Ingredient,
  Recipe,
  Statut,
} from "../types/recipe";

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export function isStatus(value: unknown): value is Statut {
  return value === "a_decouvrir" || value === "en_cours" || value === "termine";
}

function isIngredient(value: unknown): value is Ingredient {
  return (
    isRecord(value) &&
    typeof value.name === "string" &&
    typeof value.quantity === "string"
  );
}

function isRecipe(value: unknown): value is Recipe {
  return (
    isRecord(value) &&
    typeof value.id === "string" &&
    typeof value.title === "string" &&
    typeof value.image === "string" &&
    typeof value.category === "string" &&
    typeof value.origin === "string" &&
    typeof value.instructions === "string" &&
    Array.isArray(value.ingredients) &&
    value.ingredients.every(isIngredient)
  );
}

function isEntry(value: unknown): value is CollectionEntry {
  return (
    isRecord(value) &&
    isRecipe(value.recipe) &&
    isStatus(value.status) &&
    typeof value.rating === "number" &&
    Number.isInteger(value.rating) &&
    value.rating >= 1 &&
    value.rating <= 5 &&
    typeof value.comment === "string" &&
    typeof value.addedAt === "string" &&
    Number.isFinite(Date.parse(value.addedAt))
  );
}

export function isCollection(value: unknown): value is CollectionEntry[] {
  if (!Array.isArray(value) || !value.every(isEntry)) return false;
  return new Set(value.map((entry) => entry.recipe.id)).size === value.length;
}
