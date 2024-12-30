import { Blocks, Brush, ChartBarDecreasing, Gauge, MessageCircleQuestion, MonitorSmartphone, Search } from "lucide-react";
import React from "react";
import LandImage from '@/app/assets/images/services/service-seo.webp'
import MetaAdsImage from '@/app/assets/images/services/ads/metaads.webp'
import OthersAdsImage from '@/app/assets/images/services/ads/others-ads.webp'


import Image, { StaticImageData } from "next/image";


type featuresTypes= {
    title: string;
    description: string;
    img: StaticImageData;
    alt: string;
}[]
export function PlataformOne({title,description,data,}:{title:string,description:string,data:featuresTypes}) {
  return (
  
      <main className="container mx-auto py-12 px-6 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center">
          {title}
        </h2>
        <p className="text-lg text-gray-700 mt-4 text-center">
          {description}
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {data.map((feature, index) => (
            <li key={index} className="bg-white shadow-lg rounded-lg p-6">
              <Image src={feature.img} alt={feature.alt}/>
              <h3 className="text-xl font-semibold mb-2 mt-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </li>
          ))}
        </ul>
      </main>

  );
}