import React from 'react'
import './community.css'
const community = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[30%]"></div>
      <div class="w-[30%] flex flex-col gap-4">
        <textarea
          class="w-full p-3 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-500"
          placeholder="subtle"
        ></textarea>
      </div>
      <div className="w-[30%]"></div>
    </div>
  )
}

export default community
