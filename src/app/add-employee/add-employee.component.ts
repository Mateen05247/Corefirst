import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
data:any;
  addEmployee:any;
  countV:any;
  stateL:any; 
  cityL:any;
  skillsArray:Array<any>=[
    {Name:'Csharp' , value:'Csharp'},
    {Name:'Angular' , value:'Angular'},
    {Name:'HTML' , value:'HTML'},
    {Name:'CSS' , value:'CSS'}
  ];
  message: any;
  selectedSkillsdata:any=[]
  
  constructor(private Myservice:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.addEmployee=new FormGroup(
      {
      Name:new FormControl(),
      DOJ:new FormControl(),
      DOB:new FormControl(),
      Email:new FormControl(),
      Mobile:new FormControl(),
      Password:new FormControl(),
      Gender:new FormControl(),
      State:new FormControl(),
      City:new FormControl(),
      Skills:new FormControl()

      }
      );
     
      this.Myservice.getLocation(1,"State").subscribe(r=>{this.stateL=r;}
        );
  }

  onCheckBoxChange(e:any){
    //const checkArray: FormArray= this.addEmployee.get('Skills') as FormArray;
    if(e.target.checked)
    {
      this.selectedSkillsdata.push(e.target.value)
    }
    else
    {
      this.selectedSkillsdata.splice(this.selectedSkillsdata.indexOf(e.target.value),1);
    }
    //alert(this.selectedSkills);
 this.addEmployee.controls['Skills'].setValue(this.selectedSkillsdata.toString()); 
}
  onSubmit()
  {
    
    this.data=this.addEmployee.value;
      delete this.data["Skills1"]
      this.Myservice.addEmployee(this.data).subscribe(res=>{if(res)
        {
          this.message="data inserted one";

        }
        else
        {
          this.message="error in data";
        }
        this.router.navigate(['/dashboard']);
      })
  }
  
  

  fillCities(value:any)
  {
   //alert(value);
    this.Myservice.getLocation(value,"City").subscribe(r=>{this.cityL=r;});
   
    
     
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

export class State { 
  constructor(public stateName:string) {

  }	
}
export class City{
  

}