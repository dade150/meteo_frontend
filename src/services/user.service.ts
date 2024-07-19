import { Injectable } from '@angular/core';
import {UserLoginDto} from "../models/UserLoginDto";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(userLogin:UserLoginDto):Observable<any>{
    return this.http.post("http://localhost:8080/api/user/login", userLogin)
  }

}
