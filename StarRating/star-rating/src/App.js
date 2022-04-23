import React from 'react';
import './App.css';
import StarRating from './components/StarRating';

export default function App() {
  return (
    <div>
     <StarRating Rating={Rating}/>
    </div>

  )
}

const Rating = [1,2,3,4,5];
