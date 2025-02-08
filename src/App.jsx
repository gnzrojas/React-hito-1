import Header from './components/Header'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'

const App = () => {
  return (
    <div className='app-container'>
      <Navbar />
      <main className='main-content'>
        {/*<Home />
        <Register />*/}
        <Login />
      </main>

      <Footer />
    </div>
  )
}

export default App