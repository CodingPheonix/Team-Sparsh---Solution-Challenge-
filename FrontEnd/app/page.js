import Image from "next/image";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Home_sections from "./Components/Home_sections";

import hero_1 from '../public/hero_1.jpg'

export default function Home() {
  return (
    <>
        {/* <Navbar/> */}
        <Carousel/>
        <Home_sections image={hero_1} row={true}/>
        <Home_sections image={hero_1} row={false}/>
        <Home_sections image={hero_1} row={true}/>
    </>
  );
}
