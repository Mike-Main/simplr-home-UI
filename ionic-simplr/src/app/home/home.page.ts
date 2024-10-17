import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  // String from the service.ts
  title!: string;
  initials!: string;

  constructor(private userService: UserService) { 
    
  }

  ngOnInit() {
    this.title = this.userService.getTitle();
    this.initials = this.getInitials(this.title);
  }

  getInitials(title: string): string {
    const names = title.split(' ');
    const firstInitial = names[0] ? names[0][0] : '';
    const secondInitial = names[1] ? names[1][0] : '';
    return (firstInitial + secondInitial).toLowerCase();
  }

}
