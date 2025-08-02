import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";

import IMG1 from "/public/fuk.jpg";
import IMG2 from "/public/fuk2.jpg";
import IMG3 from "/public/kor.jpg";
import IMG4 from "/public/VET.jpeg";
import IMG5 from "/public/moji.jpg";
import IMG6 from "/public/gua.jpg";
import IMG7 from "/public/kamu.jpg";
import IMG8 from "/public/okaya.jpg";

export const images: StaticImageData[] = [
  IMG1,
  IMG2,
  IMG3,
  IMG4,
  IMG5,
  IMG6,
  IMG7,
  IMG8,
];

const Imgs = () => {
  return (
    <div className="w-fit m-5 hidden md:flex">
      <Carousel className="relative max-w-52">
        <CarouselContent>
          {images.map((img, idx) => (
            <CarouselItem key={idx}>
              <Card className="rounded-xl overflow-hidden">
                <CardContent className="relative flex justify-center p-0 z-30">
                  <Image
                    src={img}
                    alt={`portfolio image ${idx + 1}`}
                    width={img.width}
                    height={img.height}
                    className="w-auto h-auto object-center object-cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-50" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-50" />
      </Carousel>
    </div>
  );
};

export default Imgs;
