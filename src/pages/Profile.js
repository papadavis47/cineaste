import { useState } from "react";
import { Link } from "react-router-dom";
import MovieList from "../components/MovieList/MovieList.js";
import CreateBtn from "../components/CreateBtn/CreateBtn.js";
import { listsData } from "../data/data.js";

const Profile = () => {
  const [lists, setLists] = useState([...listsData]);
  return (
    <>
      <div>
        <Link to='/create-list'>
          <CreateBtn text='Create New List' />
        </Link>
      </div>
      <div className='flex flex-col items-center'>
        {lists.map((list) => {
          return <MovieList key={list.id} {...list} />;
        })}
      </div>
    </>
  );
};

export default Profile;
