import { Routes } from '@angular/router';

import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    CreateSessionCompnent,
    EventResolver
} from './events/index'

import { Error404Component } from './errors/404.component'


export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver} },
/*    Changed to resolve when moved to http
{ path: 'events/:id', component: EventDetailsComponent,
 		canActivate: [EventRouteActivator]}, */
    { path: 'events/:id', component: EventDetailsComponent,
 		resolve: {event: EventResolver} },         
    { path: 'events/session/new', component: CreateSessionCompnent},
	{ path: '404', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule'}
]
