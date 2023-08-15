import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

import "./App.css";
import AnimatedRoute from "./components/AnimatedRoute";

function App() {
  return (
    <div className="py-10 px12 lg:px-40 sm:px-10 overflow-hidden">
      <BrowserRouter>
        <Navbar />
        <AnimatedRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
