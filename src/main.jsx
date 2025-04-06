import React from 'react';
import ReactDOM from 'react-dom/client';
import { Suspense } from 'react';
import App from './app.jsx';  // Changed from './App.jsx' to './app.jsx'
import './index.css';

import { 
  createBrowserRouter, 
  RouterProvider,
  createRoutesFromElements,
  Route 
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} />
  ),
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
