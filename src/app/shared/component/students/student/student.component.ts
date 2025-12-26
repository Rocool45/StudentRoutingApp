import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IStudent } from 'src/app/shared/model/student';
import { StudentService } from 'src/app/shared/service/student.service';
import { GetConfirmComponent } from '../../get-confirm/get-confirm.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  studentsArr !:IStudent
  constructor(
    private _studentservice : StudentService,
    private _route : ActivatedRoute,
    private _MatDialog : MatDialog,
    private _snackbar : SnackbarService,
    private _router : Router
  ) { }

  ngOnInit(): void {
this.getSingleObj()
  }

  getSingleObj(){
     const id = this._route.snapshot.params['id'];
   this._studentservice.singleStd(id)
   .subscribe({
    next :res=>{
      if(res){
        this.studentsArr = res
      }
    }
   })
  }

  
    onRemove(id:string){
      let configobj = new MatDialogConfig;
      configobj.width = "400px";
      configobj.maxHeight = "90%"
      configobj.disableClose = true;
      configobj.data = "Are You Sure, You want Remove This Student"

     let MatDilaofRef=  this._MatDialog.open(GetConfirmComponent,configobj)

     MatDilaofRef.afterClosed()
     .subscribe({
      next:res=>{
        if(res){
              this._studentservice.removeStd(id)
      .subscribe({
        next :res=>{
          console.log(res)
          this._snackbar.openSnackBar("This student is removed successfully")
          this._router.navigate(["dashboard"])
        }
      })
        }
      }
     })
  
    }

}
