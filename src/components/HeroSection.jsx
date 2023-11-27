import React from 'react'

function HeroSection() {
    return (
        <div className='w-auto h-auto bg-black flex justify-center'>
            <div className='w-full h-full lg:flex md:block'>
                <div className='lg:w-[30%] md:w-full lg:h-full md:h-[20%]'>
                    <h1 className="text-[75px] text-end text-white">
                        Artist
                        <br />
                        <span className="font-bold">Directory</span>
                    </h1>
                </div>
                <div className='lg:w-[80%] md:w-full lg:h-full md:h-[80%] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2'>
                    <div className="p-2 flex justify-center items-center">
                        <div className="p-10 w-auto lg:h-72 md:h-10 rounded-2xl bg-slate-50 shrink">
                            <img src="/public/Music.png" alt="audiovisual" className='shrink' />
                            <p className="text-center text-[18px]">AudioVisual Media</p>
                        </div>
                    </div>
                    <div className="p-2 flex justify-center items-center">
                        <div className="p-10  lg:h-72 md:h-10 rounded-2xl bg-slate-50">
                            <img src="/public/Interactive media.png" alt="interactive" />
                            <p className="text-center text-[18px]">Interactive Media</p>
                        </div>
                    </div>
                    <div className="p-2 flex justify-center items-center">
                        <div className="p-10  lg:h-72 md:h-10 rounded-2xl bg-slate-50">
                            <img src="/public/Creative Services.png" alt="visual" />
                            <p className="text-center text-[18px]">Creative Services</p>
                        </div>
                    </div>
                    <div className="p-2 flex justify-center items-center">
                        <div className=" w-auto lg:h-72 md:h-10  rounded-2xl bg-slate-50">
                        </div>
                    </div>
                    <div className="p-2 flex justify-center items-center">
                        <div className=" w-auto lg:h-72 md:h-10 rounded-2xl bg-slate-50">
                        </div>
                    </div>
                    <div className="p-2 flex justify-center items-center">
                        <div className=" w-auto lg:h-72 md:h-10 rounded-2xl bg-slate-50">
                        </div>
                    </div>
                    <div className="p-2 flex justify-center items-center">
                        <div className=" w-auto lg:h-72 md:h-10 rounded-2xl bg-slate-50">
                        </div>
                    </div>
                    <div className="p-2 flex justify-center items-center">
                        <div className=" w-auto lg:h-72 md:h-10 rounded-2xl bg-slate-50">
                        </div>
                    </div>
                    <div className="p-2 flex justify-center items-center">
                        <div className=" w-auto lg:h-72 md:h-10 rounded-2xl bg-slate-50">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection