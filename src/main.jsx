import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import AllToys from './Components/Toys/All Toys/AllToys.jsx';
import MyToys from './Components/Toys/My Toys/MyToys.jsx';
import AddToy from './Components/Toys/Add A Toy/AddToy.jsx';
import Login from './Components/Login/Login.jsx';
import SignUp from './Components/SignUp/Signup.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/allToys',
        element:<AllToys></AllToys>
      },
      {
        path:'/myToys',
        element:<MyToys></MyToys>
      },
      {
        path:'/addToy',
        element:<AddToy></AddToy>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signUp',
        element:<SignUp></SignUp>
      }
    ]
  },
 
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
