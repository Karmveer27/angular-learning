import { Component,signal,computed } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { DUMMY_USERS } from '../../../SAMPLE-DATA';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users = DUMMY_USERS;
  index = signal(0);
  //user = this.users[this.index()];
  user = computed(() => {return this.users[this.index()]})
  imagePath = computed(() =>  "assets/users/" + this.user().avatar)
  

  

  onUserClick =() =>{
    console.log("in here")
    this.index.set(this.index() + 1)
  }

}
