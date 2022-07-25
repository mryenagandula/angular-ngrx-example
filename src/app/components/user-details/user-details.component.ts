import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as userActions from '../../store/actions/user.actions';
import * as userSelectors from '../../store/selector/user.selectors';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  public loading$:Observable<boolean>;
  public selectUser$:Observable<any>;

  constructor(private readonly store: Store){}

  public ngOnInit():void{
    this.selectUser$ = this.store.select(userSelectors.getSelectUser)
  }

}
