import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  baseurl:string="http://localhost:3000/users";
  constructor(private http:HttpClient) { }
  getusers(){
    return this.http.get<User[]>(this.baseurl);
  }
  getUsersById(id:number){
    return this.http.get<User>(this.baseurl+"/" +id);
  }
  updateUser(user:User){
    return this.http.put(this.baseurl+'/' +user.id,user);
  }
  deleteUser(id:number){
    return this.http.delete(this.baseurl+ "/" +id);
  }
  addUser(user:User){
    return this.http.post(this.baseurl,user);
  }
}