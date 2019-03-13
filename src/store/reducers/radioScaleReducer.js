import * as types from "../actions";

const initialState = {
  selectedRating: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case types.SELECTED_RATING: {
      return {
        ...state,
        selectedRating: action.selectedRating
      }
    }
    default: {
      return state
    }
  }
}
