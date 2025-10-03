import React from "react";

export default function Form() {
  return (
    <>
    <div className="flex items-center justify-center  py-10 ">
        <form className="flex flex-col  gap-4 bg-[#F1F3F4] p-6 rounded-3xl shadow-md w-[500px] ">
          <label className="font-medium text-gray-700">Enter your Name</label>
          <input name ="nam" 
            type="text"
            className="p-2 rounded-md border border-gray-300 bg-white"
          />
        <label className="font-medium text-gray-700">Enter your Number</label>
          <input name ="num"
            type=""
            className="p-2 rounded-md border border-gray-300 bg-white" required
          />

          <label className="font-medium text-gray-700">Enter your Email</label>
          <input
            type="" name ="ema"
            className="p-2 rounded-md border border-gray-300 bg-white"
          />
            <label className="font-medium text-gray-700">Enter your Message</label>
          <input
            type="" name ="mes"
            className="p-2 rounded-md border border-gray-300 bg-white row-span-4"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
    </div>
    
    </>
  );
}
