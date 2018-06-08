import React from "react";
import {createStackNavigator} from "react-navigation";
import Cars from "./views/cars/cars";
import CarDetails from "./views/car-details/cars-details";

const RootStack = createStackNavigator(
    {
        Cars: Cars,
        Details: CarDetails,
    },
    {
        initialRouteName: "Cars",
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#586EF5',
            },
            headerTintColor: '#fff',
        }
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack/>;
    }
}