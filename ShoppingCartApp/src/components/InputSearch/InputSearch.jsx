import "./InputSearch.css";



function InputSearch({ searchItem,handleSearch}){



    return(<>

    <div className="input-search-container">

        <div className="input-search-center wrapper">

          <div className="paddingTopMobile-50 paddingTopDesktop-50">

            <input type="search" name="search" id="search-product" value={searchItem}  onChange={handleSearch} placeholder="Search your products ...!" />

          </div>

        </div>

    </div>

    </>)

}



export default InputSearch;