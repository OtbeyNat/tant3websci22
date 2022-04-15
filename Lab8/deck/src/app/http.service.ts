import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiserver = "http://localhost:3000/api";

  constructor(private httpClient: HttpClient) { }

  public getAll() {
    return this.httpClient.get('/card');
  }

  public getById(id: number) {
    return this.httpClient.get('/card/id/'+id);
  }

  public getByName(name: string) {
    var n = name.split(' ').join('_');
    return this.httpClient.get('/card/name/'+n);
  }

  public getByAtk(atk: number) {
    return this.httpClient.get('/card/atk/'+atk);
  }

  public getByDef(def: number) {
    return this.httpClient.get('/card/def/'+def);
  }

  public getByType(type: string) {
    return this.httpClient.get('/card/type/'+type);
  }
  
  public sendPostRequest(data: object) {
    const headers = { 'content-type': 'application/json'};
    const body = data;
    return this.httpClient.post('/card', body,{'headers':headers});
  }

  public sendPutRequest(id: number, data: object) {
    const headers = { 'content-type': 'application/json'};
    const body = data;
    return this.httpClient.put('/card/'+id, body,{'headers':headers});
  }

  public sendDeleteRequest(id: number) {
    return this.httpClient.delete('/card/'+id);
  }
}
