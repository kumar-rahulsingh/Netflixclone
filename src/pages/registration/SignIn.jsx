import React from 'react'
import { Link } from 'react-router-dom'

export default function SignIn() {
    return (
        <div>
            <div className=''
                style={{
                    background: "linear-gradient(80deg, black, transparent), url(https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg)"
                }}>
                <div className="flex justify-center items-center h-screen">
                    <div className="bg-black bg-opacity-75 text-white 
                    p-20 rounded-lg">
                        <div className="">
                            <h2 className=' text-3xl font-bold mb-7'>Sign In</h2>
                            <div className=" mb-7">
                                <input
                                    type="email"
                                    placeholder='Email or phone number'
                                    className='w-full px-3 py-3 rounded-md bg-[#333333] outline-none '
                                />
                            </div>

                            <div className=" mb-7">
                                <input
                                    type="password"
                                    placeholder='Password'
                                    className='w-full px-3 py-3 rounded-md bg-[#333333] outline-none '
                                />
                            </div>
                            <div className="flex justify-center mb-2">
                                <button 
                                className='bg-[#e50815] w-full py-3 rounded-md '>
                                    Signin
                                </button>
                            </div>
                            <div className=" mb-10">
                                <div className="flex justify-between">
                                    <div className="flex items-center gap-1">
                                        <input type="checkbox"
                                            className='w-4 h-4'
                                        />
                                        <label className=' text-gray-400 font-light text-sm'>Remember</label>
                                    </div>
                                    <div className="">
                                        <p className='font-light text-sm text-gray-400'>Need help?</p>
                                    </div>
                                </div>
                            </div>

                            <div className=" mb-5">
                                <span className='font-light text-gray-400'>
                                    New to Netflix? 
                                </span>
                                <Link to={'/'}>
                                <span className=" font-light hover:underline">
                                    {" "} Sign up now.
                                </span>
                                </Link>
                            </div>

                            <div className=" mb-20">
                                <p className=' text-xs text-gray-400'>This page is protected by Google reCAPTCHA to <br /> ensure you're not a bot. <span className=' text-blue-600'>Learn more.</span></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
