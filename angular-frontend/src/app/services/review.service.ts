import { Injectable } from '@angular/core';
import { Review } from '../../data/Reviews';
import { REVIEWS } from '../../data/mock-reviews';


@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor() { }

  getReviews(): Review[]{
    return REVIEWS;
  }

  

}
