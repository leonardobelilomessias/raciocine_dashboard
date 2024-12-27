import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LandingPageScreen } from "../ui/Screens/LandingPageScreen";
import { HomeScreen } from "../ui/Screens/HomeScreen";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { site } from "../../../site";
import { urlFor } from "@/sanity/lib/image";




export default function Home() {
  return (
    <main >
      <HomeScreen/>
    </main>
  );
}
