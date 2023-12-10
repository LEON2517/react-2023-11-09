import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRestaurants = createAsyncThunk(
  'restaurant/getRestaurants',
  async (_, { rejectWithValue}) => {
    const response = await fetch('http://localhost:3001/api/restaurants');
    const result = await response.json();

    if (!result?.length) {
      return rejectWithValue("Empty restaurants")
    }
    return result;
  },
  {
    condition: (_, { getState }) => {
      const { restaurant } = getState()
      const fetchStatus = restaurant.status;
      if (fetchStatus === 'fulfilled' || fetchStatus === 'pending') return false;
    }
  }
/*  {
    condition: (_, { getState }) => !selectRestaurantIds(getState()).length
  }*/
)