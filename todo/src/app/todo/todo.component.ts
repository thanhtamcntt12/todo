import { Component, OnInit } from '@angular/core';
import  _findIndex  from 'lodash/findIndex';
import { _map } from  'lodash/map';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoData: any = [
    {id: 1, name: 'Todo 1', completed: true},
    {id: 2, name: 'Todo 2', completed: false},
    {id: 3, name: 'Todo 3', completed: false},
    {id: 4, name: 'Todo 4', completed: true},
    {id: 5, name: 'Todo 5', completed: false}
  ];
  todos:any;
  filter: string = 'SHOW_ALL';
  constructor() { }

  ngOnInit() {
    this.todos = this.todoData;
   }

  changeFilter(filter) {
    this.filter = filter;
    switch (filter) {
      case 'SHOW_ALL':
      this.todos = this.todoData;
        break;
      case 'IN_PROGRESS':
        this.todos = this.todoData.filter(t => t.completed)
        console.log(this.todos)
        break;
      case 'DONE':
        this.todos = this.todoData.filter(t => !t.completed)
        console.log(this.todos)
        break;
    }
  }
}
