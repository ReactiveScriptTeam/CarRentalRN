import React from "react";
import {createStackNavigator} from "react-navigation";
import {StyleSheet, Text, View, Button} from 'react-native';
import Cars from "./views/cars/cars";
import CarDetails from "./views/car-details/cars-details";

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen 12</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
            </View>
        );
    }
}

const RootStack = createStackNavigator(
    {
        Cars: Cars,
        Details: CarDetails,
    },
    {
        initialRouteName: "Cars",
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack/>;
    }
}