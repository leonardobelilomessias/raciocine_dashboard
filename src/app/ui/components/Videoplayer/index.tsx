
import React, { useEffect, useRef, useState } from 'react';
import { IVideoParams } from '@/app/types/types';
import { VideoReactLib } from './VideoReactLib';
import { ReactPlayerLib } from './ReactPlayerLib';

export function VideoPlayer ({width,height, id}:IVideoParams) {
  return (
    <div>
    {/* <ReactPlayerLib  /> */}
    {/* <VideoIframe/> */}
    <ReactPlayerLib id={id} />
    </div>
  
  );
};


