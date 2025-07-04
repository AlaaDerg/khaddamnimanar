// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { router } from "./App.jsx";
// import { RouterProvider } from "react-router-dom";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
