import {Component, Inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserLoginDto } from '../../models/UserLoginDto';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userLoginDto: UserLoginDto = new UserLoginDto();
  isButtonDisabled: boolean = true;

  constructor(@Inject(UserService) private userService: UserService) {}
  //questo costruttore crea problemi ma non riesco a capire perche il problema è circular dependency

  checkFormValidity() {
    this.isButtonDisabled = !(
      this.userLoginDto.email &&
      this.userLoginDto.password
    );
  }
}
