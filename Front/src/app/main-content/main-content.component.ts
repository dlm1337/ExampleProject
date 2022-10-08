import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { MatButtonModule } from '@angular/material/button';
import { TodoItem } from '../types/todoItem';
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
  constructor(private restSvc: RestService) {}

  ngOnInit(): void {}

  tiles: Tile[] = [
    { text: 'One', cols: 1, rows: 2, color: 'lightblue' },
    { text: 'Two', cols: 3, rows: 1, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

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
