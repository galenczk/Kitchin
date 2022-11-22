// Import dependencies
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

// Import pages
import WelcomePage from "./pages/WelcomePage";
import PreferencesPage from "./pages/PreferencesPage";
import SearchPage from "./pages/SearchPage";
import ResultsPage from "./pages/ResultsPage";
//import RecipePage from "./pages/RecipePage"

// Page function
function App() {
  const [imageNumber, setImageNumber] = useState(null);
   
  useEffect(() => {
    async function callRNG() {
      const response = axios.get("https://testmicro.vercel.app/")
      let number = (await response).data
      number = number % 10
      setImageNumber(await number)
      console.log(await number)
    }
    callRNG()
  }, []);

  // DOM return
  
  return (
    <div class="flex flex-col min-h-screen">
      <Router>
        <header class="bg-slate-800 text-white text-3xl p-2">
          <h2>Kitchin</h2>
        </header>

          <main className={`bg-${imageNumber} flex flex-col mb-auto items-center flex-grow`}>
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
