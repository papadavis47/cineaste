import { useState } from "react";
import MovieList from "../components/MovieList/MovieList.js";
import { listsData } from "../data/data.js";

const Profile = () => {
  const [lists, setLists] = useState([...listsData]);
  return (
    <div className='flex flex-col items-center'>
      {lists.map((list) => {
        return <MovieList key={list.id} {...list} />;
      })}
    </div>
  );
};

export default Profile;
