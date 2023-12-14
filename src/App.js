import React, { useState } from 'react';
import ReactDOM from'react-dom/client';
import "../style.css";
import HeaderComponent from './components/Header';
import About from './components/About';
import Error from './components/Error';
import Basic from './components/Form';
import Contact from './components/Contact';
import Body from './components/Body';
import Profile from './components/Profile';
import Footer from './components/Footer';
import { createBrowserRouter , RouterProvider,Outlet} from 'react-router-dom';
import RestrauntMenu from './components/RestrauntMenu';
import userContext from './Utils/userContext';
import { Provider } from 'react-redux';
import store from './Utils/store';
import Cart from './components/Cart';

const AppLayout = ()=>{
    const [user,setUser] = useState({
        name:'hehe',
        email:'he@example'
    })
    return(
        <Provider store={store}>
        <userContext.Provider value={{
            user: user,
            setUser: setUser
        }}>
            <HeaderComponent/>
            <Outlet/>
            <Footer/>
        </userContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    { 
        path : '/',
        element: <AppLayout/>,
        errorElement:<Error/>,
        children : [
            {
                path : '/',
                element: <Body/>,
                errorElement:<Error/>
            },
            {
                path : '/about',
                element:   <Contact/>,
                children:[
                    {
                        path:'Profile',
                        element:<Profile/>
                    }
                ]
            },
            {
                path : '/contact',
                element: <About/>
            },
            {
                path : '/restraunt/:resId',
                element : <RestrauntMenu/>
            },
            {
                path : '/basic',
                element: <Basic/>
            },
            {
                path:'/cart',
                element: <Cart/>,
            },

        ]
    }

])


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter}/>);
