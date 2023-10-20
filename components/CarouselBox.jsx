'use client';

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import dummy from "@/assets/kavery.jpg";
import Image from "next/image";

const CarouselBox = () => {
  return (
    <>
      <Carousel>
        <div>
          <Image src={dummy} width={100} height={100} />
          <p className="legend">Garden</p>
        </div>
        <div>
          <Image src={dummy} width={100} height={100} />
          <p className="legend">Wash room</p>
        </div>
        <div>
          <Image src={dummy} width={100} height={100} />
          <p className="legend">Vending machine</p>
        </div>
      </Carousel>
    </>
  );
};

export default CarouselBox;
