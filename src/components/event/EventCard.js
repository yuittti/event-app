import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Card from '../common/Card';

class EventCard extends Component {
    state = {  }
    render() { 
        return (
            <Card style={styles.container}>
                <Image 
                    style={styles.image} 
                    source={{uri: 'https://picsum.photos/200/100?random'}} />
                <View style={styles.description}>
                    <Text>{this.props.event.title}</Text>
                    <Text>{this.props.event.url}</Text>
                </View>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: '48%',
        height: 100
    },
    container: {
        borderColor: '#000',
        borderWidth: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    description: {
        width: '48%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        padding: 10,
        backgroundColor: '#FEFEFE',
        flexGrow: 0
    }
})
 
export default EventCard;