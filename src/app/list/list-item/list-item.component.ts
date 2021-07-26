import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsertaskService } from 'src/app/usertask.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() item:string="";
  @Output() deleteItem = new EventEmitter<{item:string}>();
  isEdit=false;
  constructor(private service:UsertaskService) { 
    
  }
  onEdit(){
    this.isEdit=!this.isEdit;
  }
  onSubmit(){
    this.service.editTodo(1,this.item);
    this.service.user.todos[1]=this.item;
    this.isEdit=!this.isEdit;
  }
  onDelete(){
    this.deleteItem.emit({item:this.item});
  }


  ngOnInit(): void {
    
  }

}
