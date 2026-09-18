import { useEffect, useRef } from "react";
import type { SyntheticEvent } from "react";

interface DeleteDialogProps {
  recipeTitle: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function DeleteDialog({
  recipeTitle,
  onConfirm,
  onCancel,
}: DeleteDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.showModal();
    return () => dialog?.close();
  }, []);

  function cancel(event: SyntheticEvent<HTMLDialogElement>): void {
    event.preventDefault();
    onCancel();
  }

  return (
    <dialog
      ref={dialogRef}
      onCancel={cancel}
      aria-labelledby="delete-title"
      aria-describedby="delete-description"
    >
      <h2 id="delete-title">Supprimer cette recette ?</h2>
      <p id="delete-description">
        « {recipeTitle} » sera retirée de votre collection, avec votre note et
        votre commentaire.
      </p>
      <div className="dialog-actions">
        <button
          type="button"
          className="secondary"
          onClick={onCancel}
          autoFocus
        >
          Annuler
        </button>
        <button type="button" onClick={onConfirm}>
          Confirmer la suppression
        </button>
      </div>
    </dialog>
  );
}
