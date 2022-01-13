import { useState, useEffect } from "react";

const ListForm = () => {
  return (
    <>
      <h3 className='text-center'>Create a List</h3>
      <form>
        <div className='flex flex-col mb-4'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            name='title'
            className='px-1 py-1 border text-grey-darkest"'
          />
        </div>
        <div className='flex flex-col mb-4'>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            name='description'
            id='description'
            className='px-1 py-1 border text-grey-darkest"'
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default ListForm;
