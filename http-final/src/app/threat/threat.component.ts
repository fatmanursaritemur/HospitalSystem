import { Component, OnInit, ViewChild } from '@angular/core';
import { ServerService } from '../server.service';
import { NgForm } from '@angular/forms';
import { Patient } from '../patient/patient.component';
import { Drug } from '../drug/drug.component';
import { Disease } from '../disease/disease.component';
export interface Treat {
  situation: String,
  drug: Drug,
  patient: Patient,
  disease: Disease,

}

@Component({
  selector: 'app-threat',
  templateUrl: './threat.component.html',
  styleUrls: ['./threat.component.css']
})
export class ThreatComponent implements OnInit {
  patientList: Patient[] = [];
  drugList: Drug[] = [];
  diseaseList: Disease[] = [];
  selectedTreat: Treat;
  treatList : Treat[];

  @ViewChild('updateForm') updateForm: NgForm;
  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.getPatient();
    this.getDisease();
    this.onGet();
    this.getTreatList();
  }
  getPatient() {
    this.serverService.getPatient()
      .subscribe(
        (patients: Patient[]) => {
          this.patientList = patients;
          this.serverService.setPatient(patients);
        }
      );
    (error) => console.log(error)
  }

  getDisease() {
    this.serverService.getDisease()
      .subscribe(
        (diseases: Disease[]) => this.diseaseList = diseases
      );
    (error) => console.log(error)
  }
  onGet() {
    this.serverService.getServers()
      .subscribe(
        (drugs: Drug[]) => this.drugList = drugs
      );

    (error) => console.log(error)


  }
  saveAll(form) {

    form.situation = null;
    this.serverService.saveTreat(form).subscribe(
      (response: Treat) => {
        console.log(response);
        this.updateForm.reset();
        this.selectedTreat = response;
        this.getTreatList();

      },

    ); (error) => console.log(error)


  }

  getTreatList(){
    this.serverService.getTreatList().subscribe(
      (response: Treat[]) => {
        console.log(response);
        this.treatList = response;
      }
    );
  }
  
}