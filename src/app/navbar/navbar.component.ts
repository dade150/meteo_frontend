import { Component, EventEmitter, Output } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() onLoginClick = new EventEmitter<void>();
  @Output() onRegisterClick = new EventEmitter<void>();
  @Output() onHomeClick = new EventEmitter<void>();

  handleLoginClick() {
    this.onLoginClick.emit();
  }

  handleRegisterClick() {
    this.onRegisterClick.emit();
  }

  handleHomeClick() {
    this.onHomeClick.emit();
  }
}

