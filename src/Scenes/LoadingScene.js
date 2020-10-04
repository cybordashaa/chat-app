/* eslint-disable prettier/prettier */
// @ts-nocheck
/* eslint-disable prettier/prettier */
// @ts-ignore
import React, {Component} from 'react';
// @ts-ignore
import {View, Text} from 'react-native';

// @ts-ignore
import {Router, Scene} from 'react-native-router-flux';
import AnimateScene from './AnimatedScene';
import Auth from './Auth';
import Login from './Auth/Login';
import Register from './Auth/Register';
import ChatRoom from './ChatRoom';

export default class LoadingScene extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <Router userProps={this.props}>
          <Scene key="root" hideNavbar={true}>
            <Scene
              key="loading"
              initial={true}
              hideNavBar={true}
              component={AnimateScene}
            />
            <Scene key="auth" component={Auth} hideNavBar={true} />
            <Scene key="login" component={Login} hideNavBar={true} />
            <Scene key="register" component={Register} hideNavBar={true} />
            <Scene key="chatroom" component={ChatRoom} hideNavBar={true} />
          </Scene>
        </Router>
      );
    }
  }