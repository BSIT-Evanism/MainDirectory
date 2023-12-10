import React from 'react'

function HeroSectionv2() {
    return (
        <div><main>
            <div className="w-auto h-auto bg-black flex justify-center px-10">
                <div className="w-full h-full lg:flex md:block">
                    <div className="lg:w-[30%] md:w-full lg:h-full justify-center flex flex-col md:h-[20%]">
                        <h1 className="text-[max(5vw,40px)] leading-tight lg:text-end md:text-center text-white">
                            Creative
                            <br />
                            <span className="font-bold text-end">Directory</span>
                        </h1>
                        <p className='mt-10 lg:text-2xl md:text-lg text-end'>This is only the Creative Directory v0.0.1 of the platform, for preview purposes only...</p>
                    </div>
                    <div className="lg:w-[70%] lg:col-span-3 md:col-span-6 md:w-screen lg:h-full md:h-fit">
                        <div className="w-full [&:has(a:hover)>a:not(:hover)]:scale-75 [&:has(a:hover)>a:not(:hover)]:brightness-75 h-full p-4 grid lg:grid-cols-3 md:grid-cols-2">
                            <a href='/results/audiovisual' className="p-2 flex transition-all duration-1000 ease lg:w-full md:w-[50%] col-span-1 col-start-1 justify-center items-center">
                                <div className="lg:p-10 md:p-0 lg:w-[16vw] lg:h-[28vh] card md:w-full md:h-full rounded-2xl bg-slate-50 flex flex-col justify-center items-center shrink">
                                    <img
                                        src="/Music.png"
                                        alt="audiovisual"
                                        className=" object-contain p-4 lg:w-40 md:w-48 h-64"
                                    />
                                    <p className="text-center text-[18px]">AudioVisual Media</p>
                                </div>
                            </a>
                            <a href='/results/interactivemedia' className="p-2 flex transition-all duration-1000 ease lg:w-full md:w-[50%] col-span-1 col-start-2 justify-center items-center">
                                <div className="lg:p-10 md:p-0 lg:w-[16vw] lg:h-[28vh] card md:w-full md:h-full rounded-2xl flex flex-col justify-center items-center bg-slate-50">
                                    <img
                                        src="/Interactivemedia.png"
                                        alt="interactive"
                                        className=" object-contain lg:w-40 md:w-48 h-64 p-4"
                                    />
                                    <p className="text-center text-[18px]">Digital Interactive Media</p>
                                </div>
                            </a>
                            <a href='/results/creativeservices' className="p-2 flex transition-all duration-1000 ease lg:w-full md:w-[50%] justify-center items-center">
                                <div className="lg:p-10 md:p-0 lg:w-[16vw] lg:h-[28vh] flex-col flex justify-center items-center md:w-full md:h-full rounded-2xl bg-slate-50">
                                    <img
                                        src="/creativeservices3.png"
                                        alt="interactive"
                                        className="object-contain lg:w-32 md:w-48 h-64 p-4"
                                    />
                                    <p className="text-center text-[18px]">Creative Services</p>
                                </div>
                            </a>
                            <a href='/results/design' className="p-2 flex transition-all duration-1000 ease lg:w-full md:w-[50%] justify-center items-center">
                                <div className="lg:p-10 md:p-0 lg:w-[16vw] lg:h-[28vh] flex-col flex justify-center items-center md:w-full md:h-full rounded-2xl bg-slate-50">
                                    <img
                                        src="/DesignServices.png"
                                        alt="interactive"
                                        className="shrink object-contain lg:w-40 md:w-48 h-64 p-4"
                                    />
                                    <p className="text-center text-[18px]">Design</p>
                                </div>
                            </a>
                            <a href="/results/publishingmedia" className="p-2 flex transition-all duration-1000 ease lg:w-full md:w-[50%] justify-center items-center">
                                <div className="lg:p-10 md:p-0 lg:w-[16vw] lg:h-[28vh] flex flex-col items-center md:w-full md:h-full rounded-2xl bg-slate-50 -5">
                                    <img
                                        src="/Publishing.png"
                                        alt="interactive"
                                        className="shrink object-cover lg:w-24 md:w-28 h-64 p-4"
                                    />
                                    <p className="text-center whitespace-normal lg:text-[14px] md:text-[18px]">
                                        Publishing and Printed Media
                                    </p>
                                </div>
                            </a>
                            <a href='/results/performingarts' className="p-2 flex transition-all duration-1000 ease lg:w-full md:w-[50%] justify-center items-center">
                                <div className="lg:p-10 md:p-0 lg:w-[16vw] lg:h-[28vh] flex flex-col items-center md:w-full md:h-full rounded-2xl bg-slate-50">
                                    <img
                                        src="/PerformingArts.png"
                                        alt="interactive"
                                        className="shrink object-contain lg:w-28 md:w-56 lg:h-64 md:h-80 p-4"
                                    />
                                    <p className="text-center text-[18px]">Performing Arts</p>
                                </div>
                            </a>
                            <a href='/results/visualarts' className="p-2 flex transition-all duration-1000 ease lg:w-full md:w-[50%] justify-center items-center">
                                <div className="lg:p-10 md:p-0 lg:w-[16vw] lg:h-[28vh] flex flex-col items-center md:w-full md:h-full rounded-2xl bg-slate-50">
                                    <img
                                        src="/Visual2nd.png"
                                        alt="interactive"
                                        className="shrink object-contain lg:w-28 md:w-56 h-64 p-4"
                                    />
                                    <p className="text-center text-[18px]">Visual Arts</p>
                                </div>
                            </a>
                            <a href="/results/traditional" className="p-2 flex transition-all duration-1000 ease lg:w-full md:w-[50%] justify-center items-center">
                                <div className="lg:p-8 md:p-0 lg:w-[16vw] lg:h-[28vh] flex flex-col items-center md:w-full md:h-[22vh] rounded-2xl bg-slate-50">
                                    <img
                                        src="/trad.webp"
                                        alt="interactive"
                                        className="shrink object-contain w-48 h-36  p-4"
                                    />
                                    <p className="text-center lg:text-[14px] md:text-[18px]">
                                        Traditional Cultural <br /> Expressions
                                    </p>
                                </div>
                            </a>
                            <a href="/results/culturalsites" className="p-2 flex transition-all duration-1000 ease lg:w-full md:w-[50%] justify-center items-center">
                                <div className="lg:p-8 md:p-0 lg:w-[16vw] lg:h-[28vh] flex flex-col items-center md:w-full md:h-full rounded-2xl bg-slate-50">
                                    <img
                                        src="/Cultural.png"
                                        alt="interactive"
                                        className="shrink object-contain lg:w-32 md:w-56 h-64 p-4"
                                    />
                                    <p className="text-center text-[18px]">Cultural Sites</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </div>
    )
}

export default HeroSectionv2