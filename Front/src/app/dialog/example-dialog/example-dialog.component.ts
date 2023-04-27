import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { NameAndAddress } from '../../types/nameAndAddress';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-example-dialog',
  templateUrl: './example-dialog.component.html',
  styleUrls: ['./example-dialog.component.scss'],
})
export class ExampleDialogComponent implements OnInit {
  public mainGroup: FormGroup;
  public nameAndAddress: NameAndAddress;

  constructor(public dialogRef: MatDialogRef<ExampleDialogComponent>,
    public formBuilder: FormBuilder, public cdr: ChangeDetectorRef, public restSvc: RestService) { }

  ngOnInit(): void {
    this.nameAndAddress = new NameAndAddress();
    this.mainGroup = this.formBuilder.group({
      company: [this.nameAndAddress.company],
      firstName: [this.nameAndAddress.firstName],
      lastName: [this.nameAndAddress.lastName],
      address: [this.nameAndAddress.address],
      address2: [this.nameAndAddress.address2],
      city: [this.nameAndAddress.city],
      state: [this.nameAndAddress.state],
      postalCode: [this.nameAndAddress.postalCode]
    });
  }

  get mainBasic() {
    return this.mainGroup.controls;
  }

  createNameAndAddress() {
    const nameAndAddress: NameAndAddress = {
      id: 1,
      company: this.mainBasic.company.value,
      firstName: this.mainBasic.firstName.value,
      lastName: this.mainBasic.lastName.value,
      address: this.mainBasic.address.value,
      address2: this.mainBasic.address2.value,
      city: this.mainBasic.city.value,
      state: this.mainBasic.state.value,
      postalCode: this.mainBasic.postalCode.value
    };
    this.restSvc.saveNameAndAddress(nameAndAddress).subscribe((resp) => {
      if (resp) {
        //this.toastSvc.success('Ammo Created');
        console.log("success with posting name and address")
      } else {
       // this.toastSvc.error('couldnt create ammo');
       console.log("failure with posting name and address")
      }
    });
    return nameAndAddress; 
  }
  ngAfterViewInit() { 
    this.cdr.detectChanges();
  }

  close() {
    this.dialogRef.close();
  }
}
