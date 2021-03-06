import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './config/routes'
import UserModel from './models/user'
import './App.css'

function App(props) {

  const [currentUser, setCurrentUser] = useState(localStorage.getItem('userhl'))

    const storeUser = (userId) => {
    setCurrentUser({ currentUser: userId})
    localStorage.setItem('userhl', userId)
  }

  const logout = (event) => {
    event.preventDefault()

    localStorage.removeItem('userhl')
    UserModel.logout()
      .then(res => {
        console.log(res)
        setCurrentUser(null)
        props.history.push('/login')
      })
  } 

  return (
    <div className="App">
      <Header 
        currentUser={ currentUser } 
        logout={ logout }
      />
      <Routes 
        currentUser={ currentUser }
        storeUser={ storeUser }
      />
     <Footer />
    </div>
  );
}
export default withRouter(App) 