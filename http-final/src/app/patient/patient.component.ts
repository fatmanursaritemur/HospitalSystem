import { Component, OnInit, ViewChild } from '@angular/core';
import { ServerService } from '../server.service';
import { NgForm } from '@angular/forms';
import { Router } from '../../../node_modules/@angular/router';
export interface Patient {
  name: string,
  surname: string,
  patient_disease: string,
  patient_drug: string,
  id: number
  situation:string,
}
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  selectedPatient;
  selectedPatient2;
  loggedUser: any
  constructor(private serverService: ServerService, private router: Router) { }
  patientList: Patient[] = []
  patient;
  @ViewChild('updateForm') updateForm: NgForm;
  
  ngOnInit() {
    this.getPatient();
  }
  getPatient() {
    this.serverService.getPatient()
      .subscribe(
        (patients: Patient[]) => {
          this.patientList = patients
          this.serverService.setPatient(patients);
        }
      );
    (error) => console.log(error)
  }
  savePatient(form) {
    this.serverService.savePatient(form).subscribe(
      (response: Patient) => {
        this.getPatient();

      },

    ); (error) => console.log(error)
  }

  generateId() {
    return Math.round(Math.random() * 10000);
  }
  selectPatient(patient) {
    if (this.selectedPatient !== patient) {
      this.selectedPatient = patient
      console.log(this.selectedPatient);
      this.serverService.setPatient(patient);
      this.router.navigate(["/profile"]);

    } else {
      this.selectedPatient = null;
    }
  }
  selectPatientt(patients) {
    this.updateForm.setValue(patients);
  }
 
}
