import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BulletinService } from 'src/app/shares/services/bulletin.service';

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.scss']
})
export class BulletinComponent implements OnInit {
 
  id = ""
  bulletins: any
  constructor(
    private bulletin: BulletinService,
    private route: Router
  ) { 
    this.getBulletin()
  }

  generer(){
    this.bulletin.addBulletin()
    .subscribe(() =>{
      this.getBulletin()
    })
  }

  getBulletin(){
    this.bulletin.getAllBulletin()
    .subscribe(data =>{
      this.bulletins = data;
      console.log(this.bulletins)
    })
  }

  goTo(id: string){
    this.route.navigate(['/bulletin', id])
  }

  ngOnInit(): void {
  }

}
