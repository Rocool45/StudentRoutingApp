import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IStudent } from 'src/app/shared/model/student';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';
import { StudentService } from 'src/app/shared/service/student.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
   isInEditMode : boolean = false;
   editId  !: string

     @ViewChild("studentForm") studentForm !: NgForm
  constructor(
     private _StudentService : StudentService,
        private _UuidService : UuidService,
        private _MatDialog : MatDialog,
        private _snackbar : SnackbarService,
    private Routes : Router,
    private _AtciveRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
   this.patchStd()
  }

  patchStd(){
    setTimeout(() => {
    let id:string = this._AtciveRoute.snapshot.params["id"]
   this._StudentService.singleStd(id)
   .subscribe({
    next :res=>{
     if(res){
      this.editId = res.stdid
       this.isInEditMode = true
     this.studentForm.form.patchValue(res)
     }
    }
   })
   }, 0);
  }
 onSubmit(){
     if(this.studentForm.valid && this.studentForm.dirty){
      let obj :IStudent = {...this.studentForm.value,stdid:this._UuidService.uuid()} 
     this._StudentService.CreateStd(obj)
     .subscribe({
      next : res=>{
        this.studentForm.reset()
        this._snackbar.openSnackBar("the student is Added successfully")
         this.Routes.navigate(["dashboard"])
      }
     })
     }
    }
    onUpdate(){
      if(this.studentForm.valid){
        let Update_obj = {...this.studentForm.value,stdid:this.editId}
         
      this._StudentService.updateStd(Update_obj)
      .subscribe({
        next : res=>{
         if(res){
           this.studentForm.reset()
          this.isInEditMode = false;
          this._snackbar.openSnackBar("The student is Updated successfully")
           this.Routes.navigate(["dashboard"])
         }
        }
      })
      }
    

}}