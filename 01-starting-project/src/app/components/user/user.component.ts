import { Component,EventEmitter,input, Output ,Input,computed} from '@angular/core';
import TUser from '../../../TUser';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = input.required<TUser>();
  imagePath = computed(() =>  "assets/users/" + this.user().avatar)
  ifSelected = input.required<boolean>();

  @Output() select = new EventEmitter();
  // @Input({required: true}) name! : string; 
  // @Input({required: true}) imagePath! : string;
  // @Input({required: true}) id! : string;
  onUserClick(){
    this.select.emit(this.user().id)
  }
}
