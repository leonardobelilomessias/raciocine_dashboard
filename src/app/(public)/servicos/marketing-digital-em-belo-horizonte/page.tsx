import { Button } from "@/components/ui/button";
import Image from "next/image";

import { Metadata } from "next";
import { HomeScreen } from "@/app/ui/Screens/HomeScreen";
import { HomeMarketing } from "@/app/ui/Screens/HomeMaketing";


export default function Home() {
  return (
    <main >
      <HomeMarketing/>
    </main>
  );
}
