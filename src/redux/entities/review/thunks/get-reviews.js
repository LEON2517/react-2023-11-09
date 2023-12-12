import { createAsyncThunk } from "@reduxjs/toolkit";

export const getReviews = createAsyncThunk(
  'review/getReviews',
  async (restaurantId , rejectWithValue) => {
    if (!restaurantId) return null;
    const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
    const result = await response.json();
    if (!result?.length) {
      return rejectWithValue("Empty review")
    }
    return result;
  }
)