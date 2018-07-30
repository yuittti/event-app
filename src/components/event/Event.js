import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import { eventList } from '../../fixtures';
import ConfirmModal from '../common/ConfirmModal';

class Event extends Component {
    static defaultProps = {
        event: eventList[0]
    }

    state = {
        confirmModal: false
    }

    render() { 
        const {event} = this.props;
        return (
            <View style={styles.container}>
                <Text style={[styles.text, styles.header]}>{event.title}</Text>
                <Image 
                    style={styles.image} 
                    source={{uri: 'https://picsum.photos/200/100?random'}} />
                <Text style={styles.text}>{event.when}</Text>
                <Text style={styles.text}>{event.where}</Text>
                <Text style={styles.text}>{event.url}</Text>

                <View style={styles.button}>
                    <Button 
                        onPress={this.handleDelete}
                        title='Delete Event'
                        color='#F55'
                    />
                </View>

                <ConfirmModal 
                    visible={this.state.confirmModal}
                    onConfirm={this.confirmDelete}
                    onCancel={this.cancelDelete}
                >
                    Are you sure you want to delete '{event.title}'
                </ConfirmModal>
            </View>
        );
    }

    handleDelete = () => {
        this.setState({
            confirmModal: true
        });
    };

    confirmDelete = () => this.setState({ confirmModal: false });
    cancelDelete = () => this.setState({ confirmModal: false });
}

const styles = StyleSheet.create({
    container: {
        marginTop: 35,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        borderTopColor: '#000',
        borderTopWidth: 1,
        alignItems: 'center'
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