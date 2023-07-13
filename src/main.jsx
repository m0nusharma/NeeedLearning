import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Screen/About/About'
import Contact from './Screen/Contact/Contact.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navigation from './Screen/Navigation/Navigation.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Navigation
  className="float-end"
  title="Check Website"
  titletwo="clients"
/>
  <RouterProvider router={router} />
  
  </React.StrictMode>,
)
