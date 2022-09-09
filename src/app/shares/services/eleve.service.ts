import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class EleveService {

  private SERVER_URL: String = environment.SERVER_URL;
  constructor(private httpClient: HttpClient, private localStorage: LocalStorageService) {}

  eleveRegister(
    nom: string,
    prenom: string,
    age: Number,
    classe: string
  ) 
  {
    const API_URL = this.SERVER_URL + '/eleve/register';
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
    });
    return this.httpClient.post(
        API_URL,
        {
            nom: nom,
            prenom: prenom,
            age: age,
            classe: classe
        }
        // { headers: headers }
    );
  }

  getEleve() {
    // const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/eleve';
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        // 'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }
}
