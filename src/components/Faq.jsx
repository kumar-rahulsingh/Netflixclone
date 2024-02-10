import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

export default function Faq({ title, desc }) {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className="container mx-auto lg:max-w-6xl md:max-w-6xl px-5 text-white">
                <div className="">
                    <div className=' mb-2'>
                        <div className="top bg-[#2d2d2d] hover:bg-[#414141] flex justify-between items-center px-5 py-4 cursor-pointer"
                            onClick={() => setOpen(!open)}
                        >
                            <div className="left">
                                <h1 className=' lg:text-2xl md:text-2xl text-xl'>
                                    {title}
                                </h1>
                            </div>
                            <div className="right">
                                {open
                                    ?
                                    <AiOutlineMinus 
                                    className='text-white text-2xl lg:text-4xl md:text-4xl' />
                                    :
                                    <AiOutlinePlus 
                                    className='text-white text-2xl lg:text-4xl md:text-4xl' />
                                }


                            </div>
                        </div>

                        {open && <div className="bottom bg-[#2d2d2d] px-5 py-4 my-[1px]">
                            <p className='text-2xl cursor-text text-justify lg:text-start md:text-start'>
                                {desc}
                            </p>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
