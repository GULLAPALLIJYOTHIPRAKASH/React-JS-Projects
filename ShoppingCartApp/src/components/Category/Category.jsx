import "./Category.css";
import React from "react";

function Category({ handleCategory}){

    const data = [
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches"
]
    return(<>
    <div className="category common">
        <h1 className="sidebar-title">Category</h1>
        <div className="all-labels">
            <label className="sidebar-label-container">
                <input type="radio" name="category"  value=""  onChange={handleCategory} />
                <span className="checkmark"></span>All
            </label>
            {data.map((item , index) => {
                
                return(
                    <label key={item + index} className="sidebar-label-container">
                        <input type="radio" name="category"    value={item} onChange={handleCategory}/>
                        <span className="checkmark"></span>{item}
                    </label>
                )

            })}
            
        </div>

    </div>
    
   </>)
}

export default Category;