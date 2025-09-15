import "./InputSearch.css";
import React from "react";


function InputSearch({ searchItem,handleSearch}){



    return(<>

    <div className="input-search-container">

        <div className="input-search-center">

          <div className="paddingTopMobile-20 paddingTopDesktop-20">

            <input type="search" name="search" id="search-product" value={searchItem}  onChange={handleSearch} placeholder="Search your products ...!" />

          </div>

        </div>

    </div>

    </>)

}



export default React.memo(InputSearch);