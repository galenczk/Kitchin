// Import dependencies.
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import pages.
import WelcomePage from "./pages/WelcomePage";
import PreferencesPage from "./pages/PreferencesPage";
import SearchPage from "./pages/SearchPage";
import ResultsPage from "./pages/ResultsPage"
//import RecipePage from "./pages/RecipePage"

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h2>kitchin</h2>
        </header>

        <main className="App-main">
          <Routes>
            <Route path="/" exact element={<WelcomePage />} />
            <Route path="/preferences" element={<PreferencesPage />} />
            <Route path="/search" element={<SearchPage />}/>
            <Route path="/results" element={<ResultsPage />}/>
          </Routes>
        </main>

        <footer>
          <p>Galen Ciszek &copy; 2022</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
