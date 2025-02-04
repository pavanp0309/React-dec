
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import '/node_modules/bootstrap/dist/css/bootstrap.css'

createRoot(document.getElementById('root')).render(
  // step:1 enabling the Routing For the app
<BrowserRouter>
    <App />
</BrowserRouter>
)
