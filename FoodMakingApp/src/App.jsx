import "./App.css";
import React, { useCallback, useContext, useState } from "react";
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import Loading from "./components/Loading.jsx";
import { ToastContainer} from 'react-toastify';

function App(){
 
    const [close , setClose] = useState(false);
   
    const handle_Hambergur = useCallback(() => {
 
    setClose(!close)
    },[close])
 
 
 
    const LazyAbout = React.lazy(() => import("./pages/About/About.jsx"));
    const LazyContact = React.lazy(() => import("./pages/Contact/Contact.jsx"));
    const LazyRecipes = React.lazy(() => import("./pages/Recipes/Recipes.jsx"));
    const LazyHome = React.lazy(() => import("./pages/Home/Home.jsx"));
    const LazyRecipeDetails = React.lazy(() => import("./pages/Recipe_Details/Recipe_Details.jsx"));
   
    return (<>
    <Navbar  close={close} handle_Hambergur={handle_Hambergur}/>
    <Sidebar  close={close} handle_Hambergur={handle_Hambergur}/>
 
    <Routes>
        <Route path="/" element={<React.Suspense fallback={<Loading/>}>
        <LazyHome/>
        </React.Suspense>} />
        <Route path="/about" element={<React.Suspense fallback={<Loading/>}>
        <LazyAbout/>
        </React.Suspense>} />
        <Route path="/recipes" element={<React.Suspense fallback={<Loading/>}>
        <LazyRecipes/>
        </React.Suspense>} />
        <Route path="/recipes/:recipeid" element={<React.Suspense fallback={<Loading/>}>
        <LazyRecipeDetails/>
        </React.Suspense>} />
        <Route path="/contact" element={<React.Suspense fallback={<Loading/>}>
            <LazyContact/>
        </React.Suspense>} />
        <Route path="*" element={<React.Suspense fallback={<Loading/>}> <LazyHome/> </React.Suspense>} />
    </Routes>
 
    <Footer/>
    <ToastContainer   autoClose={1000} />
 
   
 
    </>)
}
 
export default App;