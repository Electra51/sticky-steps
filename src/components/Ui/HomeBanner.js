"use client";
import Image from "next/image";
import { Carousel } from "keep-react";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
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
        <Image
          src="https://images.prismic.io/staticmania/a5c7143d-24dd-4531-9f00-243f4eb27e28_3.png?auto=compress,format"
          alt="slider-3"
          height={560}
          width={910}
        />
        <Image
          src="https://images.prismic.io/staticmania/c5cf46a8-b10c-43c8-a60e-6692838cdee1_4.png?auto=compress,format"
          alt="slider-4"
          height={560}
          width={910}
        />
      </Carousel>
    </div>
  );
};
