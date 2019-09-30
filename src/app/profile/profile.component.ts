import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile = { login: '',
    company: '',
    location: '',
    avatar_url: '',
    email: '',
    created_at: ''};
    username: string;


  constructor(private service: ServicesService) {
    this.service.getProfileInfo().subscribe(profile => {
      this.profile = profile;
    });

  }

  findProfile() {
    this.service.updateProfile(this.username);
    this.service.getProfileInfo().subscribe(profile => {
      this.profile = profile;
    });
    
  }

  ngOnInit() {
  }

}
