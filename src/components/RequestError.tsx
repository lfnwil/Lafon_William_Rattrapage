interface RequestErrorProps {
  onRetry: () => void;
}

export function RequestError({ onRetry }: RequestErrorProps) {
  return (
    <div className="notice error" role="alert">
      <h2>Impossible de charger les recettes.</h2>
      <p>
        Vérifiez votre connexion. Le service peut aussi être temporairement
        indisponible.
      </p>
      <button type="button" onClick={onRetry}>
        Réessayer
      </button>
    </div>
  );
}
