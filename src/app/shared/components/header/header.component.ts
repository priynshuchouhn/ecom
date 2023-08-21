import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  authPage = false;

  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.url.subscribe(segments => {
      const authSegment = segments.some(segment => segment.path === 'auth');
      this.authPage = authSegment
    })  
  }



}
