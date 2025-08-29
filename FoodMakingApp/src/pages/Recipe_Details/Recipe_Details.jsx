import { useNavigate, useParams } from "react-router-dom";
import useFilter from "../../custom-hook/useFilter";
import RecipeDetail_Card from "../../components/RecipeDetail_Card";
 
function Recipe_Details(){
 
    const {recipeid} = useParams();    
    const [,,result] = useFilter();
    const navigate = useNavigate()
   
   
 
 
    const recipe = result.filter((item) => {
 
 
        return item.id == recipeid
    })
 
    const [data] = recipe
 
   
   
   
 
    return(
    <div className="recipe-detail-container mt-[30px] py-[20px]">
        <div className="recipe-detail-center wrapper">
            {recipe?.length ? <RecipeDetail_Card  data={data} /> : ""}
 
            {/* {recipe?.length == 0  && <div className="img-container w-[100%] min-h-[150px] overflow-hidden ">
                <img src="https://ondc.nlincs.in/_nuxt/img/products-empty.c43fbe0.png" className="w-[100%] h-[100%] object-center object-cover" alt="item not found" />
            </div> } */}
            <button onClick={() => navigate('/recipes')} className="text-[16x] text-white bg-[#cfb02c] px-[10px] py-[7px] mt-[20px] block mx-auto cursor-pointer opacity-80 rounded-[10px]">❮❮❮ Back</button>
            </div>
    </div>
    )
}
 
export default Recipe_Details;