import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  @Input() carddata:any;

  constructor() { }

  ngOnInit(): void {
  }

}
