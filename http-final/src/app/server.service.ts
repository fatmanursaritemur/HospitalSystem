import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user/user.component';
import { Patient } from './patient/patient.component';

@Injectable({ providedIn: "root" }
)
export class ServerService {
  loggedUser: User;
  patients: Patient;
  constructor(private http: HttpClient) { }

  setUser(user) {
    this.loggedUser = user;
  }
  setPatient(patients) {
    this.patients = patients;
  }
  saveTreat(form) {
    return this.http.post("http://localhost:9090/saveTreat/", form).pipe();
  }

  getSelectedPatient() {
    return this.patients;
  }
  login(user) {
    return this.http.post("http://localhost:9090/loginYap", user).pipe();
  }
  storeServers(servers: any[]) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post('http://localhost:9090/members', servers, { headers: headers }).pipe();
  }
  getServers() {
    return this.http.get('http://localhost:9090/getAll').pipe();
  }
  saveDrug(drug) {
    return this.http.post("http://localhost:9090/save", drug).pipe();
  }
  saveDoctor(doctor) {
    return this.http.post("http://localhost:9090/saveDoctor", doctor).pipe();
  }
  deleteDrug(drugId) {
    return this.http.post("http://localhost:9090/delete/" + drugId, null).pipe();
  }
  getDoctors() {
    return this.http.get('http://localhost:9090/getAllDoctor').pipe();
  }
  getDisease() {
    return this.http.get('http://localhost:9090/getDiseases').pipe();
  }
  deleteDisease(disease_id) {
    return this.http.post('http://localhost:9090/delete/' + disease_id, null).pipe();
  }
  saveDisease(disease) {
    return this.http.post("http://localhost:9090/saveDisease/", disease).pipe();
  }
  getUser() {
    return this.http.get("http://localhost:9090/getUser/").pipe();
  }
  saveUser(user) {
    return this.http.post("http://localhost:9090/saveUser/", user).pipe();
  }
  deleteUser(userId) {
    return this.http.post("http://localhost:9090/deleteUser/" + userId, null).pipe();
  }
  getPatient() {
    return this.http.get("http://localhost:9090/getAllPatient/").pipe();
  }
  savePatient(patient) {
    return this.http.post("http://localhost:9090/savePatient/", patient).pipe();
  }
  getName(patient) {
    return this.http.get("http://localhost:9090/getName/").pipe();
  }
  getId(patient) {
    return this.http.get("http://localhost:9090/getByIdPatient/id").pipe();
  }

  getTreatList(){
    return this.http.get("http://localhost:9090/getTreatList").pipe();
  }
}
