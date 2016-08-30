import React from 'react'
import {Router, Scene} from 'react-native-router-flux'

// view and model for Counter scene
import CounterScreen from '../Containers/CounterScreen.js'
import NavigationDrawer from '../Containers/DrawerContent.js'
import store from '../Model/MainStore.js'

class NavigationRouter extends React.Component {
  render () {
    return (
      <Router store={store}>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
            <Scene key='launch' component={CounterScreen} hideNavBar initial />
        </Scene>
      </Router>
    )
  }
 }

module.exports = NavigationRouter
