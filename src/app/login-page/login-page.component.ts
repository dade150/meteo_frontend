import { Component } from '@angular/core';
import {LoginComponent} from "../login/login.component";
import {FooterComponent} from "../footer/footer.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    LoginComponent,
    FooterComponent,
    NavbarComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})


export class LoginPageComponent {

  constructor(userService: UserService) {

  }
}
