import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { observer, inject } from 'mobx-react';
import EventList from '../../components/event/EventList';

@inject('events')
@observer
class EventListScreen extends Component {
    static navigationOptions = {
        title: 'Event List'
    }

    componentDidMount() {
        this.props.events.loadAll();
    }

    render() { 
        const {events}  = this.props;
        if (events.loading) return this.getLoader();
        return <EventList onEventPress={this.handleEventPress} events={events.list} />
    }

    getLoader() {
        return <View><ActivityIndicator size='large' /></View>
    }

    handleEventPress = (uid) => {
        console.log('------ press event', uid);
        this.props.navigation.navigate('event', { uid });
    }
}
 
export default EventListScreen;