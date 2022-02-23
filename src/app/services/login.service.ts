import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../objects/user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlServerApi=environment.urlServerApi;

  constructor(private http:HttpClient) { }
  

  
  public login(user:User):Observable<User>{
    return this.http.post<User>(`${this.urlServerApi}/auth/login`,user);
  }

  public register(user:User):Observable<User>{
    return this.http.post<User>(`${this.urlServerApi}/auth/register`,user);
  }
  
 
}
