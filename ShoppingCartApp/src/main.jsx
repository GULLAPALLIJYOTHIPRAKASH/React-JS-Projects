import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import { store } from './Redux/store.js';
import {QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
        <BrowserRouter>
        <Provider store={store}>
        <QueryClientProvider client={queryClient}>

        <App/>
        </QueryClientProvider>
        </Provider>
        </BrowserRouter>
)
