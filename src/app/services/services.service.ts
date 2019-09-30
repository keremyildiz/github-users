import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private username: string;


  constructor(private http: Http) {
    this.username = 'keremyildiz';
  }

  getProfileInfo() {
    interface ApiResponse {
      login: string;
    }
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.github.com/users/' + this.username)
     .pipe(map(res => res.json()));
  }

  updateProfile(username: string) {
    this.username = username;
  }
  

}
