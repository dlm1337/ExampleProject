import { Component, OnInit, Inject } from '@angular/core';
import { RestService } from '../services/rest.service';
import { MatButtonModule } from '@angular/material/button';
import { NameAndAddress } from '../types/nameAndAddress';
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
  public latestNameAndAddress: NameAndAddress;

  constructor(private matDialog: MatDialog, private restSvc: RestService) { }

  ngOnInit(): void {
    this.restSvc.getLatestNameAndAddress().subscribe(
      (nameAndAddress: NameAndAddress) => {
        this.latestNameAndAddress = nameAndAddress;
        console.log(this.latestNameAndAddress); // log the retrieved name and address
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = 'some data';
    let dialogRef = this.matDialog.open(ExampleDialogComponent, dialogConfig);
  }
}
