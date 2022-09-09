import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu = [
    {nom: "élève", to: "/"},
    {nom: "Modeles", to: "/modele"},
    {nom: "bulletin", to: "/bulletin"}
  ]
  showmenu = false;
  constructor() { }

  ngOnInit(): void {
  }

}
