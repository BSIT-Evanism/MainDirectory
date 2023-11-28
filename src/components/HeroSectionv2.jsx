import React from 'react'

function HeroSectionv2() {
    return (
        <div><main>
            <div className="w-auto h-auto bg-black flex justify-center px-10">
                <div className="w-full h-full lg:flex md:block">
                    <div className="lg:w-[30%] md:w-full lg:h-full justify-center flex md:h-[20%]">
                        <h1 className="text-[max(5vw,40px)] text-end text-white">
                            Artist
                            <br />
                            <span className="font-bold">Directory</span>
                        </h1>
                    </div>
                    <div className="lg:w-[70%] lg:col-span-3 md:col-span-6 md:w-screen lg:h-full md:h-fit">
                        <div className="w-full h-full p-4 grid lg:grid-cols-3 md:grid-cols-2">
                            <a href='/results/audiovisual' className="p-2 flex lg:w-full md:w-[50%] col-span-1 col-start-1 justify-center items-center">
                                <div className="lg:p-10 md:p-0 lg:w-[16vw] lg:h-[17vw] md:w-full md:h-full rounded-2xl bg-slate-50 shrink">
                                    <img
                                        src="/Music.png"
                                        alt="audiovisual"
                                        className="shrink object-contain p-4"
                                    />
                                    <p className="text-center text-[18px]">AudioVisual Media</p>
                                </div>
                            </a>
                            <div className="p-2 flex lg:w-full md:w-[50%] col-span-1 col-start-2 justify-center items-center">
                                <div className="lg:p-10 md:p-0 lg:w-[16vw] lg:h-[17vw] md:w-full md:h-full rounded-2xl bg-slate-50">
                                    <img
                                        src="/Interactivemedia.png"
                                        alt="interactive"
                                        className="shrink object-contain p-4"
                                    />
                                    <p className="text-center text-[18px]">Interactive Media</p>
                                </div>
                            </div>
                            <div className="p-2 flex lg:w-full md:w-[50%] justify-center items-center">
                                <div className="lg:p-10 md:p-0 lg:w-[16vw] lg:h-[17vw] md:w-full md:h-full rounded-2xl bg-slate-50">
                                    <img
                                        src="/CreativeServices.png"
                                        alt="interactive"
                                        className="shrink object-contain p-4"
                                    />
                                    <p className="text-center text-[18px]">Creative Services</p>
                                </div>
                            </div>
                            <div className="p-2 flex lg:w-full md:w-[50%] justify-center items-center">
                                <div className="lg:p-10 md:p-0 lg:w-[16vw] flex-col flex justify-center items-center lg:h-[17vw] md:w-full md:h-full rounded-2xl bg-slate-50">
                                    <img
                                        src="/Architecture.png"
                                        alt="interactive"
                                        className="shrink object-contain w-[90%] p-4"
                                    />
                                    <p className="text-center text-[18px]">Design</p>
                                </div>
                            </div>
                            <div className="p-2 flex lg:w-full md:w-[50%] justify-center items-center">
                                <div className="lg:p-10 md:p-0 lg:w-[16vw] flex flex-col items-center lg:h-[17vw] md:w-full md:h-full rounded-2xl bg-slate-50">
                                    <img
                                        src="/Publishing.png"
                                        alt="interactive"
                                        className="shrink object-contain w-[90%] h-[90%] p-4"
                                    />
                                    <p className="text-center whitespace-normal text-[18px]">
                                        Publishing and Printed Media
                                    </p>
                                </div>
                            </div>
                            <div className="p-2 flex lg:w-full md:w-[50%] justify-center items-center">
                                <div className="lg:p-10 md:p-0 lg:w-[16vw] flex flex-col items-center lg:h-[17vw] md:w-full md:h-full rounded-2xl bg-slate-50">
                                    <img
                                        src="/PerformingArts.png"
                                        alt="interactive"
                                        className="shrink object-contain w-[90%] h-[90%] p-4"
                                    />
                                    <p className="text-center text-[18px]">Performing Arts</p>
                                </div>
                            </div>
                            <a href='/results/visualarts' className="p-2 flex lg:w-full md:w-[50%] justify-center items-center">
                                <div className="lg:p-10 md:p-0 lg:w-[16vw] flex flex-col items-center lg:h-[17vw] md:w-full md:h-full rounded-2xl bg-slate-50">
                                    <img
                                        src="/Visual.png"
                                        alt="interactive"
                                        className="shrink object-contain w-[90%] h-[90%] p-4"
                                    />
                                    <p className="text-center text-[18px]">Visual Arts</p>
                                </div>
                            </a>
                            <div className="p-2 flex lg:w-full md:w-[50%] justify-center items-center">
                                <div className="lg:p-10 md:p-0 lg:w-[16vw] flex flex-col items-center lg:h-[17vw] md:w-full md:h-full rounded-2xl bg-slate-50">
                                    <img
                                        src="/PerformingArts2.png"
                                        alt="interactive"
                                        className="shrink object-contain w-[90%] h-[90%] p-4"
                                    />
                                    <p className="text-center text-[15px]">
                                        Traditional Cultural <br /> Expressions
                                    </p>
                                </div>
                            </div>
                            <div className="p-2 flex lg:w-full md:w-[50%] justify-center items-center">
                                <div className="lg:p-10 md:p-0 lg:w-[16vw] flex flex-col items-center lg:h-[17vw] md:w-full md:h-full rounded-2xl bg-slate-50">
                                    <img
                                        src="/Visual2nd.png"
                                        alt="interactive"
                                        className="shrink object-contain w-[90%] h-[90%] p-4"
                                    />
                                    <p className="text-center text-[18px]">Cultural Sites</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
            pnpm </div>
    )
}

export default HeroSectionv2