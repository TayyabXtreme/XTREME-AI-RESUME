import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignInPage from './auth/sign-in/index.jsx'
import Home from './home/index.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import Dashboard from './dashboard/index.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY


const routes=createBrowserRouter([
  {
    element: <App/>,
    children:[
      {
        path:'/dashboard',
        element:<Dashboard/>
      }
  ]
  },
  {
    path:'/',
    element: <Home/>
  }
  ,
  {
    path:'auth/sign-in',
    element: <SignInPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <RouterProvider router={routes} />
    </ClerkProvider>
  </React.StrictMode>,
)
