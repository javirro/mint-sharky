import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MintHome from "./routes/MintHome/MintHome";

function App() {
  return (
    <BrowserRouter>
      <section className="app">
        <Routes>
          <Route path="/" element={<MintHome />} />
          <Route path="/about" element={<div />} />
          <Route path="/contact" element={<div />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
