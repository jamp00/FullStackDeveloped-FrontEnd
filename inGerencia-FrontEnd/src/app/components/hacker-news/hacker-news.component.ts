import { Component, OnInit, ViewChild } from '@angular/core';

import { HacherNewsService } from '../../services/hacher-news.service';
import { HackerNew } from '../../models/HackerNew';
import {MatPaginator} from '@angular/material/paginator';

import {MatTableDataSource, MatTable} from '@angular/material/table';


@Component({
  selector: 'app-hacker-news',
  templateUrl: './hacker-news.component.html',
  styleUrls: ['./hacker-news.component.css']
})
export class HackerNewsComponent implements OnInit {

  dataSource = new MatTableDataSource<HackerNew>();


  displayedColumns :  string[] = ['title', 'author', 'createdAt', 'delete'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatTable, {static: true}) table: MatTable<HackerNew>;

  constructor( private hacherNewsService : HacherNewsService) { }

  ngOnInit() {
    this.hacherNewsService.getHackerNews()
      .subscribe(
        hackerNew => {
          this.dataSource.data = hackerNew;
        },
        err => console.log(err)
      )
      this.dataSource.paginator = this.paginator;      
  }

  DeletedHackerNew( obj ){
    var id = obj.id;
    console.log("Algo hace: " +id );
    this.hacherNewsService.setDeletedHackerNew( id )
      .subscribe(
        updated =>{
          this.refresh();
        }
      );

  }

  refresh(){
    this.hacherNewsService.getHackerNews()
    .subscribe(
      hackerNew => {
        this.dataSource.data = hackerNew;
      },
      err => console.log(err)
    )
    this.table.renderRows();
  }

}

