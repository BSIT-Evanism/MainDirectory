import React from 'react'
import Header from './Header'

function MiddleSection() {
    return (
        <>
            <Header />
            <div className="bg-orange-500 flex w-full flex-col items-center px-5 py-12 max-md:max-w-full">
                <div className="flex w-full max-w-[1161px] flex-col items-stretch mt-10 mb-11 max-md:max-w-full max-md:mb-10">
                    <div className="max-md:max-w-full">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch w-[29%] max-md:w-full max-md:ml-0">
                                <div className="flex flex-col mt-1.5 max-md:mt-10">
                                    <div className="text-white text-right text-7xl leading-[90px] whitespace-nowrap max-md:text-4xl max-md:leading-[53px]">
                                        Artist
                                    </div>
                                    <div className="text-white text-right text-7xl font-bold leading-[90px] self-stretch whitespace-nowrap mt-4 max-md:text-4xl max-md:leading-[53px]">
                                        Directory
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-stretch w-[71%] ml-5 max-md:w-full max-md:ml-0">
                                <div className="grow max-md:max-w-full max-md:mt-10">
                                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                        <div className="flex flex-col bg-stone-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out rounded-3xl items-stretch w-[29%] ml-6 max-md:w-full max-md:ml-0">
                                            <div className="flex-col fill-stone-100 overflow-hidden relative flex aspect-[0.914396887159533] grow items-center pl-11 pr-12 pt-6 pb-12 max-md:mt-8 max-md:px-5">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb76e6eb-8869-4d99-8113-8ee754d3aafe?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&"
                                                    className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                                                />
                                                <img
                                                    loading="lazy"
                                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/09fe0a8b-2b8e-417c-9f41-2391629068e9?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/09fe0a8b-2b8e-417c-9f41-2391629068e9?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/09fe0a8b-2b8e-417c-9f41-2391629068e9?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/09fe0a8b-2b8e-417c-9f41-2391629068e9?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/09fe0a8b-2b8e-417c-9f41-2391629068e9?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/09fe0a8b-2b8e-417c-9f41-2391629068e9?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/09fe0a8b-2b8e-417c-9f41-2391629068e9?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/09fe0a8b-2b8e-417c-9f41-2391629068e9?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&"
                                                    className="aspect-[0.84] object-contain object-center w-36 overflow-hidden"
                                                />
                                                <div className="relative text-black text-center text-lg leading-6 self-stretch whitespace-nowrap mt-1.5">
                                                    Audiovisual Media
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1b965f15-08c5-4b96-af93-a70c7f2b9389?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1b965f15-08c5-4b96-af93-a70c7f2b9389?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1b965f15-08c5-4b96-af93-a70c7f2b9389?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1b965f15-08c5-4b96-af93-a70c7f2b9389?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1b965f15-08c5-4b96-af93-a70c7f2b9389?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1b965f15-08c5-4b96-af93-a70c7f2b9389?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1b965f15-08c5-4b96-af93-a70c7f2b9389?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1b965f15-08c5-4b96-af93-a70c7f2b9389?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&"
                                                className="aspect-[0.91] object-contain object-center w-full overflow-hidden grow max-md:mt-8 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out"
                                            />
                                        </div>
                                        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/35872c3c-1187-4691-9e7c-a67dae5148ac?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/35872c3c-1187-4691-9e7c-a67dae5148ac?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35872c3c-1187-4691-9e7c-a67dae5148ac?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/35872c3c-1187-4691-9e7c-a67dae5148ac?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/35872c3c-1187-4691-9e7c-a67dae5148ac?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35872c3c-1187-4691-9e7c-a67dae5148ac?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/35872c3c-1187-4691-9e7c-a67dae5148ac?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/35872c3c-1187-4691-9e7c-a67dae5148ac?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&"
                                                className="aspect-[0.91] object-contain object-center w-full overflow-hidden grow max-md:mt-8 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-[767px] max-w-full pl-0 flex-col items-stretch mt-8 pr-px self-end">
                        <div className="max-md:max-w-full">
                            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6ba444c4-f545-468f-b4a6-7b7fead39a20?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ba444c4-f545-468f-b4a6-7b7fead39a20?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ba444c4-f545-468f-b4a6-7b7fead39a20?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ba444c4-f545-468f-b4a6-7b7fead39a20?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ba444c4-f545-468f-b4a6-7b7fead39a20?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ba444c4-f545-468f-b4a6-7b7fead39a20?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ba444c4-f545-468f-b4a6-7b7fead39a20?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ba444c4-f545-468f-b4a6-7b7fead39a20?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&"
                                        className="aspect-[0.91] object-contain object-center w-full overflow-hidden grow max-md:mt-8 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out"
                                    />
                                </div>
                                <div className="flex flex-col bg-stone-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out rounded-3xl items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                                    <div className="flex-col fill-stone-100 overflow-hidden relative flex aspect-[0.914396887159533] grow items-center pl-14 pr-14 py-6 max-md:mt-8 max-md:px-5">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7136bbe-f4d3-4435-9d73-e46c282c0bd5?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&"
                                            className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                                        />
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/374be30f-b542-4876-841c-c0b9b22494c5?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/374be30f-b542-4876-841c-c0b9b22494c5?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/374be30f-b542-4876-841c-c0b9b22494c5?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/374be30f-b542-4876-841c-c0b9b22494c5?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/374be30f-b542-4876-841c-c0b9b22494c5?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/374be30f-b542-4876-841c-c0b9b22494c5?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/374be30f-b542-4876-841c-c0b9b22494c5?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/374be30f-b542-4876-841c-c0b9b22494c5?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&"
                                            className="aspect-[0.78] object-contain object-center w-[126px] overflow-hidden"
                                        />
                                        <div className="relative text-black text-center text-lg leading-6 self-stretch mt-4">
                                            Publishing and
                                            <br />
                                            Printed Media
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col bg-stone-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out rounded-3xl items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                                    <div className="flex-col fill-stone-100 overflow-hidden relative flex aspect-[0.914396887159533] grow items-center pl-14 pr-14 pt-8 pb-11 max-md:mt-8 max-md:px-5">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6a26a88-a30d-4f6e-ac22-aa123709cad9?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&"
                                            className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                                        />
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d1c7e3af-c9a2-4c70-b25a-9c850698ac93?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1c7e3af-c9a2-4c70-b25a-9c850698ac93?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1c7e3af-c9a2-4c70-b25a-9c850698ac93?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1c7e3af-c9a2-4c70-b25a-9c850698ac93?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1c7e3af-c9a2-4c70-b25a-9c850698ac93?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1c7e3af-c9a2-4c70-b25a-9c850698ac93?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1c7e3af-c9a2-4c70-b25a-9c850698ac93?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d1c7e3af-c9a2-4c70-b25a-9c850698ac93?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&"
                                            className="aspect-[0.84] object-contain object-center w-[122px] overflow-hidden"
                                        />
                                        <div className="relative text-black text-center text-lg leading-6 self-stretch whitespace-nowrap mt-6">
                                            Performing Arts
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 max-md:max-w-full">
                            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/785a5a3e-e110-42d6-8b06-84306170cd2c?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/785a5a3e-e110-42d6-8b06-84306170cd2c?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/785a5a3e-e110-42d6-8b06-84306170cd2c?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/785a5a3e-e110-42d6-8b06-84306170cd2c?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/785a5a3e-e110-42d6-8b06-84306170cd2c?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/785a5a3e-e110-42d6-8b06-84306170cd2c?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/785a5a3e-e110-42d6-8b06-84306170cd2c?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/785a5a3e-e110-42d6-8b06-84306170cd2c?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&"
                                        className="aspect-[0.91] object-contain object-center w-full overflow-hidden grow max-md:mt-8 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out"
                                    />
                                </div>
                                <div className="flex bg-stone-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out rounded-3xl flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                                    <div className="flex-col fill-stone-100 overflow-hidden relative flex aspect-[0.914396887159533] grow items-center pl-11 pr-11 pt-8 pb-6 max-md:mt-8 max-md:px-5">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/428bbc42-4111-4fac-ad42-b15bb68ad7df?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&"
                                            className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                                        />
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/07c37ebb-7ee1-4534-ba7b-468339f3d331?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/07c37ebb-7ee1-4534-ba7b-468339f3d331?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/07c37ebb-7ee1-4534-ba7b-468339f3d331?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/07c37ebb-7ee1-4534-ba7b-468339f3d331?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/07c37ebb-7ee1-4534-ba7b-468339f3d331?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/07c37ebb-7ee1-4534-ba7b-468339f3d331?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/07c37ebb-7ee1-4534-ba7b-468339f3d331?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/07c37ebb-7ee1-4534-ba7b-468339f3d331?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&"
                                            className="aspect-[0.77] object-contain object-center w-[111px] overflow-hidden max-w-full"
                                        />
                                        <div className="relative text-black text-center text-lg leading-6 self-stretch mt-5">
                                            Traditional Cultural
                                            <br />
                                            Expressions
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col bg-stone-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out rounded-3xl items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                                    <div className="flex-col fill-stone-100 overflow-hidden relative flex aspect-[0.914396887159533] grow items-center pb-12 px-11 max-md:mt-8 max-md:px-5">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/759a28ec-3ca0-4440-944e-40fec197e4e2?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&"
                                            className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                                        />
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/298e48a2-ff37-4b23-96dc-fd390a84377d?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/298e48a2-ff37-4b23-96dc-fd390a84377d?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/298e48a2-ff37-4b23-96dc-fd390a84377d?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/298e48a2-ff37-4b23-96dc-fd390a84377d?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/298e48a2-ff37-4b23-96dc-fd390a84377d?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/298e48a2-ff37-4b23-96dc-fd390a84377d?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/298e48a2-ff37-4b23-96dc-fd390a84377d?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/298e48a2-ff37-4b23-96dc-fd390a84377d?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&"
                                            className="aspect-[0.77] object-contain object-center w-[149px] overflow-hidden"
                                        />
                                        <div className="relative text-black text-center text-lg leading-6 whitespace-nowrap">
                                            Cultural Sites
                                        </div>
                                    </div>
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