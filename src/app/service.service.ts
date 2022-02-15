import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 
  checkurl:string="";
  url="https://localhost:7094/api/CodeFirstAPI";
  constructor(private httpclient:HttpClient) { }
  List()
  {
    return this.httpclient.get(this.url);
  }
  addEmployee(v:any){
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': '',
  };
  return this.httpclient.post(this.url,v,{headers});
  }
  getLocation(ParentId:number,Type:string)
  {
    //https://localhost:7094/api/CodeFirstAPI/LocationList?Parent=1&Type=State

    
   
    return this.httpclient.get(this.url+"/LocationList?ParentId="+ParentId+"&Type="+Type);
  }
  deleteEmployee(Id:any)
  {
    return this.httpclient.delete(this.url+"/"+Id);
  }
  updateEmployeeFetch(Id:any){
    return this.httpclient.get(this.url+"/getrecords?Id="+Id);
  }
  updateEmplyeeData(e:any){
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': '',
  };
  return this.httpclient.put(this.url,e,{headers});
  }
}



