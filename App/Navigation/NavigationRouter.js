import React from 'react'
import {Router, Scene} from 'react-native-router-flux'

import NavigationDrawer from './NavigationDrawer.js'
import NavItems from './NavItems'
import Styles from './NavigationContainerStyle'
import store from '../Model/MainStore.js'

// screens identified by the router
import MainScreen from '../Containers/MainScreen.js'

class NavigationRouter extends React.Component {
  render () {
    return (
      <Router store={store}>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene key='main' component={MainScreen} renderLeftButton={NavItems.hamburgerItem} title='Main Screen' initial />
          </Scene>
        </Scene>
      </Router>
    )
  }
 }

module.exports = NavigationRouter
