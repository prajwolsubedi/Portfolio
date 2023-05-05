import Home from "../rotues/Home";
import Project from "../rotues/Project";
import Contact from "../rotues/Contact";
import Blogs from "../rotues/Blogs";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </>
  );
}

export default App;
