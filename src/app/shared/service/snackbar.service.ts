import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private _snackbar : MatSnackBar
  ) { }

  openSnackBar(mesg:string){
    this._snackbar.open(mesg,"close",{
      horizontalPosition : "left",
      verticalPosition :"bottom",
      duration:3000
    })
  }
}
