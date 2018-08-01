import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Card from '../common/Card';
import { observer } from 'mobx-react';

@observer
class PersonCard extends Component {
    
    render() { 
        const {email, firstName, lastName} = this.props.person;
        return (
            <Card style={styles.container}>
                <Image source={{uri: 'https://picsum.photos/200/200?random'}} style={styles.avatar} />
                <View style={styles.content}>
                    <Text style={styles.email}>{email}</Text>
                    <Text>{firstName} {lastName}</Text>
                </View>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    avatar: {
        width: 200,
        height: 200,
        margin: 5
    },
    content: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    email: {
        fontWeight: 'bold'
    }
})
 
export default PersonCard;