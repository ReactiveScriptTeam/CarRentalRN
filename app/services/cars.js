import cars from "../data/cars";

export interface Car {
    class: string,
    doors: number,
    hasAC: true,
    id: string,
    imageStoragePath: string,
    imageUrl: string,
    luggage: number,
    name: string,
    price: number,
    seats: string,
    transmission: string
}

class Cars {
    getCars(): Car[] {
        return cars.cars;
    }
};

export default new Cars();