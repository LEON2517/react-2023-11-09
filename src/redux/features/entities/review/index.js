import { createSlice } from "@reduxjs/toolkit";
import {REQUEST_STATUSES} from "../../../../constants/request-statuses";
import {getReviews} from "./thunks/get-reviews";

export const reviewSlice = createSlice({
  name: 'review',
  initialState: {
    entities: {},
    ids: [],
    status: REQUEST_STATUSES.IDLE,
  },
  extraReducers: builder =>
    builder
      .addCase(getReviews.pending,
        (state) => {
          state.status = REQUEST_STATUSES.PENDING;
        })
      .addCase(getReviews.fulfilled,
        (state, { payload }) => {

          Object.assign(state.entities, payload.reduce((acc, review) => {
            acc[review.id] = review;
            return acc;
          }, {}))

          state.ids = Array.from(new Set(state.ids.concat(payload.map(({ id }) => id))));

          state.status = REQUEST_STATUSES.FULFILLED;
        })
      .addCase(getReviews.rejected,
        (state) => {
          state.status = REQUEST_STATUSES.REJECTED;
        })
})