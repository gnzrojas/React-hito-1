import Header from './components/Header'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'
import Cart from './components/Cart'

const App = () => {
  return (
    <div className='app-container'>
      <Navbar />
      {/* <Home /> */}
      <main className='main-content'>
        <Cart />
        {/*<Login />
        <Register />*/}
      </main>

      <Footer />
    </div>
  )
}

export default App