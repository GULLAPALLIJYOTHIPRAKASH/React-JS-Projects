import React from "react";
function Card({id , title , img ,reviews , newPrice , prevPrice}){
 
    return(
        <article className="single-item" key={id}>
        <div className="img-container">
            <img src={img} alt={title} />
        </div>
        <div className="item-info">
            <h1 className="item-title">{title}</h1>
            <div className="reviews">
                <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                </div>
                <p className="rating-info">{reviews}</p>
            </div>
            <div className="price-cart">
                <div className="price-info">
                    <span className="prevPrice">{prevPrice}</span>
                    <span className="NewPrice">{newPrice}</span>
                </div>
                <div className="cart"><i className="fa-solid fa-bucket"></i></div>
            </div>
        </div>
    </article>
   
    )
}
 
export default React.memo(Card);