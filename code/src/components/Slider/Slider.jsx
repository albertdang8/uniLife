import React, { useEffect, useState } from 'react'
import './Slider.css'

function Slider({ homeBanner }) {

const { title, subTitle } = homeBanner;

  return (
    <div className='slider-container column a-center j-center'>
        <h1 className='banner-title'>{title}</h1>
        <h3 className='banner-subtitle'>{subTitle}</h3>
    </div>
  )
}

export default Slider