import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { IStudent } from '../../model/student';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../service/uuid.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
 
  @ViewChild("studentForm") studentForm !: NgForm
  StudentArr :Array<IStudent> = []
  constructor(
  
  ) { }

  ngOnInit(): void {
   
  }

  
    }
   


