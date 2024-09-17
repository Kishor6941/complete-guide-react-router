import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import GlobalContainer from './context/GlobalContext'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <GlobalContainer>
    <App />
  </GlobalContainer>
  </BrowserRouter>,
  </StrictMode>
)
