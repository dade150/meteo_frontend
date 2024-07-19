import { Component } from '@angular/core';
import {RegisterUserComponent} from "../register-user/register-user.component";
import {FooterComponent} from "../footer/footer.component";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [
    RegisterUserComponent,
    FooterComponent,
    NavbarComponent
  ],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.css'
})
export class RegistrationPageComponent {

}
