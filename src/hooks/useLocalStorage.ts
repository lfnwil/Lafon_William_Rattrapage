import { useState } from "react";

// La vérification optionnelle protège contre des données sauvegardées invalides.
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  validate?: (value: unknown) => value is T,
): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = localStorage.getItem(key);
      if (stored === null) return initialValue;
      const parsed: unknown = JSON.parse(stored);
      return !validate || validate(parsed) ? (parsed as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  function saveValue(nextValue: T): void {
    // Écrire avant de modifier l'écran : en cas d'échec, le contexte affiche l'erreur.
    localStorage.setItem(key, JSON.stringify(nextValue));
    setValue(nextValue);
  }

  return [value, saveValue];
}
