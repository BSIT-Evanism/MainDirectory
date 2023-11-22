import React, { useEffect } from 'react'



function Results() {
    const [res, setRes] = React.useState([])

    useEffect(() => {
        getFetch()
    }, [])

    async function getFetch() {
        const response = await fetch('https://sheet.best/api/sheets/249b0e30-cf60-4ba8-9012-c5986052c0d1')
        const data = await response.json()
        console.log(data)
        setRes(data)
    }

    return (
        <div>
            <h1>Test</h1>
            {res.map((item, i) => {
                return (
                    <div key={i}>
                        <h1>{item.FirstName}</h1>
                        <h1>{item.LastName}</h1>
                        <h1>{item.MobileNumber}</h1>
                        <h1>{item.EmailAddress}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Results