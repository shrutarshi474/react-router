import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="contact" element={<div>Contact page</div>}></Route>
        <Route path="*" element={<div>Error Page</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
