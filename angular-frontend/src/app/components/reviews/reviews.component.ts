import { Component, OnInit } from '@angular/core';
import { Review } from '../../../data/Reviews';
import { REVIEWS } from '../../../data/mock-reviews';
import { ReviewComponent } from '../review/review.component';
import { CommonModule } from '@angular/common';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule,ReviewComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  reviews: Review[] = REVIEWS;

  constructor(private reviewService: ReviewService){

  }
  ngOnInit():void{
    //this.reviews = this.reviewService.getReviews();
    this.reviewService.getReviews().subscribe((reviews) => (this.reviews = reviews))
  }

}
