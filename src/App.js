import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Support from "./components/support";
import Pd1 from "./components/products-detail/p-d-1";
import Pd2 from "./components/products-detail/p-d-2";
import Pd3 from "./components/products-detail/p-d-3";
import Pd4 from "./components/products-detail/p-d-4";
import Pd5 from "./components/products-detail/p-d-5";
import Pd6 from "./components/products-detail/p-d-6";
import Pd7 from "./components/products-detail/p-d-7";
import Pd8 from "./components/products-detail/p-d-8";
import Pd9 from "./components/products-detail/p-d-9";
import Pd10 from "./components/products-detail/p-d-10";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/p-d-1" element={<Pd1 />} />
        <Route path="/p-d-2" element={<Pd2 />} />
        <Route path="/p-d-3" element={<Pd3 />} />
        <Route path="/p-d-4" element={<Pd4 />} />
        <Route path="/p-d-5" element={<Pd5 />} />
        <Route path="/p-d-6" element={<Pd6 />} />
        <Route path="/p-d-7" element={<Pd7 />} />
        <Route path="/p-d-8" element={<Pd8 />} />
        <Route path="/p-d-9" element={<Pd9 />} />
        <Route path="/p-d-10" element={<Pd10 />} />
      </Routes>
    </Router>
  );
}

export default App;