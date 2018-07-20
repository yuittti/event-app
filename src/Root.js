import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import SignIn from './components/auth/SignIn';
import Hello from './components/Hello';
import EventList from './components/event/EventList';

class Root extends Component {
    render() { 
        return (
            <View>
                <Image
                    style={styles.image}
                    source={require('../assets/images/logo.png')}
                    resizeMode={Image.resizeMode.contain}
                />
                <SignIn />
                <Hello />
                <EventList />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 40,
        marginBottom: 20
    }
});
 
export default Root;