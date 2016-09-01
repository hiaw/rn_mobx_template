import React from 'react'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'

const openDrawer = () => {
  NavigationActions.refresh({
    key: 'drawer',
    open: true
  })
}

export default {
  backButton () {
    return <Icon.Button
      color='black'
      backgroundColor='transparent'
      name='angle-left'
      onPress={NavigationActions.pop} />
  },
  hamburgerButton () {
    return <Icon.Button
      color='black'
      backgroundColor='transparent'
      name='bars'
      onPress={openDrawer} />
  }
}
