import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import EventCard from './EventCard';
import {eventList} from '../../fixtures';

class EventList extends Component {
    render() { 
        return (
            <ScrollView>
                <View>
                    {eventList.map(event =>
                        <EventCard key={event.uid} event={event} />
                    )}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 100
    }
})
 
export default EventList;