import { PageTitle } from "../components/PageTitle";
import { useCollection } from "../hooks/useCollection";
import { averageRating, STATUSES, STATUS_LABELS } from "../utils/collection";

export function StatisticsPage() {
  const { entries } = useCollection();
  const average = averageRating(entries).toLocaleString("fr-FR", {
    maximumFractionDigits: 1,
  });
  return (
    <section id="statistiques">
      <PageTitle
        eyebrow="VOTRE COLLECTION EN UN COUP D’ŒIL"
        title="Statistiques"
        description="Suivez vos découvertes en cuisine."
      />
      <div className="stat-grid">
        <article className="stat-card">
          <p>Recettes enregistrées</p>
          <strong>{entries.length}</strong>
        </article>
        <article className="stat-card">
          <p>Note moyenne</p>
          <strong>
            {entries.length ? average : "—"} <small>/ 5</small>
          </strong>
        </article>
      </div>
      <div className="chart">
        <h2>Répartition par statut</h2>
        {STATUSES.map((status) => {
          const count = entries.filter(
            (entry) => entry.status === status,
          ).length;
          const percentage = entries.length
            ? Math.round((count / entries.length) * 100)
            : 0;
          return (
            <div key={status} className="chart-row">
              <p className="chart-label">
                <span>{STATUS_LABELS[status]}</span>
                <strong>
                  {count} · {percentage} %
                </strong>
              </p>
              <div className="bar-track" aria-hidden="true">
                <div className="bar-fill" style={{ width: `${percentage}%` }} />
              </div>
            </div>
          );
        })}
      </div>
      {entries.length === 0 && (
        <p className="notice">
          Ajoutez votre première recette pour commencer à suivre votre
          collection.
        </p>
      )}
    </section>
  );
}
