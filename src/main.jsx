import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Test from '../components/Test.jsx'
import Game from '../components/Game.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
<Game></Game> 
 </StrictMode>,
)
