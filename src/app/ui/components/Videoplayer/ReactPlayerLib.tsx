// components/VideoPlayer.tsx

'use client'
import { useEffect, useState } from 'react';
import ReactPlayer, {ReactPlayerProps} from 'react-player';

export  function ReactPlayerLib({id}:{id:string}){
  const [isClient, setIsClient] = useState(false)
  
  const [time,setTime] = useState(0)
  useEffect(() => {
    setIsClient(true)
  }, [])
  const [played, setPlayed] = useState<number>(0); // Estado tipado para o progresso do vídeo

  const handleProgress = (state: { played: number; loaded: number }) => {
    setPlayed(state.played); // Atualiza o estado do progresso do vídeo
  };

  const playerConfig: ReactPlayerProps['config'] = {
    file: {
      attributes: {
        preload: 'auto', // Define o pré-carregamento automático
      },
    },
  };
const urlaws = "https://canp.s3.amazonaws.com/vespa.mp4"
const urlGoogle ="https://drive.google.com/file/d/1LHjqylK-uVOx-nX0Ji1bQtJvc9qIRq3E/preview"
const urlyoutube ="https://www.youtube.com/watch?v=CN-TD1Lx7Us"
  return (
<div className="relative pt-[56.25%]">    {/* dont allow url google */}
    {id}
  {isClient&&  <ReactPlayer url={urlaws}   height="100%" width="100%" className="absolute top-0 left-0"  onPause={()=>setTime(0)}controls={true} onProgress={handleProgress} config={playerConfig}  />}
  
  </div>
  
  );
};


