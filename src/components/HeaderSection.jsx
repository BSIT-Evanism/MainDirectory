import React, { useState } from 'react'

function Header() {
    const [search, setSearch] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')
        console.log(search)
        window.location.href = `/results?search=${search}`
    }

    return (
        <div className="self-center bg-white flex w-full px-14 py-10 justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8c84ca4-3e6e-4904-bb02-de97390494a1?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&"
                className="aspect-[2.37] object-contain object-center w-[97px] overflow-hidden shrink-0 max-w-full"
            />
            <div className="self-stretch flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Search"
                        className="text-black text-lg leading-6 whitespace-nowrap bg-zinc-100 grow px-5 py-4 rounded-[50px] w-[30vw] max-md:max-w-full max-md:pl-1.5"
                    />
                </form>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cec397a0-4c8c-4319-b616-df68bb73d858?apiKey=a9c78a43f27145ccb5f12b07f1adc09a&"
                    className="aspect-[2.61] object-contain object-center w-[94px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
            </div>
        </div>
    )
}

export default Header