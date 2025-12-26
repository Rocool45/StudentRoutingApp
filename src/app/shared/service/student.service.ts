import { Injectable } from '@angular/core';
import { IStudent } from '../model/student';
import { Observable, of, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
    studentsArr: Array<IStudent> = [
  {
    fname: "Jhon",
    lname: "doe",
    contact: "9876543210",
    email: "jhon2@gmail.com",
    stdid: "STD001",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    fname: "Amit",
    lname: "Sharma",
    contact: "9123456789",
    email: "amit.sharma@gmail.com",
    stdid: "STD002",
    imageUrl: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    fname: "Neha",
    lname: "Patil",
    contact: "9988776655",
    email: "neha.patil@gmail.com",
    stdid: "STD003",
    imageUrl: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    fname: "Priya",
    lname: "Deshmukh",
    contact: "9012345678",
    email: "priya.deshmukh@gmail.com",
    stdid: "STD004",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    fname: "Suresh",
    lname: "Yadav",
    contact: "8899776655",
    email: "suresh.yadav@gmail.com",
    stdid: "STD005",
    imageUrl: "https://randomuser.me/api/portraits/men/78.jpg"
  },
  {
    fname: "Anjali",
    lname: "Mehta",
    contact: "7766554433",
    email: "anjali.mehta@gmail.com",
    stdid: "STD006",
    imageUrl: "https://randomuser.me/api/portraits/women/12.jpg"
  }
];


  constructor() { }

  fetchAllStd():Observable<Array<IStudent>>{
    return of(this.studentsArr)
  }

   singleStd(id:string):Observable<IStudent>{
    let obj = this.studentsArr.find(std=>std.stdid===id) as IStudent
    return of(obj)
  }


  CreateStd(obj:IStudent):Observable<IStudent>{
   this.studentsArr.push(obj)
   return of(obj)
  }

  updateStd(obj:IStudent):Observable<IStudent>{
    let getIndex = this.studentsArr.findIndex(std=>std.stdid===obj.stdid)
    this.studentsArr[getIndex] =obj

    return of(obj)
  }

  removeStd(id:string):Observable<string>{
    let getindex = this.studentsArr.findIndex(std=>std.stdid===id)
    this.studentsArr.splice(getindex,1)

    return of(id)
  }
}
