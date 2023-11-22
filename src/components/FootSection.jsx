
import React from 'react'

function FootSection() {
    return (
        <div>
            <div className="self-center flex w-full justify-around gap-5 mt-14 mb-20 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:my-10">
                <section className="w-[50%]">
                    <div className="flex gap-20">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8f954ae-5334-438d-bda9-532a9bd8d06c?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&"
                            className="aspect-[2.37] object-contain object-center w-[97px] overflow-hidden shrink-0 max-w-full"
                            alt="Image description"
                        />
                        <div className="text-black text-lg leading-6 w-[40%] basis-auto mt-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                </section>
                <section>
                    <div className="text-black text-lg leading-6 grow shrink basis-auto mt-2.5">
                        <a href="contact.html">Contact us</a>
                        <br />
                        <br />
                        <a href="privacy.html">Privacy Policy</a>
                    </div>
                </section>
                <section>
                    <div className="flex">
                        <img
                            src="/facebooklogo.png"
                            width={100}
                            height={100}
                            className="aspect-[2.61] object-contain object-center w-[94px] overflow-hidden shrink-0 max-w-full"
                            alt="Image description"
                        />
                        <img
                            src="/instagramlogo.png"
                            width={100}
                            height={100}
                            className="aspect-[2.61] object-contain object-center w-[94px] overflow-hidden shrink-0 max-w-full"
                            alt="Image description"
                        />
                    </div>
                </section>
            </div>

        </div>
    )
}

export default FootSection