import React from 'react'
import {
  Text,
  View
} from 'react-native'
import styles from './Components/Styles/Root.Style.js'
import NavigationRouter from './Navigation/NavigationRouter.js'

class Root extends React.Component {
  render () {
    return (
      <NavigationRouter />
    )
  }
}

module.exports = Root
