"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import 'dotenv/config';
import 'leaflet/dist/leaflet.css';

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

const Page: React.FC = () => {
    const [gotLocation, setGotLocation] = useState<boolean>(false);
    const [coordinates, setCoordinates] = useState<[number, number] | null>(null);
    const [mapIcon, setMapIcon] = useState<L.Icon | null>(null);
    const [isClient, setIsClient] = useState<boolean>(false);
    const [geoAvailable, setGeoAvailable] = useState<boolean>(false); // New state for geolocation support

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsClient(true);
            setGeoAvailable("geolocation" in navigator); // Check if geolocation is available
            
            import("leaflet").then((L) => {
                setMapIcon(
                    new L.Icon({
                        iconUrl: "/location-01-stroke-rounded.svg",
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                    })
                );
            });
        }
    }, []);

    const get_location = () => {
        if (!geoAvailable) {
            console.error("Geolocation is not supported.");
            return;
        }

        setGotLocation(true);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setCoordinates([position.coords.latitude, position.coords.longitude]);
            },
            (error) => {
                console.error("Error getting location:", error);
            }
        );
    };

    return (
        <>
            <div className="flex flex-col-reverse md:flex-row md:gap-0 gap-4 justify-center items-center min-h-[calc(100vh-4rem)] p-6">
                {/* Location Permission Card */}
                <div className="flex flex-col gap-5 bg-white/20 backdrop-blur-xl border border-green-500 shadow-2xl rounded-3xl p-8 md:w-96 w-full">
                    <span className='flex'>
                        <h1 className="text-3xl font-bold drop-shadow-lg">Enable Location</h1>
                    </span>
                    <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-white/30 hover:shadow-md">
                        <input onClick={get_location} type="checkbox" className="w-7 h-7 accent-green-500 transition-all duration-300 hover:scale-110 hover:ring-2 hover:ring-green-400" />
                        <label className="text-lg font-medium cursor-pointer">Allow location access</label>
                    </div>

                    {/* ✅ Show button/text only after checking geolocation availability */}
                    {isClient && (
                        geoAvailable ? (
                            <button type="submit" className="w-full p-1 rounded-xl bg-green-500 text-white"> Submit </button>
                        ) : (
                            <p className="text-lg font-medium text-red-500">Please turn on location</p>
                        )
                    )}
                </div>

                {/* Map Display */}
                <div className="md:w-1/2 w-full h-[80vh] mt-6 md:mt-0 md:ml-12 border-4 border-white/60 shadow-xl rounded-3xl">
                    {gotLocation && coordinates ? (
                        <MapContainer
                            center={coordinates}
                            zoom={13}
                            scrollWheelZoom={false}
                            className="h-full w-full rounded-3xl z-10"
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {mapIcon && (
                                <Marker position={coordinates} icon={mapIcon}>
                                    <Popup>Your location</Popup>
                                </Marker>
                            )}
                        </MapContainer>
                    ) : (
                        <Image
                            src={'/sample_map.jpg'}
                            width={600}
                            height={500}
                            alt="Map preview"
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default Page;
