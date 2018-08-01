import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import firebase from 'firebase';
import { View, Text, TextInput, Platform, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';

@inject('user')
@observer
class SignIn extends Component {

    render() { 
        const {user} = this.props;
        return (
            <View>
                <Text style = {styles.header}>Please sign in</Text>
                <Text>Email:</Text>
                <TextInput 
                    style={styles.input} 
                    value={user.email} 
                    onChangeText={this.setEmail} 
                    keyboardType='email-address' />
                <Text>Password:</Text>
                <TextInput 
                    style={styles.input} 
                    value={user.password} 
                    onChangeText={this.setPassword} 
                    secureTextEntry />

                <TouchableOpacity onPress={this.signIn}>
                    <Text>Sign In</Text>
                </TouchableOpacity>
            </View>
        );
    }

    setPassword = password => this.props.user.password = password;
    setEmail = email => this.props.user.email = email;
    signIn = () => {
        const {user} = this.props;
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((userEntity) => {
                user.user = userEntity;
                // this.props.navigation.navigate('eventList');
                const action = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'lists' })
                    ]
                })
                this.props.navigation.dispatch(action);
            });
        
    }
}

const styles = {
    header: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        ...Platform.select({
            ios: {
                borderBottomColor: '#000',
                borderBottomWidth: 1
            },
            android: {

            }
        })
        
    }
}
 
export default SignIn;