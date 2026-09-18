import type { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";
import type { CollectionEntry } from "../types/recipe";
import { formatDate, STATUSES, STATUS_LABELS } from "../utils/collection";
import { isStatus } from "../utils/validation";

interface CollectionEntryCardProps {
  entry: CollectionEntry;
}

export function CollectionEntryCard({ entry }: CollectionEntryCardProps) {
  const { updateEntry, removeRecipe } = useCollection();
  const { recipe } = entry;

  function changeStatus(event: ChangeEvent<HTMLSelectElement>): void {
    if (isStatus(event.target.value))
      updateEntry(recipe.id, { status: event.target.value });
  }

  function changeRating(event: ChangeEvent<HTMLSelectElement>): void {
    updateEntry(recipe.id, { rating: Number(event.target.value) });
  }

  function changeComment(event: ChangeEvent<HTMLTextAreaElement>): void {
    updateEntry(recipe.id, { comment: event.target.value });
  }

  return (
    <article className="collection-entry">
      <img
        src={recipe.image}
        alt={recipe.title}
        width="160"
        height="160"
        loading="lazy"
      />
      <div className="entry-body">
        <div className="entry-heading">
          <div>
            <h2>
              <Link to={`/item/${recipe.id}`}>{recipe.title}</Link>
            </h2>
            <p className="metadata">Ajoutée le {formatDate(entry.addedAt)}</p>
          </div>
          <span className="badge">{STATUS_LABELS[entry.status]}</span>
        </div>
        <div className="entry-fields">
          <label>
            Statut
            <select value={entry.status} onChange={changeStatus}>
              {STATUSES.map((status) => (
                <option key={status} value={status}>
                  {STATUS_LABELS[status]}
                </option>
              ))}
            </select>
          </label>
          <label>
            Note
            <select value={entry.rating} onChange={changeRating}>
              {[1, 2, 3, 4, 5].map((rating) => (
                <option key={rating} value={rating}>
                  {rating} / 5
                </option>
              ))}
            </select>
          </label>
        </div>
        <label>
          Commentaire
          <textarea
            value={entry.comment}
            onChange={changeComment}
            placeholder="Vos notes personnelles…"
          />
        </label>
        <button
          type="button"
          className="danger"
          onClick={() => removeRecipe(recipe.id)}
        >
          Supprimer
        </button>
      </div>
    </article>
  );
}
