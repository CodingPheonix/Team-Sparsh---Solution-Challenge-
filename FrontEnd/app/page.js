import Image from "next/image";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Home_sections from "./Components/Home_sections";
import map_image from '../public/demo_map_image.jpg'

import hero_1 from '../public/hero_1.jpg'

export default function Home() {
  return (
    <>
        {/* <Navbar/> */}
        <Carousel/>
        <Home_sections image={map_image} heading={'Create Your Areas'} paragraph={'Hey hello guys, app log yaha apna manchaha location create kar sakte ho'} btn_text={'Create'} btn_link={'Create_Polygon'} row={true}/>
        <Home_sections image={hero_1} row={false}/>
        <Home_sections image={hero_1} row={true}/>
    </>
  );
}
