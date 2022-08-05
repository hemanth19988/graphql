import "./App.css";
import CharactersList from "./pages/CharactersList";
import Routing from "./Routing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import INdex from "./pages/INdex";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/:id/index" element={<INdex />} />
          <Route path="/" element={<CharactersList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
