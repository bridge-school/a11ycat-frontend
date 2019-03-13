import * as types from "./index";

export const selectedRating = rating =>
({
  type: types.SELECTED_RATING,
  rating
})
