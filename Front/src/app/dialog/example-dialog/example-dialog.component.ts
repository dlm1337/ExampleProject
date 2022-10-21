import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-example-dialog',
  templateUrl: './example-dialog.component.html',
  styleUrls: ['./example-dialog.component.scss'],
})
export class ExampleDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ExampleDialogComponent>) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }
}
