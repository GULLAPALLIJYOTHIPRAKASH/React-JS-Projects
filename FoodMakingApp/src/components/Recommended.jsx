import Button from "./Button";

 
function Recommended({handle_Button}){
 
    return(<>
    <div className="recommended-container">
        <div className="recommended-center wrapper text-center flex flex-row flex-wrap gap-[10px] justify-center items-center">
            <Button value="" handle_Button={handle_Button} bgClr="#EC407A"  title="🥤All Recipes"/>
            <Button value="favourite" handle_Button={handle_Button} bgClr="#687FE5"  title="⭐Favourite"/>
            <Button value="breakfast" handle_Button={handle_Button} bgClr="#EF5350"  title="🥪Breakfast"/>
            <Button value="lunch" handle_Button={handle_Button} bgClr="#42A5F5" title="🍛Lunch"/>
            <Button value="dinner" handle_Button={handle_Button} bgClr="#66BB6A" title="🍝Dinner"/>
            <Button value="snack" handle_Button={handle_Button} bgClr="#26A69A" title="🍪Snack"/>
            <Button value="dessert" handle_Button={handle_Button} bgClr="#f6e05e" title="🍨Dessert"/>
        </div>
    </div>
   
    </>)
}
 
export default Recommended;
 