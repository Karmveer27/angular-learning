import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-link',
  standalone: true,
  imports: [],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css'
})
export class LinkComponent {
  @Input() text: string = 'Default Text';
  @Input() color: string = 'white';
  @Input() link: string = '#';
}
