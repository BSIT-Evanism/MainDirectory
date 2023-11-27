import React from 'react'
import Header from './HeaderSection'

function MiddleSection() {
    return (
        <>
            <Header />
            <div className="w-screen h-fit bg-black flex justify-center items-center">
                <div className="lg:w-[80%] md:w-screen lg:h-[90%] md:h-fit grid lg:grid-cols-4 md:grid-cols-1">
                    <div className="lg:w-[30%] md:w-screen lg:col-span-1 md:col-span-6 lg:h-full md:h-fit p-4">
                        <h1 className="text-[75px] text-end text-white">
                            Artist
                            <br />
                            <span className="font-bold">Directory</span>
                        </h1>
                    </div>
                    <div className="lg:w-[70%] lg:col-span-3 md:col-span-6 md:w-screen lg:h-full md:h-fit">
                        <div className="w-full h-full p-4 grid lg:grid-cols-3 md:grid-cols-2">
                            <div className="p-2 flex  justify-center items-center">
                                <div className="p-10 w-[16vw] h-[17vw] rounded-2xl bg-slate-50 shrink">
                                    <img src="/public/Music.png" alt="audiovisual" />
                                    <p className="text-center text-[18px]">AudioVisual Media</p>
                                </div>
                            </div>
                            <div className="p-2 flex justify-center items-center">
                                <div className="p-10 w-[16vw] h-[17vw] rounded-2xl bg-slate-50">
                                    <img src="/public/Interactive media.png" alt="interactive" />
                                    <p className="text-center text-[18px]">Interactive Media</p>
                                </div>
                            </div>
                            <div className="p-2 flex justify-center items-center">
                                <div className="p-10 w-[16vw] h-[17vw] rounded-2xl bg-slate-50">
                                    <img src="/public/Creative Services.png" alt="visual" />
                                    <p className="text-center text-[18px]">Creative Services</p>
                                </div>
                            </div>
                            <div className="p-2 flex justify-center items-center">
                                <div className="w-[16vw] h-[17vw] rounded-2xl bg-slate-50">
                                </div>
                            </div>
                            <div className="p-2 flex justify-center items-center">
                                <div className="w-[16vw] h-[17vw] rounded-2xl bg-slate-50">
                                </div>
                            </div>
                            <div className="p-2 flex justify-center items-center">
                                <div className="w-[16vw] h-[17vw] rounded-2xl bg-slate-50">
                                </div>
                            </div>
                            <div className="p-2 flex justify-center items-center">
                                <div className="w-[16vw] h-[17vw] rounded-2xl bg-slate-50">
                                </div>
                            </div>
                            <div className="p-2 flex justify-center items-center">
                                <div className="w-[16vw] h-[17vw] rounded-2xl bg-slate-50">
                                </div>
                            </div>
                            <div className="p-2 flex justify-center items-center">
                                <div className="w-[16vw] h-[17vw] rounded-2xl bg-slate-50">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default MiddleSection