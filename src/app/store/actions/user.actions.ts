import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction(
  '[User] Load Users'
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ data: any }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);


export const loadUserById = createAction(
  '[User] Load User By Id',
  props<{ id: string | number }>()
);

export const loadUserByIdSuccess = createAction(
  '[User] Load User By Id Success',
  props<{ data: any }>()
);

export const loadUserByIdFailure = createAction(
  '[User] Load User By Id Failure',
  props<{ error: any }>()
);
