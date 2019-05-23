import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { people, Person } from '../people';

@Component({
  selector: 'k30-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['index', 'firstname', 'lastname', 'age', 'email'];
  dataSource = new MatTableDataSource<Person>(people);

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}