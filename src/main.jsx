import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import EntrarComo from './pages/EntrarComo';
import Login from './pages/Login';
import Registrar from './pages/Registrar';

import { createBrowserRouter, RouterProvider, } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EntrarComo />,
  },
  {
    path: "/LoginPaciente",
    element: <Login />,
  },
  {
    path: "/LoginMedico",
    element: <Login />,
  },
  {
    path: "/CadastroPaciente",
    element: <Registrar />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
