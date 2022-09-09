import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddEleveComponent } from 'src/app/components/add-eleve/add-eleve.component';
import { EleveService } from 'src/app/shares/services/eleve.service';

@Component({
  selector: 'app-eleve',
  templateUrl: './eleve.component.html',
  styleUrls: ['./eleve.component.scss']
})
export class EleveComponent implements OnInit {
  enregistrement = false;
  eleves: any
  registerForm: FormGroup
  constructor(
    private dialog: MatDialog,
    private eleve: EleveService,
    private formbuilder: FormBuilder
  ) {
    this.registerForm = this.formbuilder.group({
      nom: formbuilder.control(''),
      prenom: formbuilder.control(''),
      age: formbuilder.control(''),
      classe: formbuilder.control('')
    })
    this.getEleve();
  }

  onRegister(){
    console.log(this.registerForm.value.classe)
    this.eleve.eleveRegister(
      this.registerForm.value.nom,
      this.registerForm.value.prenom,
      this.registerForm.value.age,
      this.registerForm.value.classe
    ).subscribe(()=>{
      this.getEleve();
      this.enregistrement = false;
    })
  }

  getEleve(){
    this.eleve.getEleve().subscribe(res =>{
      this.eleves = res
    })
  }

  addEleve(){
    this.enregistrement = true;
  }

  ngOnInit(): void {
  }


}
