import "./App.css";
import React, { useContext, useState } from "react";
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
function App(){
 
    const [close , setClose] = useState(false);
   
    const handle_Hambergur = () => {
 
    setClose(!close)
    }
 
 
 
    const LazyContact = React.lazy(() => import("./Pages/Contact/Contact"));
    const LazyAbout = React.lazy(() => import("./Pages/About/About"));
    const LazyRecipes = React.lazy(() => import("./Pages/Recipes/Recipes"));
    const LazyHome = React.lazy(() => import("./Pages/Home/Home"));
    const LazyRecipeDetails = React.lazy(() => import("./Pages/Recipe_Details/Recipe_Details"));
   
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
    </Routes>
 
    <Footer/>
 
   
 
    </>)
}
 
export default App;