// @flow
import React, { Component, PureComponent } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Car } from "../../services/cars";
import FontAwesome, { Icons } from 'react-native-fontawesome';

let accent = "#3A53FF";

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 120
    },
    itemWrapper: {
        backgroundColor: "white",
        marginBottom: 12,
        padding: 12,
    },
    line: {
        borderBottomColor: '#a7a7a7',
        borderBottomWidth: 1,
        marginTop: 4,
    },
    icon: {
        color: accent,
    },
    text: {
        fontSize: 16
    },
    info: {
        flexDirection: "column",
        height: 120,
        justifyContent: "space-around",
        paddingLeft: 12,
        paddingVertical: 12
    },
    header: {
        color: accent,
        fontWeight: 'bold',
        fontSize: 20,
    },

});


const InfoItem = ({ icon, text }) =>
    <Text style={styles.text}><FontAwesome style={styles.icon} >{icon}</FontAwesome> {text} </Text>;

export default class CarItem extends PureComponent {
    _onPress = () => {
        if (this.props.onPressItem) {
            this.props.onPressItem(this.props.car);
        }
    };

    render() {
        let car: Car = this.props.car;
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={styles.itemWrapper}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.header}> {car.name} </Text>
                        <Text style={styles.text}> {"€" + car.price + "/day"} </Text>
                    </View>
                    <View style={styles.line} />
                    <View style={{ flexDirection: "row", marginVertical: 8 }} >
                        <Image style={{ flex: 1 }}
                            style={styles.image}
                            source={{ uri: car.imageUrl }}
                        />
                        <View style={styles.info} >
                            <InfoItem icon={Icons.car} text={car.class} />
                            <InfoItem icon={Icons.gears} text={car.transmission + " Transmission"} />
                            <InfoItem icon={Icons.car} text={car.hasAC ? "Yes" : "No"} />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
