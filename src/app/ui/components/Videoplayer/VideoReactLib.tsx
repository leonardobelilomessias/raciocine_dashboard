// components/VideoPlayer.tsx

import { Player } from 'video-react';

interface VideoPlayerProps {
  src?: string;
  poster?: string;
  width?: number;
  height?: number;
}

export function VideoReactLib ({  width = 640, height = 264 }){

  const urlaws = "https://canp.s3.amazonaws.com/vespa.mp4"
  const urlGoogle ="https://drive.google.com/file/d/1LHjqylK-uVOx-nX0Ji1bQtJvc9qIRq3E/preview"
  const urlyoutube ="https://www.youtube.com/watch?v=CN-TD1Lx7Us"



  return (
    <>
      <Player
    
      playsInline
      fluid={false}
      width={width}
      height={height}
      
      src={urlaws} // Passando URL do vídeo do YouTube
    >
    </Player>
    
    </>
  
  );
};


