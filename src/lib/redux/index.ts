// Or from '@reduxjs/toolkit/query/react'
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { clientApi } from './api/client/clientApi';
import { loginSlice } from './slices/loginSlice';
import { contactApi } from './api/contact/contactApi';
import { baseApi } from './api';

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        [clientApi.reducerPath]: clientApi.reducer,
        [contactApi.reducerPath]: contactApi.reducer,
        login: loginSlice.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(baseApi.middleware)
            .concat(clientApi.middleware)
            .concat(contactApi.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
