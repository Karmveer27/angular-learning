import { Component,signal,computed } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { TasksComponent } from '../tasks/tasks.component';
import { DUMMY_USERS, ReviewsData } from '../../../SAMPLE-DATA';
import TUser from '../../../TUser';
import TReview from '../../../TReview'; 


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserComponent,TasksComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users = DUMMY_USERS;
  user?: TUser;
  reviews?: TReview[];
  AllReviews = ReviewsData;

  

  
  onUserClick =(id: string) =>{
    this.user = this.users.find((u) => u.id === id);
    this.reviews = this.AllReviews.filter((review) => (review.id === id))
  }

}
