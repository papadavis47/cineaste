import { useState, useEffect } from "react";

const ListForm = () => {
  return (
    <div className='w-1/2 p-8 text-white bg-blue-500 border-2 rounded-md'>
      <h3 className='text-3xl font-bold text-center'>Create a List of Films</h3>
      <form>
        <div className='flex flex-col mb-5'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            name='title'
            className='px-1 py-1 border text-grey-darkest"'
          />
        </div>
        <div className='flex flex-col mb-5'>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            name='description'
            id='description'
            className='px-1 py-1 border text-grey-darkest"'
          />
        </div>
        <button type='submit' className='w-full p-3 mt-3 bg-red-500 border-white rounded-md'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ListForm;
