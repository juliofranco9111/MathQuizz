import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  
  constructor() { }


  getUserName():string{
    const nameUser = localStorage.getItem('name')
   return nameUser && nameUser.length > 0 && nameUser !== '' ? nameUser : '';
  }

  setUserName( name:string):void{
    name = name.trim();
    localStorage.setItem('name', name);
  }
}
