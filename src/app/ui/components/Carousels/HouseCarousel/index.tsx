'use client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import Header from './Header'
import Footer from './Footer'
import './carrousel.module.css'


export function HouseCarousel ({images}:{images:string[]}) {
  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDE_COUNT = images.length | 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
 return(
   <>
    <EmblaCarousel images={images} slides={SLIDES} options={OPTIONS} />
  </>
  )
}

