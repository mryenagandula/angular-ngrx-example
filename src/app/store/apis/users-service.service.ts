import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  private headers:HttpHeaders= new HttpHeaders({
    'Content-Type':'application/json',
    'Accept':"application/json",
    'Access-Control-Allow-Methods':'GET,POST,PUT,DELETE',
    'Authorization':''
  });

  constructor(private http:HttpClient) { }

  public loadUsers(){
    return this.http.get(`http://localhost:3000/public/users`,{headers :this.headers})
  }

  public loadUserById(id: any){
    return this.http.get(`http://localhost:3000/public/users/${id}`,{headers :this.headers})
  }
}
