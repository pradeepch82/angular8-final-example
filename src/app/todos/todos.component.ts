import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

 
  title = 'Todos Table';

  todos: any;

  message = "";

  userId=0;

  constructor(private ts: TodosService,private route:ActivatedRoute) {
    console.log("  ######### TodosComponent created ########");
  }

  ngOnInit() {
   this.userId=this.route.snapshot.queryParams.userId;


    if(this.userId)
    this.getAllTodosByUserId();
    else
    this.getAllTodos();
    console.log("  ######### TodosComponent initialized ########"+this.userId);
  }
  ngOnDestroy() {
    console.log("  ######### TodosComponent destroyed ########");
  }


  getAllTodos() {
    this.ts.getAllTodos()
      .subscribe(response => this.todos = response, error => this.message = error);
  }

  
  getAllTodosByUserId() {
    this.ts.getAllTodosByUserId(this.userId)
      .subscribe(response => this.todos = response, error => this.message = error);
  }
}
