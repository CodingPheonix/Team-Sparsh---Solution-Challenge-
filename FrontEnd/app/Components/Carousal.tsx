"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

interface Slide {
    src: string;
    title: string;
    desc: string;
}

const slides: Slide[] = [
    { src: "/hero_1.jpg", title: "AI-Powered Soil Analysis", desc: "Uses satellite imagery to assess soil moisture, nutrient levels, and composition for optimal crop recommendations." },
    { src: "/hero_2.jpg", title: "Smart Crop & Fertilizer Recommendations", desc: "Suggests the best crops to grow based on soil conditions and provides precise fertilizer and water usage guidance." },
    { src: "/hero_3.jpg", title: "Real-Time Weather Insights & Alerts", desc: "Integrates weather data to help farmers plan ahead and take precautions against climate-related risks." },
    { src: "/hero_4.jpg", title: "Sustainable Resource Management", desc: "Optimizes water and fertilizer usage to reduce waste and improve environmental sustainability." },
    { src: "/hero_5.jpg", title: "Farmer-Friendly Digital Dashboard", desc: "Provides an intuitive interface for farmers to access insights, recommendations, and alerts in a simple, actionable format." }
];

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    return (
        <div className="relative w-full mx-auto overflow-hidden h-[calc(100vh-4rem)]">
            <div className="relative w-auto h-full flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)`}}>
                {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0 relative h-full">
                        <Image
                            src={slide.src}
                            alt={slide.title}
                            width={1920}
                            height={1080}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-4">
                            <h2 className="text-xl sm:text-3xl md:text-5xl font-bold max-w-[90%]">{slide.title}</h2>
                            <p className="mt-2 text-sm sm:text-lg max-w-[80%]">{slide.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full grid place-items-center">
                <MdArrowBackIos size={24} />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full grid place-items-center">
                <MdArrowForwardIos size={24} />
            </button>

            {/* Dots Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-3 w-3 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-white scale-125" : "bg-gray-400"}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
