import { Component,input, } from '@angular/core';
import TReview from '../../../TReview';
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
  reviews = input.required<TReview[]>();
  //deleteTask = out
  onClickTask(){

  }
}
