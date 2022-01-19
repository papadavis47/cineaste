import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Signup from "./pages/Signup.js";
import Login from "./pages/Login.js";
import Forms from "./pages/Forms.js";
import Profile from "./pages/Profile.js";
import CreateList from "./pages/CreateList.js";
import CreateListItem from "./pages/CreateListItem.js";
import NotFound from "./pages/NotFound.js";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const logout = () => {
    setUserLoggedIn(false);
  };

  const login = () => {
    setUserLoggedIn(true);
  };

  return (
    <Router>
      <NavBar userLoggedIn={userLoggedIn} logout={logout} login={login} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create-list' element={<CreateList />} />
        <Route path='/create-list-item' element={<CreateListItem />} />
        <Route path='/forms' element={<Forms />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
