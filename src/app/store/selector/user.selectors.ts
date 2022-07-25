import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from '../reducers/user.reducer';

export const getUsersState = createFeatureSelector<fromUser.UserState>('users');

export const loading = createSelector(
    getUsersState,
    (state: fromUser.UserState) => state.loading
);

export const getUsers = createSelector(
    getUsersState,
    (state: fromUser.UserState) => state.users
);

export const getSelectUser = createSelector(
    getUsersState,
    (state: fromUser.UserState) => state.userDeatils
);




