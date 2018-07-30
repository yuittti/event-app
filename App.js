import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Root from './src/Root';
import AppNavigator from './src/AppNavigator';

export default class App extends React.Component {
  render() {
    return <AppNavigator />
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
