import "./App.css";
import { Home } from "./components/home";
import { Admin } from "./components/admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App  bg-slate-900">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/administrater" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
