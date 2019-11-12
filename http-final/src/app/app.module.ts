import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ServerService } from './server.service';
import { DoctorComponent } from './doctor/doctor.component';
import { DrugComponent } from './drug/drug.component';
import { RouterModule } from '@angular/router';

import { DiseaseComponent } from './disease/disease.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patient/patient.component';
import { ProfileComponent } from './profile/profile.component';
import { ThreatComponent } from './threat/threat.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    DrugComponent,

    DiseaseComponent,
    UserComponent,
    LoginComponent,
    PatientComponent,
    ProfileComponent,
    ThreatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,



    RouterModule.forRoot([
      {path:'',component:LoginComponent,pathMatch:'full' },
      {path:'doctor', component:DoctorComponent },
      {path:'drug',component:DrugComponent},
      {path:'disease', component:DiseaseComponent},
      {path:'user', component:UserComponent},
      {path:'patient', component:PatientComponent},
      {path:'profile',component:ProfileComponent},
      {path:'treat',component:ThreatComponent}
    
    ])
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
