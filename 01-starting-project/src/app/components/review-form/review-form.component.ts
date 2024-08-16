import { Component, EventEmitter, Output, output } from '@angular/core';
import {FormsModule} from '@angular/forms'  
import { TReviewDTO } from "../../../TReview"

@Component({
  selector: 'app-review-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.css'
})
export class ReviewFormComponent {
  cancelAddReveiw = output<void>();
  submitAddReview = output<TReviewDTO>();
  //@Output() cancelAddReview? = new EventEmitter();
  
  onCancel(){
    //console.log("Cancelling");
    this.cancelAddReveiw.emit();
  }
  onSubmit( ){
   console.log("submitting");
    
  }
}
