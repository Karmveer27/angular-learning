import { Component,signal,computed } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { TasksComponent } from '../tasks/tasks.component';
import { ReviewFormComponent } from '../review-form/review-form.component';
import { DUMMY_USERS, ReviewsData } from '../../../SAMPLE-DATA';
import TUser from '../../../TUser';
import { TReview, TReviewDTO} from '../../../TReview'; 


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserComponent,TasksComponent,ReviewFormComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users = DUMMY_USERS;
 
  // reviews?: TReview[];
  // AllReviews = ReviewsData;
    AllReviews = signal(ReviewsData);
    currentId = signal<string | null>(null);
    reviews = computed(() => (this.AllReviews().filter((review) => (review.id === this.currentId()))))
    user = computed<TUser | undefined>(() => this.users.find(u => u.id === this.currentId()));
    addReviewActive = signal<boolean>(false);
    
  onUserClick =(id: string) =>{
    this.currentId.set(id);
    console.log(this.currentId())
    console.log(this.reviews())
  }
  handleDeleteTask(deleteObject: {review: TReview}){
    console.log("Getting in handle delete task")
    this.AllReviews.set(
      this.AllReviews().filter((r) => (r.title !== deleteObject.review.title))
    );
       
  }
  onAddReview(){
    //console.log("Adding review for: " + this.user()?.id)
    this.addReviewActive.set(true);
  }
  onCancelAddReview(){
    //console.log("going to cancel now")
    this.addReviewActive.set(false);
  }

  onSubmitReview(reviewData: TReviewDTO){
    const newReview = {
      id: this.user()!.id,
      ...reviewData
    };
    this.AllReviews.set(
      [...this.AllReviews(),
        newReview]
    )
    this.addReviewActive.set(false);
  }
  

}
