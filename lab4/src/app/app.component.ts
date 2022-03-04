import { Component, Input } from '@angular/core';
import { HttpService } from './http.service';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab4';
  @Input() submit = true;
  pokedata:any;
  flavor:any;

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

  constructor(private HttpService: HttpService) {}

  
}
