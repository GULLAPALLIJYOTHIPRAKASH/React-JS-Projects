import { useState , useEffect } from "react";
 
function useFetch(){
 
 
        //    user list state with local
       const [users_list , setUsersList] = useState((  () => {
       
        let list = localStorage.getItem("userList");
 
        if(!list){
 
            localStorage.setItem("userList" , JSON.stringify({}));
 
            return({});
        }
     
       
 
        return JSON.parse(list);
    })());
 
        // loading and error state
        const[loading , setLoading] = useState(true);
        const[error , setError] = useState({status: false , msg: ""});
       
        // currentpage state with localstorage
        const [currentPage , setCurrentPage] = useState((   () => {
       
            let cp = localStorage.getItem("currentPage");
   
            if(!cp){
   
                localStorage.setItem("currentPage" , JSON.stringify((Number(1))));
   
                return Number(1);
            }
           
   
            return JSON.parse(cp);
        })());
       
   
        //  fetch all users
        const fetch_users =  async() => {
   
            setLoading(true);
            setError({...error,  status: false});
   
            try {
 
               
                const request = await fetch(`https://randomuser.me/api/?page=${currentPage || 1}&results=10&seed=abc&nat=IN`);
                const response = await request.json();
                const users_data = response.results;
 
 
                //  set state and local
                setUsersList({...users_list , [currentPage] : users_data});
                localStorage.setItem("userList" , JSON.stringify({...users_list , [currentPage] : users_data}));
 
 
                setLoading(false);
                setError({...error,  status: false});
   
               
               
   
   
            } catch (err) {
               
               
                setLoading(false);                
                setError({...error , msg: err?.message ? err.message : `Something Went Wrong...!` , status: true })
               
            }
   
        }
 
 
         
 
 
        //  handle each button
        const handle_count = (e) => {
   
                       
            setCurrentPage(Number(e.target.textContent));
            localStorage.setItem("currentPage" , JSON.stringify(Number(e.target.textContent)))
   
        }
   
       
   
        // handle next btn
        const handle_nxt = () => {
   
         
            if(currentPage >=1 && currentPage<10){
   
                setCurrentPage(Number(currentPage+1));
                localStorage.setItem('currentPage' , JSON.stringify(Number(currentPage+1)));
            }
           
           
        }
   
        // handle previous btn
        const handle_prev = () => {
   
   
            if(currentPage <= 10 && currentPage > 1 ){
   
                setCurrentPage(Number(currentPage-1));
                localStorage.setItem('currentPage' , JSON.stringify(Number(currentPage-1)));
            }
 
         
           
   
        }
 
        //  handle reload when local clear
        const reloading = () => {
 
 
                //  set  current state
                let cp = currentPage;
                let list = users_list;
 
                localStorage.setItem('currentPage' , JSON.stringify(Number(currentPage)));
                localStorage.setItem("userList" , JSON.stringify(users_list));
        }
 
   
        // excute when cp change
        useEffect(() => {
 
            // item index not found
               if(!users_list[currentPage]){
 
                //  fetch
                fetch_users();
               }
 
   
                //    listen  event
            //    window.addEventListener("storage" , reloading);
 
                //    clear event
            //    return (  () => window.removeEventListener("storage" , reloading) );
           
       
        },[currentPage]);    
 
     
 
        return [ users_list , loading , error,  currentPage , handle_count ,handle_nxt , handle_prev ];
   
}
 
export default useFetch;