import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import carsService from "../../services/cars";

export default class CarsDetails extends Component {
    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam("id", "NO-ID");

        const carDetails = carsService.getCarById(itemId);
        const image = {
            url: carDetails.imageUrl
        };

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Image source={image} style={{ width: 300, height: 110 }} />
                </View>
                <View>
                    <Text>Price</Text>
                    <Text>{carDetails.price}/day</Text>
                </View>
                <View>
                    <Text>Class</Text>
                    <Text>{carDetails.class}</Text>
                </View>
                <View>
                    <Text>Doors</Text>
                    <Text>{carDetails.doors}</Text>
                </View>
                <View>
                    <Text>Seats</Text>
                    <Text>{carDetails.seats}</Text>
                </View>
                <View>
                    <Text>Teansmission</Text>
                    <Text>{carDetails.transmission}</Text>
                </View>
                <View>
                    <Text>Luggage</Text>
                    <Text>{carDetails.luggage}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    carsList: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    }
});
