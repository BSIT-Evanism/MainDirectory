
import React from 'react'

function FootSection() {
    return (
        <div className='bg-white h-auto py-10'>
            <div className="self-center flex w-full justify-around gap-5 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:my-10">
                <section className="w-[50%]">
                    <div className="flex gap-20">
                        <img
                            loading="lazy"
                            src="/Creative Legazpi_LogoOutline.svg"
                            className="aspect-[2.37] object-contain object-center w-[127px] overflow-hidden shrink-0 max-w-full"
                            alt="Image description"
                        />
                        {/* <div className="text-black text-lg leading-6 w-[40%] basis-auto mt-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </div> */}
                    </div>
                </section>
                <section>
                    <div className="text-black text-lg leading-6 grow shrink basis-auto mt-2.5">
                        <a href="mailto:hello@creativelegazpi.ph" target='_blank'>Contact us</a>
                        <br />
                        <br />
                        <a href="https://creativelegazpi.ph" target='_blank'>Privacy Policy</a>
                    </div>
                </section>
                <section>
                    <div className="flex">
                        <a href="https://facebook.com/creativelegazpi" target='_blank'>
                            <img
                                src="/facebooklogo.png"
                                width={100}
                                height={100}
                                className="aspect-[2.61] object-contain object-center w-[94px] overflow-hidden shrink-0 max-w-full"
                                alt="Image description"
                            />
                        </a>
                        <a href="https://instagram.com/creativelegazpi" target='_blank'>
                            <img
                                src="/instagramlogo.png"
                                width={100}
                                height={100}
                                className="aspect-[2.61] object-contain object-center w-[94px] overflow-hidden shrink-0 max-w-full"
                                alt="Image description"
                            />
                        </a>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default FootSection