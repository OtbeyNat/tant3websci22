import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {


  @Output() entered = new EventEmitter()

  output(name: string, method: string) {
    let values = [name,method];
    this.entered.emit(values);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
