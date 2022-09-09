import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ModeleService {

  private SERVER_URL: String = environment.SERVER_URL;
  constructor(
    private httpClient: HttpClient, 
    private localStorage: LocalStorageService
  ) {}

  ModelRegister(
    nom: string
  ) 
  {
    const API_URL = this.SERVER_URL + '/model/register';
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
    });
    return this.httpClient.post(
        API_URL,
        {
            nom: nom
        }
        // { headers: headers }
    );
  }

  getAllModel() {
    // const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/model';
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        // 'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  checkModelByNom(id: string) {
    // const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/matieres/' + id;
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        // 'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  addMatiere(
    id: String,
    matieres: any
  ) {
    // const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/matieres/add';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'x-access-token': `${token}`,
    });
    const dataUser = {
      id: id,
      matieres: matieres
    };
    return this.httpClient.put(API_URL, dataUser, { headers: headers });
  }

  deleteMatiere(nom : string, id: string){
    // const token = this.localStorage.get('x-access-token');
      const API_URL = this.SERVER_URL + '/matieres/delete';
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        // 'x-access-token': `${token}`,
      });
      const dataUser = {
        id: id,
        nom: nom
      };
      return this.httpClient.put(API_URL, dataUser, { headers: headers });
  }

  updateMatiere(nom : string, id: string){
    // const token = this.localStorage.get('x-access-token');
      const API_URL = this.SERVER_URL + '/matieres/delete';
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        // 'x-access-token': `${token}`,
      });
      const dataUser = {
        id: id,
        nom: nom
      };
      return this.httpClient.put(API_URL, dataUser, { headers: headers });
  }
}
