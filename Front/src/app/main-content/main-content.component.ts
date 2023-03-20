import { Component, OnInit, Inject } from '@angular/core';
import { RestService } from '../services/rest.service';
import { MatButtonModule } from '@angular/material/button';
import { TodoItem } from '../types/todoItem';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ExampleDialogComponent } from '../dialog/example-dialog/example-dialog.component';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  constructor(private matDialog: MatDialog, private restSvc: RestService) { }

  ngOnInit(): void { }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = 'some data';
    let dialogRef = this.matDialog.open(ExampleDialogComponent, dialogConfig);
    this.grabId();
  }

  public grabId() {
    var todo = new TodoItem();
    console.log('was here');
    var poo = this.restSvc.getIdOne('1').subscribe((resp) => {
      todo = resp;
      console.log(resp);
      console.log(todo);
    });
  }
}
