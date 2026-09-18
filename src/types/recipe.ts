export interface Ingredient {
  name: string;
  quantity: string;
}

// Les composants utilisent ce format, avec les mocks comme avec l'API.
export interface Recipe {
  id: string;
  title: string;
  image: string;
  category: string;
  origin: string;
  instructions: string;
  ingredients: Ingredient[];
}

export type Statut = "a_decouvrir" | "en_cours" | "termine";

export interface CollectionEntry {
  recipe: Recipe;
  status: Statut;
  rating: number;
  comment: string;
  addedAt: string;
}

export type EntryChanges = Pick<
  CollectionEntry,
  "status" | "rating" | "comment"
>;
