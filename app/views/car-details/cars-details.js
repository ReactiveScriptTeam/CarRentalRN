import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import carsService from "../../services/cars";


const ItemRow = ({ label, value }) =>
    (<View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
    </View>);

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
                <ItemRow label="Price" value={"€" + carDetails.price + "/day"} />
                <ItemRow label="Class" value={carDetails.class} />
                <ItemRow label="Doors" value={carDetails.doors} />
                <ItemRow label="Seats" value={carDetails.seats} />
                <ItemRow label="Transmission" value={carDetails.transmission} />
                <ItemRow label="Luggage" value={carDetails.luggage} />
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
