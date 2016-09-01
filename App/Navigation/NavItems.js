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
    return <Icon.Button name='bars' color='#3b5998' onPress={NavigationActions.pop} />
  },
  hamburgerButton () {
    return <Icon.Button name='bars' color='#3b5998' onPress={openDrawer} />
  }
}
