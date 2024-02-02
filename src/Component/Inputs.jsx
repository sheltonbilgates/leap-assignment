import React from "react";

const Inputs = () => {
  return (
    <div className="pt-12">
      <div >
        <form action="" className="flex justify-between pl-12 pr-16 flex-wrap">
          <div className='flex flex-col text-[#F1FAEE] text-center'>
            <label htmlFor="title" className="text-xl">Task Title</label>
            <input type="" id="title" placeholder="Enter Task Title" className="w-72 h-8 p-2 rounded-xl "/>
          </div>
          <div className='flex flex-col text-[#F1FAEE] text-center'>
            <label htmlFor="description" className="text-xl">Task Description</label>
            <textarea name="" id="" cols="40" rows="1" placeholder="Enter Description" className="rounded-xl p-2"></textarea>
          </div>
          <div className='flex flex-col text-[#F1FAEE] text-center pr-12'>
            <label htmlFor="due" className="text-xl">Due By</label>
            <input type="date" id="due" placeholder="Enter Date" className="rounded-xl p-2 text-gray-400" />
          </div>
        </form>
      </div>
      <hr className='border mt-4 border-gray-300'/>
    </div>
  );
};

export default Inputs;
