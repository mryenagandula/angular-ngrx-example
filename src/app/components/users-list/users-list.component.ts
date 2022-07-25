import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as userActions from '../../store/actions/user.actions';
import * as userSelectors from '../../store/selector/user.selectors';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  public loading$:Observable<boolean>;
  public users$:Observable<any>;
  public selectedUserId =-1;

  constructor(private readonly store: Store){}

  public ngOnInit():void{
    this.store.dispatch(userActions.loadUsers());
    this.loading$ = this.store.select(userSelectors.loading);
    this.users$ =  this.store.select(userSelectors.getUsers);
  }

  public selectUser(id){
    this.selectedUserId = id;
    this.store.dispatch(userActions.loadUserById({id}))
  }
}
