import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { View, Text, TextInput, Platform, TouchableOpacity } from 'react-native';
import userStore from '../../stores/user';

@observer
class SignIn extends Component {

    render() { 
        return (
            <View>
                <Text style = {styles.header}>Please sign in</Text>
                <Text>Email:</Text>
                <TextInput 
                    style={styles.input} 
                    value={userStore.email} 
                    onChangeText={this.setEmail} 
                    keyboardType='email-address' />
                <Text>Password:</Text>
                <TextInput 
                    style={styles.input} 
                    value={userStore.password} 
                    onChangeText={this.setPassword} 
                    secureTextEntry />

                <TouchableOpacity onPress={this.signIn}>
                    <Text>Sign In</Text>
                </TouchableOpacity>
            </View>
        );
    }

    setPassword = password => userStore.password = password;
    setEmail = email => userStore.email = email;
    signIn = () => console.log('----', 'sign in');
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