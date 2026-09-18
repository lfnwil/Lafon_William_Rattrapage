import type { CollectionEntry, Statut } from "../types/recipe";

export const STATUS_LABELS: Record<Statut, string> = {
  a_decouvrir: "À découvrir",
  en_cours: "En cours",
  termine: "Terminée",
};

export const STATUSES: Statut[] = ["a_decouvrir", "en_cours", "termine"];

export function averageRating(entries: CollectionEntry[]): number {
  if (entries.length === 0) return 0;
  return entries.reduce((sum, entry) => sum + entry.rating, 0) / entries.length;
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("fr-FR", { dateStyle: "medium" }).format(
    new Date(date),
  );
}
