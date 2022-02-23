import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventDetails } from 'src/app/objects/eventDetails';
import { User } from 'src/app/objects/user';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-myevents',
  templateUrl: './myevents.component.html',
  styleUrls: ['./myevents.component.css']
})
export class MyeventsComponent implements OnInit {
  user:User=new User();
  eventsDetails!:EventDetails[];

  constructor(private eventService:EventService,private router:Router) { }

  ngOnInit(): void {
    this.user.id=Number(sessionStorage.getItem('id'));
    if(sessionStorage.getItem("email")==undefined)
    this.router.navigate(['/login']);
    else{
    this.getAllMyEvents();
    }
  }
  
  public getAllMyEvents(){
    this.eventService.getEventsOfUser(this.user).subscribe(
      (resp:EventDetails[])=>{
        this.eventsDetails =resp;
        this.router.navigate([`/myEvents`]);
      },
      (error:HttpErrorResponse)=>alert(error)
    )
  }


}
