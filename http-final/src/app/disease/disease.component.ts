import { ServerService } from '../server.service';
import { Component, OnInit } from '@angular/core';

export interface Disease {
  disease_name: string,
  disease_description: string,
  disease_id: string
}

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.css']
})

export class DiseaseComponent implements OnInit {

  constructor(private serverService: ServerService) { }
 
  diseaseList: Disease[] = []
 
  ngOnInit() {
    this.getDisease();

  }

  saveDisease(form) {
    let disease = {
      disease_name: form.disease_name,
      disease_description:form.disease_description, 
      disease_id:this.generateId()

    };
    this.serverService.saveDisease(disease).subscribe(
      (response: Disease) => {
        this.getDisease();
      },
      (error) => console.log(error)
    );
  }

  getDisease() {
    this.serverService.getDisease()
      .subscribe(
        (diseases: Disease[]) => this.diseaseList = diseases
     );
    (error) => console.log(error)
  }

  generateId() {
    return Math.round(Math.random() * 10000);
  }

  delete(disease_id) {
    this.serverService.deleteDisease(disease_id).subscribe(
      (response) => {
        this.getDisease();
      }

    );
    (error) => console.log(error)
  }

}
