import { Component, OnInit,ViewChild } from '@angular/core';
import { ServerService } from '../server.service';
import { Patient } from '../patient/patient.component';
import { Profile } from 'selenium-webdriver/firefox';

export interface Profile {
  name: string,
  surname: string,
  patient_disease: string,
  id: number
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  constructor(private serverService: ServerService) { }
selectedPatient: Patient;
	ngOnInit() {
  this.selectedPatient=this.serverService.getSelectedPatient();

}


}

