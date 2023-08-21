import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  authPage = false;
  userLogined = false;

  constructor(private route: ActivatedRoute, private auth: AuthService){}
  ngOnInit(): void {
    this.route.url.subscribe(segments => {
      const authSegment = segments.some(segment => segment.path === 'auth');
      this.authPage = authSegment
    });
    const user = JSON.parse(localStorage.getItem('user')!);
    if(user){
      this.userLogined = true;
    }
  }

  logout(){
    this.auth.signOut();
    this.userLogined= false
  }


}
