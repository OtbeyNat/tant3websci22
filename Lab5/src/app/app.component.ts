import { Component, Input } from '@angular/core';
import { HttpService } from './http.service';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { MongoComponent } from './mongo/mongo.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab5';
  @Input() submit = true;
  pokedata:any;
  flavor:any;
  m_info:any;

  reset() {
    this.submit = true;
  }
  enter(values: Array<string>) {
    this.submit = false;
    //console.log(values);
    this.HttpService.sendGetRequest("../pokemon\/"+values[0].toLowerCase()).subscribe((data: any) => {
      this.pokedata = data;
      console.log(this.pokedata);
      this.HttpService.sendGetRequest("../text\/"+values[0].toLowerCase()).subscribe((flavor: any) => {
        this.flavor = flavor;
        console.log(this.flavor);
      })
    })
  }
  get(id: Number) {
    if (id == -1) {
      this.HttpService.sendGetRequest("../db").subscribe((data: any) => {
        this.m_info = data;
      })
    }
    else {
      this.HttpService.sendGetRequest("../db/"+id).subscribe((data: any) => {
        this.m_info = data;
      })
    }
    console.log(this.m_info);

  }
  post(id: Number,n: String) {
    if (id == -1) {
      var obj = {};
      this.HttpService.sendPostRequest("../db",obj).subscribe((data: any) => {
        this.m_info = data;
      })
    }
    else {
      var o = {name: n};
      this.HttpService.sendPostRequest("../db"+id,o).subscribe((data: any) => {
        this.m_info = data;
      })
    }
    console.log(this.m_info);
  }
  put(id: Number, n:String) {
    if (id == -1) {
      var obj = {name: n};
      this.HttpService.sendPutRequest("../db",obj).subscribe((data: any) => {
        this.m_info = data;
      })
    }
    else {
      var o = {};
      this.HttpService.sendPutRequest("../db/"+id,o).subscribe((data:any) => {
        this.m_info = data;
      })
    }
  }
  delete(id: Number) {
    if (id == -1) {
      this.HttpService.sendDeleteRequest("../db").subscribe((data:any) => {
        this.m_info = data;
      })
    }
    else {
      this.HttpService.sendDeleteRequest("../db/"+id).subscribe((data:any) => {
        this.m_info = data;
      })
    }
  }

  constructor(private HttpService: HttpService) {}

  
}
