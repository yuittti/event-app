import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { eventList } from '../../fixtures';

class Event extends Component {
    static defaultProps = {
        event: eventList[0]
    }

    render() { 
        const {event} = this.props;
        return (
            <View style={styles.container}>
                <Text style={[styles.text, styles.header]}>{event.title}</Text>
                <Text style={styles.text}>{event.when}</Text>
                <Text style={styles.text}>{event.where}</Text>
                <Image 
                    style={styles.image} 
                    source={{uri: 'http://lorempixel.com/400/200/technics/'}} />
                <Text style={styles.text}>{event.url}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 35,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        borderTopColor: '#000',
        borderTopWidth: 1
    },
    header: {
        backgroundColor: '#F2F2F2',
        shadowColor: '#000',
        shadowOpacity: .5,
        shadowOffset: {
            height: 2,
            width: 0
        },
        elevation: 5
    },
    text: {
        padding: 10,
        width: '100%'
    },
    image: {
        width: 200,
        height: 100
    }
})
 
export default Event;