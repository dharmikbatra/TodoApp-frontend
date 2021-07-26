import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsertaskService } from '../usertask.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  isone=true;
  istwo=false;
  email="";
  password="";
  name="";
  registerText="Register";
  constructor(private service:UsertaskService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
  }
  fxn1(){
    this.isone=true;
    this.istwo=false;    
  }
  fxn2(){
    this.istwo=true;  
    this.isone=false;  
  }
  onLogin(formValue:NgForm){
    console.log(formValue.value.email);
    this.service.authenticateUser(formValue.value.email,formValue.value.password)
    .subscribe(doc=>{
      console.log(doc);      
      this.service.user._id=doc._id;
      this.service.user.todos = doc.todos;
      this.service.user.email = doc.email;
      this.router.navigate(['/todo']);
    },err=>{
      console.log(err);
      
    });
  }
  onRegister(formValue:NgForm){
    console.log(formValue.value.email);    
    this.service.signup(formValue.value.name,formValue.value.email,formValue.value.password).subscribe((doc)=>{
      this.registerText= "hello "+ doc; 
    },err=>{
      this.registerText= "hello "+err.error.text + ",Now Login";
            
    })
  }

}
