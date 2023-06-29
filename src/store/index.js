import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { usersApi } from './apis/usersApi';
import { userReducer, changeName, changeSigninStatus } from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(usersApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useFetchUsersQuery,
  useAddUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} from './apis/usersApi';
export { changeName, changeSigninStatus };
