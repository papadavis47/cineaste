import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/cinema_icon.png";

const NavBar = () => {
  return (
    <div className='flex items-center justify-between px-4 py-2 text-blue-100 bg-blue-900'>
      <Link to='/' className='inline'>
        <div className='flex items-center py-3 hover:text-blue-50'>
          <img src={logo} alt='logo' className='ml-3' />
          <h1 className='py-3 mt-2 ml-4 text-3xl font-bold'>Cineaste</h1>
        </div>
      </Link>
      <nav className='text-xl hover:text-blue-50'>
        <ul className='flex items-center px-4 mr-16'>
          <li className='px-3 mr-2'>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-3 mr-2'>
            <Link to='/about'>About</Link>
          </li>
          <li className='px-3 ml-2'>
            <Link to='/forms'>Forms</Link>
          </li>
          <li className='px-3 ml-2'>
            <Link to='/lists'>Lists</Link>
          </li>
          <li className='px-3 ml-2'>
            <Link to='/test'>Test</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
