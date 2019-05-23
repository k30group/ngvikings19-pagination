import { Component, OnInit } from '@angular/core';
import { people, Person } from '../people';

@Component({
  selector: 'k30-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  displayedColumns: string[] = ['index', 'firstname', 'lastname', 'age', 'email'];
  dataSource = people;

}