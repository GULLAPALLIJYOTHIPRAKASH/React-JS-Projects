import { Link } from "react-router-dom"

function ProductCard({id, thumbnail , title}){

    return(<>
      <Link to={`/${id}`} key={id}>

                        <article key={id} className="single-product">

                        <div className="img-container">

                        <img src={thumbnail} alt={title} />

                        </div>

                        <div className="content">

                        <p className="product-title">{title}</p>

                        </div>



                        </article>

                            </Link></>)
}

export default ProductCard