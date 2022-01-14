import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.js";
import Forms from "./pages/Forms.js";
import Test from "./pages/Test.js";
import Lists from "./pages/Lists.js";
import NotFound from "./pages/NotFound.js";

function App() {
  return (
    <Router>
      <nav>
        <ul className='flex'>
          <li className='ml-2'>
            <Link to='/'>Home</Link>
          </li>
          <li className='ml-2'>
            <Link to='/forms'>Forms</Link>
          </li>
          <li className='ml-2'>
            <Link to='/lists'>Lists</Link>
          </li>
          <li className='ml-2'>
            <Link to='/test'>Test</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lists' element={<Lists />} />
        <Route path='/forms' element={<Forms />} />
        <Route path='/test' element={<Test />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <footer>
        <p>this is my footer</p>
      </footer>
    </Router>
  );
}

export default App;
