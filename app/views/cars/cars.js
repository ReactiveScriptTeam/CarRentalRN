import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import CarItem from "./car-item";
import cars from "../../services/cars";

export default class Cars extends Component {
    static navigationOptions = {
        title: 'Browse',
    };
    constructor(props) {
        super(props);
        this.state = { cars: null };
    }

    componentDidMount() {
        this.setState({ cars: cars.getCars() });
    }

    _onPressItem = (car: Car) => {
        this.props.navigation.navigate("Details", {
            id: car.id,
        });
    };

    _renderItem = ({ item }) => (
        <CarItem car={item} onPressItem={this._onPressItem} />
    );

    render() {
        if (this.state.cars) {
            return (
                <View style={styles.carsList}>
                    <FlatList
                        data={this.state.cars}
                        keyExtractor={(item, index) => item.id}
                        renderItem={this._renderItem}
                    />

                </View>
            );
        } else {
            return (<Text> Loading ...</Text>);
        }

    }
}

const styles = StyleSheet.create({
    carsList: {
        flex: 1,
        backgroundColor: '#dddddd',
    }
});
