import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),
  endpoints: (builder) => {
    return {
      fetchUsers: builder.query({
        // providesTags: (result, error, user) => {
        //   return [{ type: 'users', id: user.id }];
        // },
        query: () => {
          return {
            url: '/users',
            method: 'GET',
          };
        },
      }),
      addUser: builder.mutation({
        // invalidatesTags: (result, error, user) => {
        //   return [{ type: 'users', id: user.id }];
        // },
        query: (user) => {
          return {
            url: '/users',
            body: {
              name: user.name,
              password: user.password,
              isSignedIn: true,
            },
            method: 'POST',
          };
        },
      }),
    };
  },
});

export const { useFetchUsersQuery, useAddUserMutation } = usersApi;
export { usersApi };
