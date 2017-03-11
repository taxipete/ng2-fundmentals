import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from './shared/event.service';
import { IEvent } from './index'

@Component({
  selector: 'events-list',
  template: `
	<div>
		<h1>Upcoming Angular 2 Events</h1>
	</div>
	<hr />
	<div class="row">
		<div class="col-md-5" *ngFor="let event of events">
			<event-thumbnail
				[event]="event"
				
				#thumbnail
                (click)="handleThumbnailClick(event.name)"
			>
			</event-thumbnail>
		</div>
	</div>

  `
})

export class EventsListComponent implements OnInit {
    events: IEvent[];

    constructor(
        private eventService: EventService,
        private route: ActivatedRoute){}

    ngOnInit(){
        // pre async observable
        // this.events = this.eventService.getEvents();
    /*  // Subscribing to get the details

      this.eventService.getEvents().subscribe(
            events => {this.events = events}
        )
    */
    this.events = this.route.snapshot.data['events']

    }

  handleEventClicked(data){
	  console.log(data)
  }


}
