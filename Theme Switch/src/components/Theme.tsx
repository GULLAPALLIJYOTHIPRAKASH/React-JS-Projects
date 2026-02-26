import './Theme.css';
import useTheme from '../custom-hooks/UseTheme';




function Theme(){



    const  { value:theme , setThemeValue} = useTheme("theme" , "dark");



    const handleTheme = () => {



        setThemeValue(theme === "light" ? "dark" : "light")

    }



    return(<>

  <div className="container" data-theme={`theme-${theme}`}>

    <div className="center wrapper">

        <div className="sun-moon">

            <span className={theme}></span>

        </div>

        <div className="content">

        <h2>Choose a mode</h2>

        <p>Light or dark</p>

   <i  onClick={handleTheme} className={theme === "light" ? "fa-solid fa-moon" : "fa-solid fa-sun"}></i>

        </div>

    </div>

  </div>

    </>)

}



export default Theme;