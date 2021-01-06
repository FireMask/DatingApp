import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { getuid } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;
  fecha: any;

  constructor(private http: HttpClient){}
  
  ngOnInit() {
    this.fecha = Date.now();
    this.getUsers();
  }

  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    });
  }
}