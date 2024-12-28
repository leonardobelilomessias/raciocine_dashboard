"use client"
import Image from 'next/image';
import { useState } from 'react';
import tumb from "@/app/assets/images/tumbnail-video/tumbnail-video.webp"
export function VideoYoutube() {
 const [playing, setPlaying] = useState(false);

 return (
   <div>
     {!playing ? (
       <Image
       alt='tmbnail'
         src={tumb}
         onClick={() => setPlaying(true)}
       />
     ) : (
<iframe
  loading="lazy"
  src={`https://www.youtube.com/embed/e-VjPNciRT4?autoplay=true`}
  allow='true'

  frameBorder="0"
  allowFullScreen
/>

       
     )}

   </div>
 );
}