import React from 'react'

export default function Footer() {
  return (
    <div className=' container mx-auto max-w-6xl lg:py-20 md:py-20 py-10 px-5'>
      <p className= 'text-gray-300 mb-5'>Questions? Call <span className=' underline'>000-800-919-1694</span></p>
      <div className="text-gray-300 flex flex-wrap justify-between mb-4 cursor-pointer">
        <div className="1">
          <ul className='underline'>
            <li className='mb-3'>FAQ</li>
            <li className='mb-3'>Investor Relations</li>
            <li className='mb-3'>Privacy</li>
            <li className='mb-3'>Speed Test</li>
          </ul>
        </div>
        <div className="2">
          <ul className='underline'>
            <li className='mb-3'>Help Centre</li>
            <li className='mb-3'>Jobs</li>
            <li className='mb-3'>Cookie Preferences</li>
            <li className='mb-3'>Legal Notices</li>
          </ul>
        </div>
        <div className="3">
          <ul className='underline'>
            <li className='mb-3'>Account</li>
            <li className='mb-3'>Ways to Watch</li>
            <li className='mb-3'>Corporate Information</li>
            <li className='mb-3'>Only on Netflix</li>
          </ul>
        </div>
        <div className="4">
          <ul className='underline'>
            <li className='mb-3'>Media Centre</li>
            <li className='mb-3'>Terms of Use</li>
            <li className='mb-3'>Contact Us</li>
          </ul>
        </div>
      </div>
      <div
        className=" bg-[#111112] text-white lg:px-5 md:px-5 px-3 py-1 rounded-md border-[1.5px] border-gray-600 hover:ring-2 hover:ring-gray-200 opacity-80 w-28 mb-5 ">
        <select
          name=""
          id=""
          className=' bg-transparent outline-none'
        >
          <option value="English">English</option>
          <option value="हिन्दी">हिन्दी</option>
        </select>
      </div>
      <p className='text-gray-300'>Netflix India</p>
    </div>
  )
}
