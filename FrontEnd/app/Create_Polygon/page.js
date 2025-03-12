"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import map_image from '../../public/sample_map.jpg'

const page = () => {

    // State List
    const [gotLocation, setGotLocation] = useState(false)

    // API Calls
    const make_polygon = async (coord_list) => {
        const response = await fetch(`API_URL`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(coord_list)
        });
        const result = await response.json();
        return { response, result };
    };

    //Functions
    const getSquareCoordinates = (lat, lon, distance = 0.0045) => {
        // Approximate degree difference for given distance (1 hectare ~ 100m)
        const latDiff = distance;
        const lonDiff = distance / Math.cos(lat * (Math.PI / 180));
    
        return [
            { lat: lat + latDiff, lon: lon - lonDiff }, // Top-left
            { lat: lat + latDiff, lon: lon + lonDiff }, // Top-right
            { lat: lat - latDiff, lon: lon + lonDiff }, // Bottom-right
            { lat: lat - latDiff, lon: lon - lonDiff }  // Bottom-left
        ];
    };

    const get_location = () => {

        setGotLocation(!gotLocation)

        if (typeof window !== 'undefined' && 'geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                    console.log('Latitude:', position.coords.latitude);
                    console.log('Longitude:', position.coords.longitude);

                    const coords = getSquareCoordinates(position.coords.latitude, position.coords.longitude)
                    
                    // Call backend API to create polygon
                    make_polygon(coords)
                },
                (error) => {
                    console.error('Error getting location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported or not available.');
        }
    }

    return (
        <>
            <div className="flex flex-col md:flex-row justify-center items-center min-h-[calc(100vh-4rem)] p-6">
                {/* Location Permission Card */}
                <div className="flex flex-col gap-5 bg-white/20 backdrop-blur-xl border border-green-500 shadow-2xl rounded-3xl p-8 md:w-96">
                    <span className='flex'>
                        <h1 className="text-3xl font-bold drop-shadow-lg">Enable Location</h1>
                        <lord-icon
                            src="https://cdn.lordicon.com/onmwuuox.json"
                            trigger="hover"
                            stroke="bold"
                            style={{ width: 25, height: 25 }}>
                        </lord-icon>
                    </span>
                    {/* Input checkbox to allow location access  */}
                    <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-white/30 hover:shadow-md">
                        <input onClick={get_location} type="checkbox" name="enable_location" id="enable_location" className="w-7 h-7 accent-green-500 transition-all duration-300 hover:scale-110 hover:ring-2 hover:ring-green-400" />
                        <label htmlFor="enable_location" className="text-lg font-medium cursor-pointer">Allow location access</label>
                    </div>

                    {/* Display coordinates */}
                    <div className={`min-h-10 w-full rounded-xl ${gotLocation ? 'block' : 'hidden'}`}>
                        <p className='text-center'>{gotLocation ? 'Thanks for your response!' : ""}</p>
                        <button className='m-1 w-full border rounded-xl bg-green-400 text-white' type="submit">Submit</button>
                    </div>
                </div>

                {/* Map Image */}
                <Image
                    src={map_image}
                    width={500}
                    height={500}
                    alt="Map preview"
                    className="rounded-3xl shadow-xl mt-6 md:mt-0 md:ml-12 border-4 border-white/60"
                />
            </div>
            {/* LordIcon script  */}
            <script src="https://cdn.lordicon.com/lordicon.js"></script>
        </>
    )
}

export default page
