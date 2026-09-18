import { NavLink, Outlet } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";

export function Layout() {
  const { error } = useCollection();
  return (
    <>
      <a className="skip-link" href="#main">
        Aller au contenu
      </a>
      <header className="site-header">
        <div className="header-inner">
          <NavLink className="brand" to="/">
            <span className="brand-mark" aria-hidden="true">
              M
            </span>{" "}
            Ma Collection <span className="brand-subtitle">RECETTES</span>
          </NavLink>
          <nav aria-label="Navigation principale">
            <NavLink to="/" end>
              Recherche
            </NavLink>
            <NavLink to="/collection">Ma collection</NavLink>
            <NavLink to="/statistiques">Statistiques</NavLink>
          </nav>
        </div>
      </header>
      <main id="main" className="container">
        {error && (
          <p className="notice error" role="alert">
            {error}
          </p>
        )}
        <Outlet />
      </main>
      <footer className="site-footer">
        <span>Ma Collection · Le plaisir de cuisiner.</span>
        <a href="https://www.themealdb.com" target="_blank" rel="noreferrer">
          Recettes : TheMealDB
        </a>
      </footer>
    </>
  );
}
