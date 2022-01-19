import React from "react";

const Signup = () => {
  return (
    <div className='w-1/2 p-8 my-4 text-white bg-blue-500 border-2 rounded-md'>
      <h3 className='text-3xl font-bold text-center'>Sign Up</h3>
      <form>
        <div className='flex flex-col mb-5'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            name='username'
            className='px-1 py-1 border text-grey-darkest'
          />
        </div>
        <div className='flex flex-col mb-5'>
          <label htmlFor='description'>Password</label>
          <input
            type='text'
            name='password'
            id='password'
            className='px-1 py-1 border text-grey-darkest'
          />
        </div>
        <button type='submit' className='w-full p-3 mt-3 bg-red-500 border-white rounded-md'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
