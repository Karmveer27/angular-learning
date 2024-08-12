import { Component,input } from '@angular/core';
import TUser from "../../../TUser";
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  user = input.required<TUser>();
  
}
