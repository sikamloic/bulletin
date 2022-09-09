import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Matieres } from 'src/app/shares/interfaces/matieres';
import { BulletinService } from 'src/app/shares/services/bulletin.service';
import { LocalStorageService } from 'src/app/shares/services/local-storage.service';
import { ModeleService } from 'src/app/shares/services/modele.service';

@Component({
  selector: 'app-modeles',
  templateUrl: './modeles.component.html',
  styleUrls: ['./modeles.component.scss']
})
export class ModelesComponent implements OnInit {
  onRegister : FormGroup;
  matiere = {
    nom: "",
    coeff: NaN,
  };
  add = true;
  matieres : Matieres[] = []
  modele: any;
  message: string = "";
  id = ""
  value = "";
  result: any[] = [];
  res: any[] = [];
  enregistrement = false
  constructor(
    private formbuilder: FormBuilder,
    private model: ModeleService,
    private localstorage: LocalStorageService,
    private bulletin: BulletinService
  ) {
    this.onRegister = this.formbuilder.group({
      classe: formbuilder.control(''),
      nom: formbuilder.control(''),
      coeff: formbuilder.control('')
    });
    this.getAllModel()
  }

  getAllBulletin(param: any){
    this.bulletin.getAllBulletin()
    .subscribe((res:any) =>{
      this.res = res
      const filter = this.res.filter(item =>
        item.eleve.classe == this.value
      )
      filter.map(item => {
        console.log(item._id)
        this.bulletin.addMatiere(item._id, param)
        .subscribe((res)=>{
          console.log(res)
        })
      })
      console.log(filter)
    })
  }

  getAllModel(){
    this.model.getAllModel()
    .subscribe((res) =>{
      this.modele = res;
    })
  }

  onChange(e: any){
    this.model.ModelRegister(e.target.value)
    .subscribe((res:any) =>{
      this.id = res.result;
      this.value = e.target.value;
      this.add = false
      this.getAllModel();
    },
    (err: any) => {
      this.checkByName(e.target.value);
      this.value = e.target.value
      this.add = false;
    }
    );
  }

  checkByName(id: string){
    this.model.checkModelByNom(id)
    .subscribe((res: any) =>{
      this.result = res[0].matieres;
      this.id = res[0]._id
    })
  }

  addMatiere(){
    this.matiere.nom = this.onRegister.value.nom;
    this.matiere.coeff = this.onRegister.value.coeff;
    this.matieres.push(this.matiere)
    let param : any[] = []
    param.push(this.matiere)
    console.log(param)
    this.model.addMatiere(this.id, param)
    .subscribe(() =>{
      this.checkByName(this.value)
      this.getAllBulletin(param)
    })
    this.add = true
  }

  delete(id: string){
    this.model.deleteMatiere(this.value, id)
    .subscribe(() =>{
      this.checkByName(this.value)
      this.deleteBulletin(this.value)
    })
  }

  deleteBulletin(nom: string){
    this.bulletin.getAllBulletin()
    .subscribe((res:any) =>{
      this.res = res
      const filter = this.res.filter(item =>
        item.eleve.classe == this.value
      )
      filter.map(data => {
        this.res = data.matieres;
        this.res.map(item =>{
          this.bulletin.deleteMatiere(data._id, item._id)
          .subscribe((res) =>{
            console.log(res)
          })
        })
      })
    })
  }

  ngOnInit(): void {
  }

}
