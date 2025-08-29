function Button({value , handle_Button , title , bgClr}){
 
    return(<>
    <button value={value} onClick={handle_Button} style={{backgroundColor : bgClr}} className="rounded-[5px] cursor-pointer hover:opacity-70 border-gray-400 p-[4px_5px] text-white bg-[#EF5350]">{title}</button>
 
    </>)
}
 
export default Button;
 