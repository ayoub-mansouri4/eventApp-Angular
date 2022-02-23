import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Event } from '../objects/event';
import { EventDetails } from '../objects/eventDetails';
import { User } from '../objects/user';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private urlServerApi=environment.urlServerApi;
  

  constructor(private http:HttpClient) { }
  

  
  public saveEvent(eventDetails:EventDetails):Observable<EventDetails>{
    return this.http.post<EventDetails>(`${this.urlServerApi}/event/save`,eventDetails);
  }

  public getEventsOfUser(user:User):Observable<EventDetails[]>{
    return this.http.post<EventDetails[]>(`${this.urlServerApi}/event/myevents`,user)
  }
}
