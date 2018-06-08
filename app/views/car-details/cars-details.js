import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import carsService from "../../services/cars";

export default class CarsDetails extends Component {
    static navigationOptions = ({ navigation }) => {
        return { title: navigation.getParam("title", "Car Details") };
    };

    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam("id", "NO-ID");

        const carDetails = carsService.getCarById(itemId);
        const image = {
            uri: carDetails.imageUrl
        };

        return (
            <ScrollView style={styles.mainContainer}>
                <View style={styles.imageContainer}>
                    <Image source={image} style={styles.car} />
                </View>
                <View style={styles.container}>
                    <Text style={styles.label}>Price</Text>
                    <Text style={styles.value}>€{carDetails.price}/day</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.label}>Class</Text>
                    <Text style={styles.value}>{carDetails.class}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.label}>Doors</Text>
                    <Text style={styles.value}>{carDetails.doors}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.label}>Seats</Text>
                    <Text style={styles.value}>{carDetails.seats}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.label}>Teansmission</Text>
                    <Text style={styles.value}>{carDetails.transmission}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.label}>Luggage</Text>
                    <Text style={styles.value}>{carDetails.luggage}</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "white"
    },
    imageContainer: {
        borderBottomWidth: 1,
        borderColor: "#aaa",
        marginBottom: 10
    },
    container: {
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: "flex-start",
        padding: 5
    },
    car: {
        width: "100%",
        height: 300,
    },
    label: {
        width: "40%",
        fontSize: 18,
        color: "#999"
    },
    value: {
        fontSize: 18
    }
});
