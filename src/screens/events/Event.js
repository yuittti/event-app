import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Event from '../../components/event/Event';
import { inject, observer } from 'mobx-react';

@inject('events')
@observer
class EventScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `Event ${navigation.state.params.uid}`
    })
      
    render() { 
        const {events, navigation} = this.props;
        const event = events.entities[navigation.state.params.uid];
        return (
            <View>
                <Text>{event.title}</Text>
                <Event event={event} />
            </View>
        )
    }
}
 
export default EventScreen;