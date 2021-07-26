import { Component, OnInit } from '@angular/core';
import { UsertaskService } from '../usertask.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  todos: string[] = this.service.user.todos;
  newTodo = "";
  addForm = false;
  constructor(private service:UsertaskService) {
    
  }

  ngOnInit(): void {
      
  }
  onAddTodo(){
    this.service.addTodo(this.newTodo).subscribe(doc=>{
      console.log(doc);      
    });
    this.service.user.todos.push(this.newTodo);
    this.newTodo="";
    this.todos = this.service.user.todos;
  }
  toggleAddForm(){
    this.addForm = !this.addForm;
  }
  onDelete(delindex:{item:string}){
    this.service.deleteTodo(delindex.item);
  }

}
