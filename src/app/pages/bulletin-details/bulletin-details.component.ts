import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BulletinService } from 'src/app/shares/services/bulletin.service';
import { ModeleService } from 'src/app/shares/services/modele.service';

@Component({
  selector: 'app-bulletin-details',
  templateUrl: './bulletin-details.component.html',
  styleUrls: ['./bulletin-details.component.scss']
})
export class BulletinDetailsComponent implements OnInit {
  classe: any
  nom = ""
  resultat: any;
  constructor(
    private route: ActivatedRoute,
    private bulletin: BulletinService,
    private model: ModeleService
  ) { }

  nomme(nom: string) {
    for(let i=3; i<7; i++){
      if(nom == i.toString()){
        return this.classe = nom + " éme" 
      }
    }
    if(nom == "2"){
      return this.classe = nom + " nde"
    }
    if(nom == "1"){
      return this.classe = nom + " ére"
    }
    return 
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.bulletin.getBulletinById(id)
    .subscribe((res: any) =>{
      this.resultat = res
      console.log(this.resultat)
      this.nom = this.resultat[0].eleve.classe
    })
  }

}
