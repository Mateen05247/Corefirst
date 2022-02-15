import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  contactForm:any;
  contactdata:any;
  countries = ["Canada", "India", "England", "UK" ];
    constructor() { }
  
    ngOnInit(): void {
      this.contactForm = new FormGroup({
        firstname: new FormControl('',[Validators.required,Validators.minLength(10)]),
        lastname: new FormControl('',[Validators.required,Validators.maxLength(15)]),
        email: new FormControl('',[Validators.required]),
        mobile:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
        gender: new FormControl('male'),
        isMarried: new FormControl({value:true}),
        country: new FormControl('',[Validators.required])
      })
    }
    get firstname() {
      return this.contactForm.get('firstname');
   }
   get lastname() {
    return this.contactForm.get('lastname');
  } 
  
  get email() {
    return this.contactForm.get('email');
  } 
  
  get gender() {
    return this.contactForm.get('gender');
  } 
  
  get isMarried() {
    return this.contactForm.get('isMarried');
  } 
  
  get country() {
    return this.contactForm.get('country');
  } 
  get mobile() {
    return this.contactForm.get('mobile');
  } 
  
  
    allownumbers(event:any)
    {
      var charCode=(event.which)?event.which:event.keyCode;
      if (charCode<48 || charCode>57)
      {
        event.preventDefault();
        return false;   
       }
       else 
        return true;
    }
  
  
    onSubmit() {
      this.contactdata=this.contactForm.value;
     
    }
  
  }