import React from 'react'

export default function Watch() {
    return (
        <div>
            <div className=" flex flex-wrap justify-evenly items-center lg:py-20 md:py-20 py-10 px-5">
                <div className="left mb-10 lg:mb-0 md:mb-0">
                    <h2 className='text-white lg:text-5xl md:text-5xl text-3xl font-bold mb-5 text-center lg:text-start md:text-start'>Watch everywhere</h2>
                    <p className='text-white lg:text-2xl md:text-2xl text-lg text-center lg:text-start md:text-start '>
                    Stream unlimited movies and TV shows on your <br className=' hidden lg:block md:block' /> phone, tablet, laptop, and TV.</p>
                </div>
                <div className="right">
                    <div className="">
                        <video className='lg:w-[35em] md:w-[35em]  w-[30em] ' autoPlay={true} muted >
                            <source src="/video/v3.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
            <div className='hr_Line'/>
        </div>
    )
}
