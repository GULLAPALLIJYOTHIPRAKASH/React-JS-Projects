function ProductInfo({data}){

    return(<>
    <article className="single-productinfo">

                    <div className="img-container">

                        {/* <img src="https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/thumbnail.webp" alt="" /> */}

                        <img src={data?.thumbnail} alt={data?.title} />

                    </div>

                    <div className="productinfo">

                        <h3 className="title">{data?.title}</h3>

                        <p className="desc">{data?.description}</p>

                        <h3 className="price">Price ${Math.floor(data?.price)} <span className="discount"><i className="fa-solid fa-arrow-trend-down"></i> {Math.floor(data?.discountPercentage)}%</span></h3>

                        <div className="product-status">

                            <h3 className="box-icon warranty"> <i className="fa-solid fa-square-check"></i> <br /> 1 year warranty </h3>

                            <h3 className="box-icon shipping"> <i className="fa-solid fa-truck"></i> <br /> Shipping Available </h3>

                            <h3 className="box-icon stock"> <i className="fa-solid fa-boxes-stacked"></i> <br /> Stock Available </h3>

                        </div>



                    </div>

                </article>
    </>)
}

export default ProductInfo;