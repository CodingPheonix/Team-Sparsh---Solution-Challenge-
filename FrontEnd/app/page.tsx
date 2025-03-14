import Carousel from "./Components/Carousal";
import HomeSections from "./Components/HomeSection";

import React, { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <>
      {/* <Navbar/> */}
      <Carousel />
      <HomeSections image={'/demo_map_image.jpg'} heading={'Create Your Areas'} paragraph={'Hey hello guys, app log yaha apna manchaha location create kar sakte ho'} btn_text={'Create'} btn_link={'Create_Polygon'} row={true} />
      <HomeSections image={'/multi_marker_map.jpg'} row={false} heading={"Your Areas"} paragraph={"All your created areas are here"} btn_text={"Visit areas"} btn_link={"All_Polygon"} />
      <HomeSections image={'/hero_1.jpg'} row={true} heading="" paragraph="" btn_text="" btn_link="" />
    </>
  );
}
