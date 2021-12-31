import React from 'react'
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import RecomendedVideo from './RecomendedVideo'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchPage from './SearchPage'

const App = () => {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route path="/search/:searchTerm">
            <div className='app_page'>
              <Sidebar />
              <SearchPage />
            </div>
          </Route>

          <Route path="/">
            <div className='app_page'>
              <Sidebar />
              <RecomendedVideo />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>







  )
}

export default App
