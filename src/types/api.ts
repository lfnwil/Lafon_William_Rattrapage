// Champs utiles de TheMealDB. Les ingrédients sont numérotés de 1 à 20.
export interface MealApi {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string | null;
  strArea: string | null;
  strInstructions: string | null;
  [key: `strIngredient${number}`]: string | null | undefined;
  [key: `strMeasure${number}`]: string | null | undefined;
}

export interface MealApiResponse {
  meals: MealApi[] | null;
}
