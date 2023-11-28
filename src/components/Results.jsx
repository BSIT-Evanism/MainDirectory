import React, { useEffect } from 'react'
import HeaderSection from './HeaderSection'
import FootSection from './FootSection'



function Results({ routeName }) {
    const [res, setRes] = React.useState([])

    useEffect(() => {
        getFetch()
    }, [])

    async function getFetch() {
        const response = await fetch('https://sheet.best/api/sheets/249b0e30-cf60-4ba8-9012-c5986052c0d1')
        const data = await response.json()
        if (routeName === "") {
            setRes(data)
        }
        else {
            const filtered = data.filter(item => item.CreativeField_2 === routeName)
            setRes(filtered)
        }
        console.log(data)
    }

    return (
        <div>
            <HeaderSection />
            <h1>{routeName}</h1>
            <h1>Test</h1>
            <div className='w-full h-screen flex justify-center py-4 bg-[#EFEFEF]'>
                <div className='w-[90%] h-full flex gap-2'>
                    <div className='w-[30%] flex flex-col gap-4 pt-4'>
                        <h1 className='whitespace-normal text-2xl'>
                        </h1>
                        {routeName === "Audiovisual Media" && <h1 className='whitespace-normal text-4xl text-end'>AudioVisual <br /> <strong>Media</strong></h1>}
                        {routeName === "Visual Arts" && <h1 className='whitespace-normal text-4xl text-end'>Visual <br /> <strong>Arts</strong></h1>}
                        <a className='flex self-end' href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </div>

                    <div className='w-[70%] grid grid-cols-2 grid-rows-2'>
                        {res.map((item, i) => {
                            return (
                                <div className='card w-[80%] flex flex-col p-4' key={i}>
                                    <img loading='lazy' src={item.profilephoto} className='mask mask-circle object-cover self-center w-32 h-32' alt={i} />
                                    <h1 className='card-title'>{item.FirstName}</h1>
                                    <div className='card-body'>
                                        <h1>{item.LastName}</h1>
                                        <h1>{item.MobileNumber}</h1>
                                        <h1>{item.EmailAddress}</h1>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <FootSection />
        </div>
    )
}

export default Results