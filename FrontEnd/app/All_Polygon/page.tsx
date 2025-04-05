"use client"
import React, { JSX, useEffect, useState } from 'react'
// import Image from 'next/image'
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { Polygon } from 'react-leaflet';

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
// const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
// const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

const page = (): JSX.Element => {

    const [polygon_list, setPolygon_list] = useState<Polygon[]>([])

    type Polygon = {
        id: number;
        name: string;
        area: number;
        center: string;
    }

    // const samplePolygons: Polygon[] = [
    //     {
    //         id: 1,
    //         name: "Central Park",
    //         area: 3.41,
    //         coordinates: { lat: 40.7851, lon: -73.9683 },
    //     },
    //     {
    //         id: 2,
    //         name: "Golden Gate Park",
    //         area: 4.12,
    //         coordinates: { lat: 37.7694, lon: -122.4862 },
    //     },
    //     {
    //         id: 3,
    //         name: "Hyde Park",
    //         area: 1.42,
    //         coordinates: { lat: 51.5074, lon: -0.1657 },
    //     },
    //     {
    //         id: 4,
    //         name: "Griffith Park",
    //         area: 17.00,
    //         coordinates: { lat: 34.1366, lon: -118.2942 },
    //     },
    //     {
    //         id: 5,
    //         name: "Stanley Park",
    //         area: 4.05,
    //         coordinates: { lat: 49.3043, lon: -123.1443 },
    //     },
    // ];

    const get_allPolygons = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/get_polygon/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        return { response, result };
    };

    useEffect(() => {
        const helper = async () => {
            const { response, result } = await get_allPolygons();
            if (response.status === 200) {
                console.log(result)
                setPolygon_list(result.data)
            }
        }
        helper()
    }, [])

    console.log(polygon_list);


    return (
        <>
            <div className='flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-6'>
                <h2 className="font-bold text-green-500 text-3xl p-5 drop-shadow-lg w-full text-start">
                    My Areas
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {polygon_list && polygon_list.map((each_polygon) => (
                        // Map each polygon to a card
                        <div
                            key={each_polygon.id}
                            className="bg-white shadow-lg rounded-xl overflow-hidden border min-h-[60vh] min-w-[20vw] hover:scale-105 transition-transform duration-300"
                        >
                            <div className="w-full h-40 object-cover">
                                <MapContainer
                                    center={JSON.parse(each_polygon.center)}
                                    zoom={13}
                                    zoomControl={false}
                                    dragging={false}
                                    scrollWheelZoom={false}
                                    doubleClickZoom={false}
                                    touchZoom={false}
                                    keyboard={false}
                                    className="h-full w-full z-10"
                                >
                                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                </MapContainer>
                            </div>
                            <div className="p-4">
                                <h3 className="text-[15px] font-semibold">{each_polygon.name}</h3>
                                <p className="text-gray-600">Area: {each_polygon.area} ha</p>
                                <p className="text-gray-500 text-sm">
                                    Lat: {JSON.parse(each_polygon.center)[0]}, Lon: {JSON.parse(each_polygon.center)[1]}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default page
