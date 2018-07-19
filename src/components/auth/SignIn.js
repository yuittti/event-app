import React, { Component } from 'react';
import { View, Text, TextInput, Platform, TouchableOpacity } from 'react-native';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    render() { 
        const {email, password} = this.state;

        return (
            <View>
                <Text style = {styles.header}>Please sign in</Text>
                <Text>Email:</Text>
                <TextInput 
                    style={styles.input} 
                    value={email} 
                    onChangeText={this.setEmail} 
                    keyboardType='email-address' />
                <Text>Password:</Text>
                <TextInput 
                    style={styles.input} 
                    value={password} 
                    onChangeText={this.setPassword} 
                    secureTextEntry />

                <TouchableOpacity onPress={this.signIn}>
                    <Text>Sign In</Text>
                </TouchableOpacity>
            </View>
        );
    }

    setPassword = password => this.setState({password});
    setEmail = email => this.setState({email});
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