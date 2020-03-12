import { combineReducers } from 'redux';
import MoviesReducer from '../../modules/Movies/moviesReducer';
import PlanetsReducer from "../../modules/Planets/planetsReducer";
import PeopleReducer from "../../modules/People/peopleReducer";
import StarShipsReducer from "../../modules/StarShips/starShipsReducer";
import VehiclesReducer from "../../modules/Vehicles/vehiclesReducer";
import SpeciesReducer from "../../modules/Species/speciesReducer";


export default combineReducers({
  movies: MoviesReducer,
  planets: PlanetsReducer,
  people: PeopleReducer,
  species: SpeciesReducer,
  starShips: StarShipsReducer,
  vehicles: VehiclesReducer
});
