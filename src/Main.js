import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import PurchaseEntry from './PurchaseEntry'
import Settings from './Settings'

import './css/font-awesome.min.css'
import './css/bootstrap.min.css'
import './css/slick.css'
import './css/slick-theme.css'
import './css/nouislider.min.css'
import './css/style.css'

var adminTheme = '';
adminTheme = localStorage.getItem('secondaryColor')
const theme = getMuiTheme({
  palette: {
    primary1Color: adminTheme ? adminTheme : '#4CAF50'
  }
})

class Main extends React.Component {
  render () {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <Router>
          <div style={{width: '100%'}}>
            <Route exact path='/login' component={Login} />
            <Route path='/home' component={Home} />
            <Route path='/purchaseEntry' component={PurchaseEntry} />
            <Route path='/settings' component={Settings} />
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default Main
