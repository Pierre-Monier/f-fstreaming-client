import { detail, defaultState } from '../../redux/general/store'
import * as types from '../../redux/general/actions/actionTypes';

const singleMovie = {
    id: 1,
    name: "movie_name",
    src: "src",
}

const allMovies = {
    singleMovie,
    singleMovie,
    singleMovie
}

it("Add a single movie inside the state", () => {
    const desired_state = {
        general: singleMovie,
        src: defaultState.src,
        lasts: defaultState.lasts,
        user: defaultState.user
    } 

    const new_state = detail(defaultState, { type: types.ADDSINGLE, data: singleMovie })
    expect(new_state).toEqual(desired_state);

})

it("Add data to to src state key", () => {
    const desired_state = {
        general: defaultState.general,
        src: allMovies,
        lasts: defaultState.lasts,
        user: defaultState.user
    }

    const new_state = detail(defaultState, { type: types.ADDSRC, data: allMovies })
    expect(new_state).toEqual(desired_state);
})


it("Clear the state to bring it back to default", () => {
    const new_state = detail(defaultState, { type: types.CLEAR })
    expect(new_state).toEqual(defaultState)
})