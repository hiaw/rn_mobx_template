import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Actions as NavigationActions } from 'react-native-router-flux'

import DrawerButton from '../Components/DrawerButton.js'

export default class DrawerContent extends Component {

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handleAllItems () {
    this.toggleDrawer()
    NavigationActions.wordList()
  }

  handleFirstView () {
    this.toggleDrawer()
    NavigationActions.wordList()
  }

  render () {
    return (
      <ScrollView>
        <DrawerButton text='Home' onPress={this.handleAllItems.bind(this)} />
        <DrawerButton text='Another View' onPress={this.handleFirstView.bind(this)} />
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}
