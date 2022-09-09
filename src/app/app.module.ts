import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { EleveComponent } from './pages/eleve/eleve.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AddEleveComponent } from './components/add-eleve/add-eleve.component';
import { ModelesComponent } from './pages/modeles/modeles.component';
import { BulletinComponent } from './pages/bulletin/bulletin.component';
import { BulletinDetailsComponent } from './pages/bulletin-details/bulletin-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EleveComponent,
    AddEleveComponent,
    ModelesComponent,
    BulletinComponent,
    BulletinDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
