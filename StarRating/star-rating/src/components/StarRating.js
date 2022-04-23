import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
import {FaStar} from 'react-icons/fa';

export default function StarRating({ Rating }) {

  const [selectStar, setSelectStar] = useState(null);
  const [hoverStar, setHoverStar] = useState(null);

  return (
    <div className="card">
      <div className="card-header">
        <p className="title">Star Rating</p>
      </div>

      <div className="card-body">
          {selectStar}
        <div className="stars">
          {Rating.map((rating) => {
            return (
              <label>
                  <input
                  type="radio"
                  name="rating"
                  value={rating}
                  onClick = {() => setSelectStar(rating)}
                  onMouseEnter = {() => {setHoverStar(rating)}}
                  onMouseLeave = {() => setHoverStar(null)}
                  />
                  <FaStar className="star" size={100} color={rating <= (hoverStar || selectStar)? '#d2d221': '#555'}/>
                  
              </label>
            //   <span key={rate} >
            //     <FontAwesomeIcon
            //        className = {"star" 
            //       }
            //       icon={faStar}
            //       onClick={() => setSelectStar(rate)}
            //       onMouseEnter = {() => {setHoverStar(rate)}}
            //       onMouseLeave = {() => setHoverStar(null)}
            //     />
            //   </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
