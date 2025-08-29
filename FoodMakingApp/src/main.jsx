import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import { FavContextProvider } from './Context/FavContext.jsx'
 
 
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <FavContextProvider>
    <App />
    </FavContextProvider>
    </BrowserRouter>
   
)