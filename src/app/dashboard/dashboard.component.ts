import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  empId:any;
  result: any;

  constructor(private Myservice:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.Myservice.List().subscribe(r=>{this.result=r;});
  }
  deleteEmp(Id:any)
  {
    if(window.confirm("are you sure you want delete")){
      this.Myservice.deleteEmployee(Id)
      .subscribe((r:any)=>
      {
        this.result=r;
         window.location.reload();
         alert("delete successful");
        });
    }
  }
  updaterecords(Id:any){
    this.empId=Id;
    this.router.navigate(["/update",Id]);
  }
}
