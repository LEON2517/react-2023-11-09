import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Review'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/'}),
  endpoints: builder => ({
    getRestaurants: builder.query({
      query: () => ({
        url: 'restaurants'
      })
    }),
    getUsers: builder.query({
      query: () => ({
        url: 'users'
      })
    }),
    getDishes: builder.query({
      query: (restaurantId) => ({
        url: 'dishes',
        params: { restaurantId }
      })
    }),
    getReviews: builder.query({
      query: (restaurantId) => ({
        url: 'reviews',
        params: { restaurantId }
      }),
      providesTags: (result, _, restaurantId) => {
        console.log('providesTags_restaurantId', restaurantId)
        return result
          .map(({ id }) => ({ type: 'Review', id }))
          .concat(
            { type: 'Review', id: 'ALL' },
            { type: 'Review', id: restaurantId }
          )
      }
    }),
    createReviews: builder.mutation({
      query: ({restaurantId, newReview}) => ({
        url: `review/${restaurantId}`,
        method: 'POST',
        body: newReview
      }),
      invalidatesTags: (result, _, restaurantId) => [
          { type: 'Review', id: restaurantId }
        ]
    }),
    changeReviews: builder.mutation({
      query: ({restaurantId, oldReview}) => ({
        url: `review/${restaurantId}`,
        method: 'PATCH',
        body: oldReview
      }),
      invalidatesTags: (result, _, restaurantId) => [
        { type: 'Review', id: restaurantId }
      ]
    }),
  })
})
console.log('api', api)

export const {
  useGetRestaurantsQuery,
  useGetUsersQuery,
  useGetDishesQuery,
  useGetReviewsQuery,
  useCreateReviewsMutation,
  useChangeReviewsMutation
} = api;