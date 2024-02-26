import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contactus";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<div>Error Page</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
