import { Radar } from "lucide-react";
import sudoesteLogo from '@/app/assets/logos/sudoeste.png'
import mrvLogo from '@/app/assets/logos/mrv.png'
import direcionalLogo from '@/app/assets/logos/direcional.png'
import quartzoLogo from '@/app/assets/logos/quartzo.png'
import patrimarLogo from '@/app/assets/logos/patrimar.png'
import vicLogo from '@/app/assets/logos/vic3.png'
import youtubeLogo from '@/app/assets/logos/sponsors/youtubelogo.png'
import googleLogo from '@/app/assets/logos/sponsors/googleLogo.png'
import metaLogo from '@/app/assets/logos/sponsors/metaLogo.png'
import analiticsLogo from '@/app/assets/logos/sponsors/Google-Analytics-Logo.png'
import awsLogo from '@/app/assets/logos/sponsors/awsLogo.png'
import reactLogo from '@/app/assets/logos/sponsors/reactLogo.png'









import Image from "next/image";
interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <Image src={metaLogo}  alt="sudoes-logo" />,
    name: "Sponsor 1",
  },
  {
    icon: <Image src={googleLogo}  alt="sudoes-logo" />,
    name: "Sponsor 2",
  },
  {
    icon: <Image src={youtubeLogo}  alt="sudoes-logo" />,
    name: "Sponsor 3",
  },
  {
    icon: <Image src={analiticsLogo}  alt="sudoes-logo" />,
    name: "Sponsor 4",
  },
  {
    icon: <Image src={awsLogo}  alt="sudoes-logo" />,
    name: "Sponsor 5",
  },
  {
    icon: <Image src={reactLogo}  alt="sudoes-logo" />,
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
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex min-h-[50px]  min-w-[200px] items-center gap-1 text-muted-foreground/60"
          >
            <span>{icon}</span>

          </div>
        ))}
            {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex min-h-[50px]  min-w-[200px] items-center gap-1 text-muted-foreground/60"
          >
            <span>{icon}</span>

          </div>
        ))}
                    
      </div>
      
    </section>
  );
};
