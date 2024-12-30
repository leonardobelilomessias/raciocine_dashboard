import { Radar } from "lucide-react";

import youtubeLogo from '@/app/assets/logos/sponsors/youtubelogo.webp'
import googleLogo from '@/app/assets/logos/sponsors/googleLogo.webp'
import metaLogo from '@/app/assets/logos/sponsors/metaLogo.webp'
import analiticsLogo from '@/app/assets/logos/sponsors/Google-Analytics-Logo.webp'
import awsLogo from '@/app/assets/logos/sponsors/awsLogo.webp'
import reactLogo from '@/app/assets/logos/sponsors/reactLogo.webp'









import Image, { StaticImageData } from "next/image";
interface SponsorProps {
  image: StaticImageData;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    image: metaLogo ,
    name: "Sponsor 1",
  },
  {
    image: googleLogo,
    name: "Sponsor 2",
  },
  {
    image: youtubeLogo,
    name: "Sponsor 3",
  },
  {
    image: analiticsLogo,
    name: "Sponsor 4",
  },
  {
    image:awsLogo,
    name: "Sponsor 5",
  },
  {
    image: reactLogo,
    name: "Sponsor 6",
  },
  
];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container pt-8 sm:py-20 overflow-hidden "
    >
      <h2 className="text-center text-md   text-primary">
        
      </h2>

      <div className="flex h-[150px]  justify-center items-center gap-4 md:gap-8  animate-marqueeSm md:animate-marquee min-w-[2800px] ">
        {sponsors.map(({ image, name }: SponsorProps) => (
          <div
            key={name}
            className="flex min-h-[50px]  min-w-[200px] items-center gap-1 text-muted-foreground/60"
          >
            <span><Image loading="lazy" src={image} width={200} height={200} alt={name}/></span>

          </div>
        ))}
            {sponsors.map(({ image, name }: SponsorProps) => (
          <div
            key={name}
            className="flex min-h-[50px]  min-w-[200px] items-center gap-1 text-muted-foreground/60"
          >
            <span><Image loading="lazy" src={image} width={200} height={200} alt={name}/></span>

          </div>
        ))}
                    
      </div>
      
    </section>
  );
};
