// Import dependencies
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import "./App.css";

// Import pages
import WelcomePage from "./pages/WelcomePage";
import PreferencesPage from "./pages/PreferencesPage";
import SearchPage from "./pages/SearchPage";
import ResultsPage from "./pages/ResultsPage";
//import RecipePage from "./pages/RecipePage"

// Page function
function App() {
  // DOM return
  return (
    <div class="flex flex-col min-h-screen">
      <Router>
        <header class="bg-gray-800 text-white text-3xl p-2">
          <h2>kitchin</h2>
        </header>

        <main class="flex flex-col mb-auto items-center flex-grow bg-green-100">
          <Routes>
            <Route path="/" exact element={<WelcomePage />} />
            <Route path="/preferences" element={<PreferencesPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </main>

        <footer class="text-center bg-gray-300 p-0.5 ">
          <p>Galen Ciszek &copy; 2022</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
