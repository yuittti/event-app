import './src/initFirebase';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Root from './src/Root';
import { Provider, observer } from 'mobx-react';
import { addNavigationHelpers } from 'react-navigation';
import AppNavigator from './src/AppNavigator';
import stores from './src/stores';

@observer
export default class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <AppNavigator navigation = {addNavigationHelpers(stores.navigation.config)} />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 45,
    paddingLeft: 15,
    paddingRight: 15
  }
});
