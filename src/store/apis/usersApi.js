import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),
  tagTypes: ['Users'],
  endpoints: (builder) => {
    return {
      fetchUsers: builder.query({
        providesTags: (result, error) => {
          const tags = result.map((user) => {
            return { type: 'Users', name: user.name };
          });
          return tags;
        },
        query: () => {
          return {
            url: '/users',
            method: 'GET',
          };
        },
      }),
      addUser: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return [{ type: 'Users', name: user.name }];
        },
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
      loginUser: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return [{ type: 'Users', name: user.name }];
        },
        query: (user) => {
          return {
            url: `/users/${user.id}`,
            body: {
              isSignedIn: true,
            },
            method: 'PATCH',
          };
        },
      }),
      logoutUser: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return [{ type: 'Users', name: user.name }];
        },
        query: (user) => {
          return {
            url: `/users/${user}`,
            body: {
              isSignedIn: false,
            },
            method: 'PATCH',
          };
        },
      }),
    };
  },
});

export const {
  useFetchUsersQuery,
  useAddUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = usersApi;
export { usersApi };
