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
import AuthProvider from './Provider/AuthProvider.jsx';
import Blogs from './Components/Blogs/Blogs.jsx';
import PrivateRoute from './Components/PrivateRote/PrivateRoute.jsx';
import UpdatedToy from './Components/Toys/My Toys/UpdatedToy.jsx';
import ToyDetails from './Components/Toys/ToyDetils/ToyDetails.jsx';

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
        element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path:'/addToy',
        element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signUp',
        element:<SignUp></SignUp>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/updateToy/:id',
        element:<UpdatedToy></UpdatedToy>,
        loader:({params}) => fetch(`http://localhost:5000/allToy/${params.id}`)
      },
      {
        path:'/toyDetails/:id',
        element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader:({params}) => fetch(`http://localhost:5000/allToy/${params.id}`)
      }
    ]
  },
 
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
