import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserComplete } from './user-complete';

@Injectable({
  providedIn: 'root'
})
export class UsertaskService {
  user:UserComplete;
  // headers= new HttpHeaders({
  //   'Content-Type':'application/json'
  // });
  url = "http://localhost:3000/";
  constructor(private http:HttpClient) {
    this.user=new UserComplete("","",[]);
   }
  signup(name:string,email:string,password:string):Observable<string>{
    var body = {"name": name,
      "password": password,
      "email":email};
      var b = JSON.stringify(body);
      b = JSON.parse(b);
      const headers = new HttpHeaders({ 
        'Access-Control-Allow-Origin':this.url+"signup",
        'content-type': 'application/json'
      });
    return this.http.post<string>(this.url+"signup",b,{headers:headers});
  }
  authenticateUser(email:string,password:string){
    const path={
      email:email,
      password:password
    }
    var b = JSON.stringify(path);
      b = JSON.parse(b);
      const headers = new HttpHeaders({ 
        'Access-Control-Allow-Origin':this.url+"signin",
        'content-type': 'application/json'
      });
    return this.http.post<UserComplete>(this.url+"signin",b,{headers:headers});
  }
  editTodo(index:number,todo:string){
    const path = {
      id:this.user._id,
      index:index,
      todo:todo
    }
    var b = JSON.stringify(path);
      b = JSON.parse(b);
      const headers = new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
        'content-type': 'application/json'
      });
    return this.http.post(this.url+"edit/edit",b,{headers:headers});
  }
  deleteTodo(item:string){
    var index,i;
    for(i=0;i<this.user.todos.length;i++){
      if(this.user.todos[i]==item){break;}
    }    
    const path = {
      id:this.user._id,
      index:i
    }
    var b = JSON.stringify(path);
      b = JSON.parse(b);
    this.user.todos.splice(i,1);
    const headers = new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'content-type': 'application/json'
    });
    this.http.post(this.url+"edit/delete",b,{headers:headers});
  }
  addTodo(todo:string){
    const path = {
      "id":this.user._id,
      "todo":todo
    }
    var b = JSON.stringify(path);
      b = JSON.parse(b);
      const headers = new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
        'content-type': 'application/json'
      });
    return this.http.post(this.url+"edit/add",b,{headers:headers});
  }
}

