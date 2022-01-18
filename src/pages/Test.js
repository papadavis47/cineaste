import React from "react";
import MovieForm from "../components/MovieForm/MovieForm.js";
import ListForm from "../components/ListForm/ListForm.js";

const Test = () => {
  return (
    <div className='flex flex-col items-center'>
      <MovieForm />
      <ListForm />
    </div>
  );
};

export default Test;
