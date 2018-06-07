import cars from "../data/cars";

class Cars {
    getCars() {
        return cars.cars;
    }
};

export default new Cars();