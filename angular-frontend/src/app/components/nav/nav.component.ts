import { Component } from '@angular/core';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  simproText: string = "Simpro";
  simproColor: string = "white";
  simproLink: string = "https://www.simprogroup.com/";

  contactText: string = "Contact Us";
  contactLink: string = "https://www.simprogroup.com/contact-us";
}
