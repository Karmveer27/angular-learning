import { Component,input,output } from '@angular/core';
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
  deleteTask = output<{review: TReview}>();
  onClickTask(review: TReview){
    this.deleteTask.emit({review: review})
    console.log("getting here")
  }
  
}
