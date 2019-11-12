import { Component, OnInit } from '@angular/core';


import { ServerService } from './server.service';

export interface Drug {
  drugId: number,
  name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  


  constructor(private serverService: ServerService) { }

  ngOnInit() {
    
  }

}