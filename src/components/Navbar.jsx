import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className=''>
            <div className="flex justify-between lg:justify-around md:justify-around items-center
             lg:py-5 md:py-5 py-5 px-5 lg:px-0 md:px-0 lg:mb-28 md:mb-28 mb-10">
                <div className="left">
                    <div className="netflix_logo">
                        <img
                            className=' w-28 lg:w-44 md:w-44'
                            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                            alt="logo"
                        />
                    </div>
                </div>

                <div className="right">
                    <div className="flex items-center ">
                        <div className=" bg-[#111112] text-white mx-4 
                        lg:px-5 md:px-5 px-3 py-1 rounded-md border-[1.5px] border-gray-600 hover:ring-2 hover:ring-gray-200 opacity-80 ">
                            <select
                                name=""
                                id="" 
                                className=' bg-transparent outline-none'
                                >
                                <option value="English">English</option>
                                <option value="हिन्दी">हिन्दी</option>
                            </select>
                        </div>

                        <Link to={'/signin'}>
                        <button
                            className=' bg-[#e50815] hover:bg-[#d80c1a] text-white px-5 py-1.5 rounded-lg font-bold'>
                            Sign In
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
