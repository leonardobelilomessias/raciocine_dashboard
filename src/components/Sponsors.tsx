import { Radar } from "lucide-react";
import sudoesteLogo from '@/app/assets/logos/sudoeste.png'
import mrvLogo from '@/app/assets/logos/mrv.png'
import direcionalLogo from '@/app/assets/logos/direcional.png'
import quartzoLogo from '@/app/assets/logos/quartzo.png'
import patrimarLogo from '@/app/assets/logos/patrimar.png'
import vicLogo from '@/app/assets/logos/vic3.png'




import Image from "next/image";
interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <Image src={vicLogo}  alt="sudoes-logo" />,
    name: "Sponsor 1",
  },
  {
    icon: <Image src={mrvLogo}  alt="sudoes-logo" />,
    name: "Sponsor 2",
  },
  {
    icon: <Image src={direcionalLogo}  alt="sudoes-logo" />,
    name: "Sponsor 3",
  },
  {
    icon: <Image src={quartzoLogo}  alt="sudoes-logo" />,
    name: "Sponsor 4",
  },
  {
    icon: <Image src={patrimarLogo}  alt="sudoes-logo" />,
    name: "Sponsor 5",
  },
  {
    icon: <Image src={sudoesteLogo}  alt="sudoes-logo" />,
    name: "Sponsor 6",
  },
];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container pt-8 sm:py-22 overflow-hidden"
    >
      <h2 className="text-center text-xl lg:text-2xl font-bold mb-1 text-primary">
        As Maiores construtoras do mercado
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
