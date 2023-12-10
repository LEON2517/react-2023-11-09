import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../../../constants/request-statuses";
import { getUsers } from "./thunks/get-users";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    entities: {},
    ids: []
  },
  extraReducers: builder =>
    builder
      .addCase(getUsers.pending,
        (state) => {
          state.status = REQUEST_STATUSES.PENDING;
        })
      .addCase(getUsers.fulfilled,
        (state, { payload }) => {

          state.entities = payload.reduce((acc, user) => {
            acc[user.id] = user;
            return acc;
          }, {});

          state.ids = payload.map(({id}) => id);

          state.status = REQUEST_STATUSES.FULFILLED;
        })
      .addCase(getUsers.rejected,
        (state) => {
          state.status = REQUEST_STATUSES.REJECTED;
        })
})