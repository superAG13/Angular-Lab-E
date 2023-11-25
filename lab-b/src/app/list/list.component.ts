import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  elements: string[];
  inputText: string;

  constructor() {
    this.elements = [];
    this.inputText = "";
  }

  ngOnInit(): void {
  }

  inputToArray() {
    this.elements.push(this.inputText);
    this.inputText = "";
  }
  remove(index: number) {
    this.elements.splice(index, 1);
  }
}
