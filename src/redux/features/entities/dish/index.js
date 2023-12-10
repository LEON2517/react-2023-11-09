import { createSlice } from "@reduxjs/toolkit";
import {getDishes} from "./thunks/get-dishes";
import { REQUEST_STATUSES } from "../../../../constants/request-statuses";

export const dishSlice = createSlice({
  name: 'dish',
  initialState: {
    entities: {},
    ids: [],
    status: REQUEST_STATUSES.IDLE,
  },
  extraReducers: builder =>
    builder
      .addCase(getDishes.pending,
        (state) => {
          state.status = REQUEST_STATUSES.PENDING
        })
      .addCase(getDishes.fulfilled, (state, { payload }) => {

        Object.assign(state.entities, payload.reduce((acc, dish) => {
          acc[dish.id] = dish;
          return acc;
        }, {}))

        state.ids = Array.from(new Set(state.ids.concat(payload.map(({ id }) => id))));

        state.status = REQUEST_STATUSES.FULFILLED;
      })
      .addCase(getDishes.rejected,
        (state) => {
          state.status = REQUEST_STATUSES.REJECTED
        })
})