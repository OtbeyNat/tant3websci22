import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lab8';

  carddata:any;
  cardlist:any;
  hnum:number = 0;
  pnum:number = 0;
  mnum:number = 0;
  ynum:number = 0;

  getList() {
    this.HttpService.getAll().subscribe((clist:any) => {
      this.cardlist = clist;
      for (var x of this.cardlist) {
        console.log(x.game);
      }
    })
  }

  ngOnInit(): void {
    this.getList();
  }

  submit(data:any) {
    if (data.method == 'GET') {
      if (data.field == 'name') {
        this.HttpService.getByName(data.name).subscribe((cdata: any) => {
          this.carddata = cdata;
        });
      }      
      else if (data.field == 'card_id') {
        this.HttpService.getById(data.id).subscribe((cdata: any) => {
          this.carddata = cdata;
        });
      }
    }
    else if (data.method == 'POST') {
      this.HttpService.sendPostRequest(data).subscribe((result: any) => {
        console.log(result);
      })
    }
    else if (data.method == 'PUT') {
      this.HttpService.sendPutRequest(data.id,data).subscribe((result: any) => {
        console.log(result);
      })
    }
    else {
      this.HttpService.sendDeleteRequest(data.id).subscribe((result: any) => {
        console.log(result);
      });
    }
  }

  constructor(private HttpService: HttpService) {}

}
