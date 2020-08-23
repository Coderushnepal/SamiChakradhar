import { ADD_FAVOURITE_BEER, REMOVE_FAVOURITE_BEER} from "../constants/actions"

export const addFavouriteBeer = (favouriteBeers) => {
    return {type: ADD_FAVOURITE_BEER, payload: favouriteBeers };
};


export const removeFavouriteBeer = (favouriteBeersId) => {
    return {type: REMOVE_FAVOURITE_BEER, payload: favouriteBeersId };
}