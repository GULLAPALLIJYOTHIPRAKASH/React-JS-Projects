import "./App.css"
import Banner from "./components/Banner";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NewArrivals from "./components/NewArrivals";
import ShopCategory from "./components/ShopCategory";
import Subscription from "./components/Subscription";
import SummerSale from "./components/SummerSale";
import Testmonial from "./components/Testmonial";
import SocialMedia from "./components/SocialMedia";


function App(){


    return(<>
    <Navbar/>
    <Banner/>
    <ShopCategory/>
    <FeaturedProducts/>
    <SummerSale/>
    <NewArrivals/>
    <Testmonial/>
    <SocialMedia/>
    <Subscription/>
    <Footer/>
  
    </>)
}

export default App;