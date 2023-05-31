import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Campaign from './Components/Campaign';
import Home from './Components/Home';
import Error from './Components/Error';
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/campaign',
          element: <Campaign/>,
        },
      ],
    }
  ]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
