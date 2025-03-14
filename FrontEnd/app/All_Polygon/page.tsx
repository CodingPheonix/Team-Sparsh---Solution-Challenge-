import React, { JSX } from 'react'

const page = (): JSX.Element => {

    type area = {
        id: number;
        name: string;
        area: number;
        coordinates: { lat: number; lon: number }[];
    }

    return (
        <>
            <div>
                <h2 className="font-bold text-green-500 text-3xl p-3 drop-shadow-lg">
                    My Areas
                </h2>
                <div >
                    
                </div>
            </div>
        </>
    )
}

export default page
