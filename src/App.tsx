import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { SearchPage } from "./pages/SearchPage";
import { CollectionPage } from "./pages/CollectionPage";
import { DetailPage } from "./pages/DetailPage";
import { StatisticsPage } from "./pages/StatisticsPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<SearchPage />} />
          <Route path="item/:id" element={<DetailPage />} />
          <Route path="collection" element={<CollectionPage />} />
          <Route path="statistiques" element={<StatisticsPage />} />
          <Route
            path="*"
            element={
              <div className="empty-state">
                <h1>Page introuvable</h1>
                <Link to="/">Retour à la recherche</Link>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
