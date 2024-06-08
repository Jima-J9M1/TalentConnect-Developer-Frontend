import { UserInfo } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

let initialState: UserInfo | null = null;

if (typeof window !== 'undefined') {
    // Perform localStorage action

    const data = localStorage.getItem('login');
    if (data) {
        initialState = JSON.parse(data);
    }
}

export const loginSlice = createSlice({
    name: 'loginSlice',
    initialState,
    reducers: {
        setUser: (_, action) => {
            localStorage.setItem('login', JSON.stringify(action.payload));
            return action.payload;
        },
        unsetUser: () => {
            localStorage.removeItem('login');
            return null;
        },
        refreshUserToken: (state: any, action) => {
            const { token } = action.payload;
            const user = state;
            user.accessToken = token;
            localStorage.setItem('login', JSON.stringify(user));
            return user;
        }
    }
});

export const { setUser, unsetUser, refreshUserToken } = loginSlice.actions;
