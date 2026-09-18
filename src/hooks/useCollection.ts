import { useContext } from "react";
import { CollectionContext } from "../context/CollectionContext";

export function useCollection() {
  const context = useContext(CollectionContext);
  if (!context)
    throw new Error("useCollection doit être utilisé dans CollectionProvider.");
  return context;
}
