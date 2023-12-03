import React, { useEffect, useState } from 'react'

function Header({ loading, routeN }) {
    const [search, setSearch] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')
        console.log(search)
        window.location.href = `/results?search=${search}`

    }

    const handleRouteSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')
        console.log(search)
        window.location.href = `${window.location.pathname}?search=${search}`

    }

    useEffect(() => {
        console.log(routeN)
        console.log(window.location.pathname)
    }, [])

    return (
        <div className="self-center bg-white flex w-full px-14 py-10 justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <img
                loading="lazy"
                src="/Creative Legazpi_LogoOutline.svg"
                className="aspect-[2.37] object-contain object-center w-[127px] overflow-hidden shrink-0 max-w-full"
            />
            <div className="self-stretch flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                <form onSubmit={routeN === '' || routeN === null || routeN === undefined ? handleSubmit : handleRouteSubmit}>
                    <input
                        type="text"
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Search"
                        disabled={loading}
                        className="text-black disabled:brightness-50 text-lg leading-6 whitespace-nowrap bg-zinc-100 grow px-5 py-4 rounded-[50px] w-[30vw] max-md:max-w-full max-md:pl-1.5"
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