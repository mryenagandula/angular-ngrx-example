import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions'


export const userFeatureKey = 'user';

export interface UserState {
  users:any,
  userDeatils:any,
  loading: boolean,
  error:any
}

export const initialState: UserState = {
  users:[],
  loading: false,
  error:null,
  userDeatils:{}
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, (state) => ({...state,loading: false, error:null})),
  on(UserActions.loadUsersSuccess, (state, { data }) => ({
    ...state,
    users:data.users,
    loading: true,
    error: null
  })),
  on(UserActions.loadUsersFailure, (state,{error}) => ({...state,loading: false, error})),
  on(UserActions.loadUserById, (state) => ({...state,loading: false, error:null})),
  on(UserActions.loadUserByIdSuccess, (state, { data }) => ({
    ...state,
    userDeatils:data.user,
    loading: true,
    error: null
  })),
  on(UserActions.loadUserByIdFailure, (state,{error}) => ({...state,loading: false, error})),
);
