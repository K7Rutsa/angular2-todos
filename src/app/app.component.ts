import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private _todoService: TodosService){   }
  
  list: any[] = [];
  strike: boolean = false;

  addTodos(input){
  	this._todoService.add(input.value);
  	input.value = null;
  	this.list = JSON.parse(localStorage.getItem("todos"));
  }

  keyup(e, input){
  	// if they press enter
	if(e.which == 13){
	    this._todoService.add(input.value);
		// clear input values
		input.value = null;
		this.list = JSON.parse(localStorage.getItem("todos"));
		// prevent page reload
		e.preventDefault()
	}

  }

  deleteTodo(i){
  	this._todoService.delete(i);
  	this.list = JSON.parse(localStorage.getItem("todos"));
  }

  striker(i){
  	let lis = document.querySelectorAll("li");

  	if(! this.strike){
  		lis[i].classList.add('striker');
  	}else {
  		lis[i].classList.remove('striker');
  	}

  	this.strike = !this.strike;

  }

  ngOnInit(){
  	this.list = JSON.parse(localStorage.getItem("todos"));
  }

} //class end

