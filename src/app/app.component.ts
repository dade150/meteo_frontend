import { Component } from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    NavbarComponent,
    RouterOutlet
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'meteo';

  private showLoginPage: boolean= false;
  private showRegisterPage: boolean =false;
  private showHomePage: boolean = true;

  constructor(private router: Router) {

    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        this.showLoginPage = this.router.url==='/login';
        this.showRegisterPage = this.router.url==='/register';
        this.showHomePage = this.router.url==='/home';
      }
    })
  }

  handleLogin() {
    console.log('Toggling login form:', this.showLoginPage);
    this.showLoginPage = !this.showLoginPage;

    if (this.showLoginPage) {
      this.showRegisterPage = false;
      this.router.navigate(['/login']);
    }else{
      this.router.navigate(['/home']);
    }
  }

  handleRegister() {
    this.showRegisterPage = !this.showRegisterPage;
    if (this.showRegisterPage) {
      this.showLoginPage = false;
      this.router.navigate(['/register']);
    }else {
      this.router.navigate(['/home']);
    }
  }

  handleHome() {
    if (this.showHomePage) {
      this.showLoginPage = false;
      this.showRegisterPage = false;

      this.router.navigate(['/home']);
    }
  }
}
