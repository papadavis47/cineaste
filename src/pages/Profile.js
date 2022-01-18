import React from "react";
import MovieList from "../components/MovieList/MovieList.js";
import { lists } from "../data/data.js";

const Profile = () => {
  return (
    <div className='flex flex-col items-center'>
      {lists.map((list) => {
        return <MovieList key={list.id} {...list} />;
      })}
    </div>
  );
};

export default Profile;
