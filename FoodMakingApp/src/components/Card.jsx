function Card({id ,img , title , desc}){
 
    return(
        <article key={id} className="single-offer p-[15px] flex flex-col justify-center items-center gap-y-[20px]  bg-white-100 rounded-[10px]  [box-shadow:rgba(99,_99,_99,_0.2)_0px_2px_8px_0px]">
        <div className="img-container w-[100px] overflow-hidden">
            <img src={img} alt={title}  className="w-[100%] h-[100%] object-contain object-center"/>
        </div>
        <div className="offer-content">
            <h1 className="text-[#34474] font-bold text-2xl tracking-[1xp] text-center mb-[10px]">{title}</h1>
            <p className="text-black text-[15px] text-justify font-medium">{desc || "We offer our clients excellent quailty services for many years with the best and delicious food in the city."}</p>
        </div>
    </article>
    )
}
 
export default Card;
 