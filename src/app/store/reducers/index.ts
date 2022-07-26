import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromUser from './user.reducer';


export interface State {
  users : fromUser.UserState
}

export const reducers: ActionReducerMap<State> = {
  users : fromUser.userReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
