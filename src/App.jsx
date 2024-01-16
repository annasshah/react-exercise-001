import { Navbar } from './components/Navbar'
import { Products } from './components/Products'
import { RouterApp } from './config/RouterApp'

function App() {

  return (
    <div className='space-y-12'>
    <Navbar />
    
      <Products />
    </div>
  )
}

export default App
