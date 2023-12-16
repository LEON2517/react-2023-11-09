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
        return result
          .map(({ id }) => ({ type: 'Review', id }))
          .concat(
            { type: 'Review', id: 'ALL' },
            { type: 'Review', id: restaurantId }
          )
      }
    }),
    createReviews: builder.mutation({
      query: ({ id, review }) => ({ // restaurantId
        url: `review/${id}`,
        method: 'POST',
        body: review
      }),
      invalidatesTags: (result, _, { id }) => [ // restaurantId
        { type: 'Review', id: id }
      ]
    }),
    changeReviews: builder.mutation({
      query: ({ id, review }) => ({ // reviewId
        url: `review/${id}`,
        method: 'PATCH',
        body: review
      }),
      invalidatesTags: (result, _, { id }) => [ // reviewId
        { type: 'Review', id: id }
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