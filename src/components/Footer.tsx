import { Hotel } from "lucide-react";
import { LogoIcon } from "./Icons";
import BrainLogo from '@/app/assets/logos/brain_logo.webp' 
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noopener"
            href="/"
            className="font-bold text-xl flex gap-2"
          >
            <Image  loading="lazy" alt="raciocine-logo-marketing" width={27} height={60} src={BrainLogo} />
          Raciocine
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Siga-nos</h3>
          <div>
            <Link target="_blank"
              rel="noopener"
              href="https://www.instagram.com/raciocinesolucoes"
              className="opacity-60 hover:opacity-100"
            >
              Instagram
            </Link>
          </div>

          <div>
            <Link
              target="_blank"
              rel="noopener"
              href="https://www.youtube.com/channel/UCMzeWJnftwbxYFTDekhRwzg"
              className="opacity-60 hover:opacity-100"
            >
              Youtube
            </Link>
          </div>

          <div>
            <Link
              target="_blank"
              rel="noopener"
              href="https://www.facebook.com/profile.php?id=61554327154649"
              className="opacity-60 hover:opacity-100"
            >
              Facebook
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Links</h3>
          <div>
            <a
              rel=" noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Suporte
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Contato
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Desktop
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Sobre</h3>
          <div>
            <Link
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Quem somos
            </Link>
          </div>

          <div>
            <Link
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Missão
            </Link>
          </div>

          <div>
            <Link
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Plataforma</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Videos
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Ebooks
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Posts
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 Software e Maketing Digital em Belo Horizonte - {" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/in/leopoldo-miranda/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
          Raciocine
          </a>
        </h3>
      </section>
    </footer>
  );
};
