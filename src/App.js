import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Account } from "./pages/account/Account"
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { Regsiter } from "./pages/login/Regsiter"
import { useSelector } from "react-redux"

const App = () => {
  const isLoggIn = useSelector((state) => state.auth.isLoggIn)
  const cartItems = useSelector((state) => state.cart.itemsList)
  console.log(cartItems)
  return (
    <>
      {isLoggIn && (
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/regsiter' component={Regsiter} />
            <Route exact path='/account' component={Account} />
          </Switch>
          <Footer />
        </Router>
      )}
      {!isLoggIn && <Login />}
    </>
  )
}
export default App
