import React, { PropTypes, Component } from 'react'
import Drawer from 'react-native-drawer'
import { DefaultRenderer, Actions as NavigationActions } from 'react-native-router-flux'

import DrawerContent from '../Containers/DrawerContent'

/* *******************
* Documentation: https://github.com/root-two/react-native-drawer
********************/

class NavigationDrawer extends Component {
  static propTypes = {
    navigationState: PropTypes.object
  }

  render () {
    const state = this.props.navigationState
    const children = state.children
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type='overlay'
        content={<DrawerContent />}
        tapToClose
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={{
          drawer: {shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
          main: {paddingLeft: 3}
        }}
        negotiatePan
        tweenHandler={(ratio) => ({
          main: { opacity: (2 - ratio) / 2 }
        })}>
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
    )
  }
}

export default NavigationDrawer

/* <Drawer
 *   ref='navigation'
 *   type='displace'
 *   open={state.open}
 *   onOpen={() => NavigationActions.refresh({key: state.key, open: true})}
 *   onClose={() => NavigationActions.refresh({key: state.key, open: false})}
 *   content={<DrawerContent />}
 *   styles={Styles}
 *   tapToClose
 *   openDrawerOffset={0.2}
 *   panCloseMask={0.2}
 *   negotiatePan
 *   tweenHandler={(ratio) => ({
 *     main: { opacity: Math.max(0.54, 1 - ratio) }
 *   })}
 * >
 * </Drawer>*/
