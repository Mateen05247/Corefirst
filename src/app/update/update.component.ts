import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  employeeAdd:any;
  addEmployee:any;
  emp: any;
  addData: any;
  cityL: any;
  res:any;
responseData: resultData | undefined;
  constructor(private Myservice:ServiceService,private router:Router, private aR:ActivatedRoute) { }
  skillsArray:Array<any>=[{name:'C sharp',value:'C sharp'},
                        {name:'C',value:'C'},
                        {name:'Angular',value:'Angular'}];
selectedSkillArray:any=[];
  stateL: any;
  Id!: string | null;
  ngOnInit(): void {
    this.addEmployee= new FormGroup(
      {
        Name:new FormControl(),
        DOJ:new  FormControl(),
        DOB:new FormControl(),
       
        Email:new FormControl(),
        Mobile:new FormControl(),
        Password:new FormControl(),
        Gender:new FormControl(),
        Skills:new FormControl(),
        State:new FormControl(null),
        City:new FormControl(null)
       
      }
    );
    this.Myservice.getLocation(1,"State").subscribe((r:any)=>{this.stateL=r;});
    this.Id=this.aR.snapshot.paramMap.get("Id");
    this.Myservice.updateEmployeeFetch(this.Id).subscribe((r:any)=>{
      this.responseData = r;
     
     // this.selectedSkillArray=this.responseData?.skills.split(",");
     // this.addEmployee.controls['Skills1'].setValue(this.selectedSkillArray);  
      this.addEmployee.controls['Name'].setValue(this.responseData?.name);
     // this.employeeAdd.controls['Id'].setValue(this.responseData?.name);
      this.addEmployee.controls['DOJ'].setValue(this.responseData?.doj);
      this.addEmployee.controls['DOB'].setValue(this.responseData?.dob);
     
      this.addEmployee.controls['Mobile'].setValue(this.responseData?.mobile);
      this.addEmployee.controls['Password'].setValue(this.responseData?.password);
      this.addEmployee.controls['Email'].setValue(this.responseData?.email);
      this.addEmployee.controls['Skills'].setValue(this.responseData?.skills);
      
      this.addEmployee.controls['State'].setValue(this.responseData?.state);

      this.addEmployee.controls['City'].setValue(this.responseData?.city);
      this.addEmployee.controls['Gender'].setValue(this.responseData?.gender);

      

    });
   
 
}
onSubmit()
{
  
 this.emp=this.addEmployee.value;
 delete this.emp['Skills1'];
 this.emp.Id=this.Id;
  this.Myservice.updateEmplyeeData(this.emp).subscribe((r:any)=>{this.addData=r;});
  this.router.navigate(["dashboard"]);
}
onCheckBoxChange(e:any){
  //const checkArray: FormArray= this.addEmployee.get('Skills') as FormArray;
  if(e.target.checked)
  {
    this.selectedSkillArray.push(e.target.value)
  }
  else
  {
    this.selectedSkillArray.splice(this.selectedSkillArray.indexOf(e.target.value),1);
  }
  //alert(this.selectedSkills);
this.addEmployee.controls['Skills'].setValue(this.selectedSkillArray.toString()); 
}
fillCities(value:any)
{
 //alert(value);
  this.Myservice.getLocation(value,"City").subscribe(r=>{this.cityL=r;});
 
  
   
}
isSelected(s:any){
  return this.selectedSkillArray.indexOf(s) >= 0;
}
view()
{
  this.router.navigate(['/dashboard']);
}
get Name()
{
  return this.addEmployee.get('Name');
}

get DOB()
{
  return this.addEmployee.get('DOB');
}
get DOJ()
{
  return this.addEmployee.get('DOJ');
}




get Email()
{
  return this.addEmployee.get('Email');
}
get Mobile()
{
  return this.addEmployee.get('Mobile');
}
get Password()
{
  return this.addEmployee.get('Password');
}
get Gender()
{
  return this.addEmployee.get('Gender');
}
get State()
{
  return this.addEmployee.get('State');
}
get City()
{
  return this.addEmployee.get('City');
}


get Skills()
{
  return this.addEmployee.get('Skills');
}
}

interface resultData{
  name:string;
  email:string;
 id: number;
 
  dob:Date;
  doj:Date;
 

  password:string;
  mobile:string;
  gender:string;
  skills:string;
  state:string;
  city:string;
}