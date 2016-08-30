import React from 'react'
import {Router, Scene} from 'react-native-router-flux'

// view and model for Counter scene
import CounterScreen from '../Containers/CounterScreen.js'
import store from '../Model/MainStore.js'

class NavigationRouter extends React.Component {
  render () {
    return (
      <Router store={store}>
        <Scene key='launch' component={CounterScreen} hideNavBar />
      </Router>
    )
  }
 }

module.exports = NavigationRouter
