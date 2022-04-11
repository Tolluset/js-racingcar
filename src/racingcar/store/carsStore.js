import Car from '../models/Car';
import { randomNumber } from '../../utils/randoms';

const carsStore = {
  car_names: [],
  cars: [],
  tryCounts: 0,
  winners: [],
  GET_CAR_NAMES() {
    return this.car_names;
  },
  SET_CAR_NAMES(_car_names) {
    return (this.car_names = _car_names);
  },
  GET_CARS() {
    return this.cars;
  },
  SET_CARS(_car_names) {
    this.cars = _car_names.map((name) => new Car(name));
  },
  MOVE_CARS() {
    return this.GET_CARS().forEach((car) => car.move(randomNumber()));
  },
  GET_WINNERS() {
    return this.winners;
  },
  FIND_AND_SET_WINNERS() {
    this.winners = carsStore
      .GET_CARS()
      .filter((car) => car.moved === this.GET_TRY_COUNTS());
  },
  GET_TRY_COUNTS() {
    return +this.tryCounts;
  },
  SET_TRY_COUNTS(_tryCounts) {
    this.tryCounts = _tryCounts;
  },
};

export default carsStore;
