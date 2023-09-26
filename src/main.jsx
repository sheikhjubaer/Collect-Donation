import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import DonationDetails from './components/DonationDetails/DonationDetails';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';
import SearchedCategory from './components/SearchedCategory/SearchedCategory';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/donation/:id',
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('../public/donationsCategory.json')
      },
      {
        path: '/donations',
        element: <Donation></Donation>,
        loader: () => fetch('../public/donationsCategory.json')
      },
      // {
      //   path: '/statistics',
      //   element: <Statistics></Statistics>
      // },
      {
        path: '/searchedDonation/:title',
        element: <SearchedCategory></SearchedCategory>,
        loader: () => fetch('../public/donationsCategory.json') 
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
