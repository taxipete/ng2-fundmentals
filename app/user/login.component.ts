import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from './auth.service'
@Component({
	templateUrl: 'app/user/login.component.html',
	styles: [`
			em {float: right; color: #e05c65; padding-left: 10px;}
		`]
})
export class LoginComponent {

	constructor(
		private authService:AuthService,
		private router:Router
	){}

	login(formValues){
		console.log(formValues);
		this.authService.loginUser(formValues.userName, formValues.password);
		this.router.navigate(['events']);
	}

	cancel(form){
		console.log(form)
		this.router.navigate(['events']);
	}
}