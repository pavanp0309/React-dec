import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store} >
    <App />
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
