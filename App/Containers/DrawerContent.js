import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Actions as NavigationActions, ActionConst } from 'react-native-router-flux'
import autobind from 'autobind-decorator'

import styles from './Styles/DrawerContent.Style.js'
import DrawerButton from '../Components/DrawerButton.js'

@autobind
export default class DrawerContent extends Component {

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handleMain () {
    this.toggleDrawer()
    NavigationActions.main({type: ActionConst.RESET})
  }

  handleAnother() {
    this.toggleDrawer()
    NavigationActions.another({type: ActionConst.RESET})
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <DrawerButton text='Home' onPress={this.handleMain} />
        <DrawerButton text='Another View' onPress={this.handleAnother} />
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}
