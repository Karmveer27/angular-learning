import { Component } from '@angular/core';
import {HeaderComponent} from "./components/header/header.component"
import { UsersComponent } from './components/users/users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
}
