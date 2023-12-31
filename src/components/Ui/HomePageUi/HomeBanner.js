"use client";
import Image from "next/image";
import { Carousel } from "keep-react";
import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
export const HomeBanner = () => {
  return (
    <div>
      <Carousel
        slideInterval={5000}
        showControls={true}
        indicators={true}
        className="min-h-[700px] w-full">
        <Image src={img1} alt="slider-1" height={400} width={910} />
        <Image src={img2} alt="slider-2" height={560} width={910} />
      </Carousel>
    </div>
  );
};
