import React from "react";
import { AiFillStar } from "react-icons/ai";



const Card = ({img, title, reviews}) => {

  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h5 className="card-title">{title}</h5>
            <section className="card-reviews">
                <AiFillStar className="rating-star" />
                <span className="total-reviews">{reviews}</span>
             </section>
            <section className="card-more">
                
            </section>
        </div>
      </section>
    </>
  );
};

export default Card;
