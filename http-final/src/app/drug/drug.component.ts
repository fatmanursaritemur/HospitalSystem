import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
export interface Drug {
  drugId: number,
  name: string
}
@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.css']
})
export class DrugComponent implements OnInit {

  drugList: Drug[] = [];

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.onGet();
  }

  onAddServer(name: string) {
    this.drugList.push({
      name: name,
      //capacity: 50,
      drugId: this.generateId()
    })
  }


  onSave(name) {

    let drug = {
      drugName: name,
      drugId: this.generateId()
    };
    this.serverService.saveDrug(drug).subscribe(
      (response: Drug) => {
        this.drugList.push(response);
      },
      (error) => console.log(error)
    );
  }
  onGet() {
    this.serverService.getServers()
      .subscribe(
        (drugs: Drug[]) => this.drugList = drugs
      );

    (error) => console.log(error)


  }
  generateId() {
    return Math.round(Math.random() * 10000);
  }

  delete(drugId) {

    this.serverService.deleteDrug(drugId).subscribe(
      (response) => {
        this.onGet();
      },

    );
    (error) => console.log(error)
  }
}


