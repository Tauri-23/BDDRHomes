import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'

// CSS
import '././assets/css/app.css';
import '././assets/css/elements.css';
import '././assets/css/navbar.css';
import '././assets/css/footer.css';
import '././assets/css/form.css';

import '././assets/css/signinup.css';

import '././assets/css/listings.css';

import '././assets/css/modals.css';

import '././assets/css/property-box.css';

import '././assets/css/view-property-listing.css';


// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ContextProvider } from './contexts/ContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router}/>
    </ContextProvider>    
  </React.StrictMode>
)
