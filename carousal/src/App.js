import React from 'react';
import CardSlider from './components/CardSlider';
import { sliderData } from './components/slider';


export default function App() {
  return (
    <div>
     <h1>Carousal</h1>
     <CardSlider slides={sliderData}/>

     
    </div>
  )
}

