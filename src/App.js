import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"
import './index.scss'
import {AlertState} from "./context/alert/alertState"
import {GitHubState} from "./context/gitHub/gitHubState"

const App = () => {
  return (
    <GitHubState>
      <AlertState>
        <BrowserRouter>
          <Navbar/>
          <div className='container pt-4'>
            <Switch>
              <Route path={'/'} exact component={Home}/>
              <Route path={'/about'} component={About}/>
              <Route path={'/profile'} component={Profile}/>
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GitHubState>
  )
}

export default App
