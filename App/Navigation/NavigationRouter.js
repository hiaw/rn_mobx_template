import React from 'react'
import {Router, Scene} from 'react-native-mobx'

// view and model for Counter scene
import Counter from '../Components/Counter.js'
import store from '../Model/MainStore.js'

class NavigationRouter extends React.Component {
  render () {
    return (
      <Router store={store}>
        <Scene key='launch' component={Counter} hideNavBar />
      </Router>
    )
  }
 }

module.exports = NavigationRouter
