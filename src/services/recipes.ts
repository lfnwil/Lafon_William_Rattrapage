import type { MealApi, MealApiResponse } from "../types/api";
import type { Ingredient, Recipe } from "../types/recipe";
import { isRecord } from "../utils/validation";

const API_URL = "https://www.themealdb.com/api/json/v1/1";

function isNullableText(value: unknown): value is string | null {
  return typeof value === "string" || value === null;
}

function isMeal(value: unknown): value is MealApi {
  if (
    !isRecord(value) ||
    typeof value.idMeal !== "string" ||
    typeof value.strMeal !== "string" ||
    typeof value.strMealThumb !== "string" ||
    !isNullableText(value.strCategory) ||
    !isNullableText(value.strArea) ||
    !isNullableText(value.strInstructions)
  )
    return false;
  for (let position = 1; position <= 20; position++) {
    const ingredient = value[`strIngredient${position}`];
    const measure = value[`strMeasure${position}`];
    if (ingredient !== undefined && !isNullableText(ingredient)) return false;
    if (measure !== undefined && !isNullableText(measure)) return false;
  }
  return true;
}

function isResponse(value: unknown): value is MealApiResponse {
  return (
    isRecord(value) &&
    (value.meals === null ||
      (Array.isArray(value.meals) && value.meals.every(isMeal)))
  );
}

export function normalizeMeal(meal: MealApi): Recipe {
  const ingredients: Ingredient[] = [];
  for (let position = 1; position <= 20; position++) {
    const name = meal[`strIngredient${position}`]?.trim();
    const quantity = meal[`strMeasure${position}`]?.trim() ?? "";
    if (!name) continue;
    const existing = ingredients.find((ingredient) => ingredient.name === name);
    if (existing)
      existing.quantity = [existing.quantity, quantity]
        .filter(Boolean)
        .join(" + ");
    else ingredients.push({ name, quantity });
  }
  return {
    id: meal.idMeal,
    title: meal.strMeal,
    image: meal.strMealThumb,
    category: meal.strCategory || "Autre",
    origin: meal.strArea || "Origine non précisée",
    instructions: meal.strInstructions || "Aucune instruction disponible.",
    ingredients,
  };
}

async function requestRecipes(
  endpoint: string,
  signal: AbortSignal,
): Promise<Recipe[]> {
  // Annuler les anciennes recherches et limiter l'attente à 15 secondes.
  const controller = new AbortController();
  const cancel = () => controller.abort();
  signal.addEventListener("abort", cancel, { once: true });
  if (signal.aborted) cancel();
  const timer = setTimeout(cancel, 15000);
  try {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`Erreur HTTP ${response.status}`);
    const data: unknown = await response.json();
    if (!isResponse(data)) throw new Error("Format de réponse inattendu.");
    return (data.meals ?? []).map(normalizeMeal);
  } finally {
    clearTimeout(timer);
    signal.removeEventListener("abort", cancel);
  }
}

export function searchRecipes(
  query: string,
  signal: AbortSignal,
): Promise<Recipe[]> {
  return requestRecipes(`search.php?s=${encodeURIComponent(query)}`, signal);
}

export async function getRecipe(
  id: string,
  signal: AbortSignal,
): Promise<Recipe | null> {
  if (!/^\d+$/.test(id)) return null;
  const recipes = await requestRecipes(
    `lookup.php?i=${encodeURIComponent(id)}`,
    signal,
  );
  return recipes[0] ?? null;
}
