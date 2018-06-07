import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class CarsDetails extends Component {
    render() {
        return (
            <View style={styles.carsList}>
                <Text>test</Text>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    carsList: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
