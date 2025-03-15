"use client"
import React, { JSX } from 'react'
// import Image from 'next/image'
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
// const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
// const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

const page = (): JSX.Element => {

    // const [polygon_list, setPolygon_list] = useState<Polygon[]>([])

    type Polygon = {
        id: number;
        name: string;
        area: number;
        coordinates: { lat: number; lon: number };
    }

    const samplePolygons: Polygon[] = [
        {
            id: 1,
            name: "Central Park",
            area: 3.41,
            coordinates: { lat: 40.7851, lon: -73.9683 },
        },
        {
            id: 2,
            name: "Golden Gate Park",
            area: 4.12,
            coordinates: { lat: 37.7694, lon: -122.4862 },
        },
        {
            id: 3,
            name: "Hyde Park",
            area: 1.42,
            coordinates: { lat: 51.5074, lon: -0.1657 },
        },
        {
            id: 4,
            name: "Griffith Park",
            area: 17.00,
            coordinates: { lat: 34.1366, lon: -118.2942 },
        },
        {
            id: 5,
            name: "Stanley Park",
            area: 4.05,
            coordinates: { lat: 49.3043, lon: -123.1443 },
        },
    ];


    return (
        <>
            <div className='flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-6'>
                <h2 className="font-bold text-green-500 text-3xl p-5 drop-shadow-lg w-full text-start">
                    My Areas
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {samplePolygons.map((polygon) => (
                        // Map each polygon to a card
                        <div key={polygon.id} className="bg-white shadow-lg rounded-xl overflow-hidden border min-h-[60vh] min-w-[20vw] hover:scale-105 transition-transform duration-300">
                            <div className="w-full h-40 object-cover">
                                <MapContainer
                                    center={[polygon.coordinates.lat, polygon.coordinates.lon]}
                                    zoom={13}
                                    zoomControl={false} // Disable zoom controls
                                    dragging={false} // Disable dragging
                                    scrollWheelZoom={false} // Disable zooming with the scroll wheel
                                    doubleClickZoom={false} // Disable double-click zoom
                                    touchZoom={false} // Disable pinch-to-zoom on touch devices
                                    keyboard={false} // Disable keyboard navigation
                                    className="h-full w-full z-10"
                                >
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                </MapContainer>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{polygon.name}</h3>
                                <p className="text-gray-600">Area: {polygon.area} km²</p>
                                <p className="text-gray-500 text-sm">
                                    Lat: {polygon.coordinates.lat}, Lon: {polygon.coordinates.lon}
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
