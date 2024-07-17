import { Component,Input } from '@angular/core';
import { Review } from '../../../data/Reviews';



@Component({
  selector: 'app-review',
  standalone: true,
  imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {
  @Input() review?: Review;

}
