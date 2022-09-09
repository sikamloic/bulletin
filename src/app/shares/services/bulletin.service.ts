import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class BulletinService {

  private SERVER_URL: String = environment.SERVER_URL;
  constructor(
    private httpClient: HttpClient, 
    private localStorage: LocalStorageService
  ) {}

  addBulletin() {
    // const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/bulletin';
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        // 'x-access-token': `${token}`,
    });
    return this.httpClient.post(API_URL, { headers: headers });
  }

  getAllBulletin() {
    // const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/bulletin';
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        // 'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  getBulletinById(id: string) {
    // const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/bulletin/' +id;
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
    const API_URL = this.SERVER_URL + '/bulletin/add';
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
      const API_URL = this.SERVER_URL + '/bulletin/delete';
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
