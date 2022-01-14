// import MovieList from "./components/MovieList";
// import ListForm from "./components/ListForm";
// import Title from "./components/Title";
// import MovieForm from "./components/MovieForm/MovieForm.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Forms from "./pages/Forms.js";
import Test from "./pages/Test.js";
import Lists from "./pages/Lists.js";
import NotFound from "./pages/NotFound.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lists' element={<Lists />} />
        <Route path='/forms' element={<Forms />} />
        <Route path='/test' element={<Test />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
