import React from 'react'

export default function Download() {
    return (
        <div>
            <div className="flex flex-wrap justify-evenly items-center lg:py-20 md:py-20 py-10 px-5 ">
                <div className="left order-last lg:order-first md:order-first">
                    <div className="">
                        <video className='lg:w-[22em] md:w-[22em] w-[20em] ' autoPlay={true} muted >
                            <source src="/video/v2.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className="right mb-10 lg:mb-0 md:mb-0 ">
                    <div className="">
                        <h2 className='text-white lg:text-5xl md:text-5xl text-3xl font-bold mb-5 text-center lg:text-start md:text-start'>Download your shows <br className='' /> to watch offline</h2>
                        <p className='text-white lg:text-2xl md:text-2xl text-lg text-center lg:text-start md:text-start'>Save your favourites easily and always have <br /> something to watch.</p>
                    </div>
                </div>
            </div>

            <div className='hr_Line' />
        </div>
    )
}
