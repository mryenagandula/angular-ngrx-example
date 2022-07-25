import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as UserActions from '../actions/user.actions'
import { map, exhaustMap, catchError, mergeMap } from 'rxjs/operators';
import { UsersServiceService } from '../apis/users-service.service';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private store:Store,
    private api:UsersServiceService
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      map((action:any) => action.payload),
      mergeMap(() => {
        return this.api.loadUsers().pipe(
          map(data => UserActions.loadUsersSuccess({data})),
          catchError(error => of(UserActions.loadUsersFailure({error})))
        );
      })
    )
  )

  loadUserById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUserById),
      map((action:any) => action.id),
      mergeMap((id) => {
        return this.api.loadUserById(id).pipe(
          map(data => UserActions.loadUserByIdSuccess({data})),
          catchError(error => of(UserActions.loadUserByIdFailure({error})))
        );
      })
    )
  )


}
