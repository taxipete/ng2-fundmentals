import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
	EventsListComponent,
	EventsThumbnailComponent,
	EventDetailsComponent,
	CreateEventComponent,
	EventRouteActivator,
	EventService,
	EventListResolver,
	CreateSessionCompnent,
	SessionsListComponent,
	DurationPipe,
	UpvoteComponent,
	VoterService,
	LocationsValidator
} from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';
//import { ToastrService } from './common/toastr.service';
import { 
	TOASTR_TOKEN, 
	Toastr,
	JQ_TOKEN,
	CollapsibleWellComponent,
	SimpleModalComponent,
	ModalTriggerDirective 
} from './common/index';

import {appRoutes } from './routes';

import { AuthService } from './user/auth.service'

declare let toastr:Toastr;
declare let jQuery:Object;

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forRoot(appRoutes)
	],
	declarations: [
		EventsAppComponent,
		EventsListComponent,
		EventsThumbnailComponent,
		NavBarComponent,
		EventDetailsComponent,
		CreateEventComponent,
		Error404Component,
		CreateSessionCompnent,
		SessionsListComponent,
		CollapsibleWellComponent,
		DurationPipe,
		SimpleModalComponent,
		ModalTriggerDirective,
		UpvoteComponent,
		LocationsValidator
	],
	providers: [
		EventService,
		//ToastrService,
		{
			provide : TOASTR_TOKEN,
			useValue :toastr
		},
		{
			provide : JQ_TOKEN,
			useValue :jQuery
		},
		EventRouteActivator,
		EventListResolver,
		AuthService,
		{
			provide : 'canDeactivateCreateEvent',
			useValue: checkDirtyState
		 },
		 VoterService
	],
	bootstrap: [EventsAppComponent]
})
export class AppModule {}

function checkDirtyState(component:CreateEventComponent){
	if(component.isDirty)
		return window.confirm('You have not saved this event, do you really want to cancel?');
	return true;
}
