import { Component, OnInit } from '@angular/core';
import { IStudent } from '../../model/student';
import { StudentService } from '../../service/student.service';
import { UuidService } from '../../service/uuid.service';
import { SnackbarService } from '../../service/snackbar.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    StudentArr :Array<IStudent> =[]
  constructor(
    private _StudentService : StudentService,
        private _UuidService : UuidService,
        private _MatDialog : MatDialog,
        private _snackbar : SnackbarService,
        private _routes : Router
  ) { }

  ngOnInit(): void {
     this.getAllStd()
  }

    getAllStd(){
    this._StudentService.fetchAllStd()
    .subscribe({
      next : data =>{
       this.StudentArr  = data
       }
    })
  }

  singleStd(id:string){
      this._routes.navigate(["/student",id])
  }

 
  
    onRemove(id:string){

      let configobj = new MatDialogConfig();
      configobj.width = "400px";
      configobj.maxHeight = "90%"
      configobj.disableClose = true;
      configobj.data = "Are You Sure, You want Remove This Student"

     let MatDilaofRef=  this._MatDialog.open(GetConfirmComponent,configobj)

     MatDilaofRef.afterClosed()
     .subscribe({
      next:res=>{
        if(res){
              this._StudentService.removeStd(id)
      .subscribe({
        next :res=>{
          console.log(res)
          this._snackbar.openSnackBar("This student is removed successfully")
        }
      })
        }
      }
     })
  
    }

}
