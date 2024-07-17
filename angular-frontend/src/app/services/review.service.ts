import { Injectable } from '@angular/core';
import { Review } from '../../data/Reviews';
import { REVIEWS } from '../../data/mock-reviews';
import { Observable,of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor() { }

  getReviews(): Observable<Review[]>{
    const reviews = of(REVIEWS);
    return reviews;
  }

  

}
