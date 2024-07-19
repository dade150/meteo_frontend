import { Component } from '@angular/core';
import {SocialFooterComponent} from "../social-footer/social-footer.component";
import {CopyrightFooterComponent} from "../copyright-footer/copyright-footer.component";
import {InformationFooterComponent} from "../information-footer/information-footer.component";



@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    SocialFooterComponent,
    CopyrightFooterComponent,
    InformationFooterComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
}
