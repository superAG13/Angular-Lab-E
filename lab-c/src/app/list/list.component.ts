import { Component,OnInit } from '@angular/core';
import {Person} from "../person";
import {PersonLsService} from "../person-ls.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  people: Person[] = [];
  constructor(private PersonLsService:PersonLsService) { }
  ngOnInit(): void {
    this.people = this.PersonLsService.getAll();
  }
  delete(index: number): void {
    if(confirm("Are you sure?")){
      this.PersonLsService.deletePerson(index);
      this.people = this.PersonLsService.getAll();
    }
  }
}
