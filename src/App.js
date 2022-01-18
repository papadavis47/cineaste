import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Forms from "./pages/Forms.js";
import Test from "./pages/Test.js";
import Lists from "./pages/Lists.js";
import NotFound from "./pages/NotFound.js";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/lists' element={<Lists />} />
        <Route path='/forms' element={<Forms />} />
        <Route path='/test' element={<Test />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
