import { Injectable } from '@angular/core';
import { Review } from '../../data/Reviews';

import { Observable,of } from 'rxjs';
import {HttpClient,HttpHeaders} from'@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private getReviewsUrl = 'http://localhost:1338/api/reviews';

  constructor(private http: HttpClient) { }

  getReviews(): Observable<Review[]> {
    // Step 1: Make the HTTP GET request
    return this.http.get<{ data: { attributes: Review }[] }>(this.getReviewsUrl)
      .pipe(
        // Step 2: Extract the 'data' property
        map(response => {
          console.log('Raw response:', response);
          const data = response.data;
          console.log('Extracted data:', data);

          // Step 3: Map the 'data' array to extract the 'attributes' property
          const reviews = data.map(item => item.attributes);
          console.log('Mapped reviews:', reviews);

          return reviews;
        })
      );
  }

  

}
