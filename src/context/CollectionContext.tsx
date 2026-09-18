import { createContext, useState } from "react";
import type { ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import type { CollectionEntry, EntryChanges, Recipe } from "../types/recipe";
import { isCollection } from "../utils/validation";
import { DeleteDialog } from "../components/DeleteDialog";

interface CollectionContextValue {
  entries: CollectionEntry[];
  error: string;
  addRecipe: (recipe: Recipe) => void;
  removeRecipe: (id: string) => void;
  updateEntry: (id: string, changes: Partial<EntryChanges>) => void;
}

export const CollectionContext = createContext<
  CollectionContextValue | undefined
>(undefined);

interface CollectionProviderProps {
  children: ReactNode;
}

export function CollectionProvider({ children }: CollectionProviderProps) {
  const [entries, setEntries] = useLocalStorage<CollectionEntry[]>(
    "ma-collection-recettes-v1",
    [],
    isCollection,
  );
  const [error, setError] = useState("");
  const [pendingRemoval, setPendingRemoval] = useState<CollectionEntry | null>(
    null,
  );

  function save(nextEntries: CollectionEntry[]): void {
    try {
      setEntries(nextEntries);
      setError("");
    } catch {
      setError(
        "Enregistrement impossible. Le stockage du navigateur est plein ou indisponible. Votre modification n’a pas été enregistrée.",
      );
    }
  }

  function addRecipe(recipe: Recipe): void {
    if (entries.some((entry) => entry.recipe.id === recipe.id)) return;
    save([
      ...entries,
      {
        recipe,
        status: "a_decouvrir",
        rating: 1,
        comment: "",
        addedAt: new Date().toISOString(),
      },
    ]);
  }

  function removeRecipe(id: string): void {
    setPendingRemoval(entries.find((item) => item.recipe.id === id) ?? null);
  }

  function confirmRemoval(): void {
    if (!pendingRemoval) return;
    save(entries.filter((item) => item.recipe.id !== pendingRemoval.recipe.id));
    setPendingRemoval(null);
  }

  function updateEntry(id: string, changes: Partial<EntryChanges>): void {
    save(
      entries.map((entry) =>
        entry.recipe.id === id ? { ...entry, ...changes } : entry,
      ),
    );
  }

  return (
    <CollectionContext.Provider
      value={{ entries, error, addRecipe, removeRecipe, updateEntry }}
    >
      {children}
      {pendingRemoval && (
        <DeleteDialog
          recipeTitle={pendingRemoval.recipe.title}
          onConfirm={confirmRemoval}
          onCancel={() => setPendingRemoval(null)}
        />
      )}
    </CollectionContext.Provider>
  );
}
