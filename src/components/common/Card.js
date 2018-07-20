import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class Card extends Component {
    state = {  }
    render() { 
        const {children, style} = this.props;
        return (
            <View style={[styles.container, style]}>
                {children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: .5,
        shadowOffset: {
            height: 2,
            width: 0
        }
    }
})
 
export default Card;