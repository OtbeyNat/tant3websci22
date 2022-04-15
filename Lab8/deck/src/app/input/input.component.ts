import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output() submit = new EventEmitter();
  @Input() cardlist:any;

  onclick(_method:string,_game:string,_name:string,_type:string,_id:string,_atk:string,_def:string,_url:string,_field:string) {
    let data = {
      method: _method,
      game: _game,
      name: _name,
      archetype: _type,
      id: _id,
      atk: _atk,
      def: _def,
      url: _url,
      field: _field
    }
    this.submit.emit(data);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
