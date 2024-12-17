import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,HeaderComponent, FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SyntheseApp';

ngOnInit(){
  let user0:User= new User(0, "Alice", "Alice@gmail.com")
let user1:User= new User(1, "Ava Sarfez", "AvaSarfez@gmail.com")
let user2:User= new User(2, "Aaron Sarfez", "AaronSarfez@gmail.com")
  console.log(user0)
  console.log(user1)
  console.log(user2)

}
}
