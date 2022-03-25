import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiserver = "http://localhost:3000/api";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(url: string) {
    return this.httpClient.get(url);
  }
  
  public sendPostRequest(url: string, data: object) {
    const headers = { 'content-type': 'application/json'};
    const body = data;
    return this.httpClient.post(url, body,{'headers':headers});
  }

  public sendPutRequest(url: string, data: object) {
    const headers = { 'content-type': 'application/json'};
    const body = data;
    return this.httpClient.put(url, body,{'headers':headers});
  }

  public sendDeleteRequest(url: string) {
    return this.httpClient.delete(url);
  }

  public MongoConnect(url: string) {
    return this.httpClient.get(url);
  }
}
