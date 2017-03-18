import { Injectable } from '@angular/core';

@Injectable()
export class TodosService {

  
  // Add todos
  add(input){
  	// Check if field is empty
	if(input.trim() == ''){
		alert("Please enter todos !")
		return false;
	}
	let todosObj = { name: input };
	if(localStorage.getItem("todos") == null) {
		let todoArr = [];
		todoArr.push(todosObj);
		localStorage.setItem("todos", JSON.stringify(todoArr));
	} else {
		let getTodos = JSON.parse(localStorage.getItem("todos"));
		getTodos.push(todosObj);
		localStorage.setItem("todos", JSON.stringify(getTodos));
	}
  }

  // Delete todos function
	delete(todoIndex) {
	var todos = JSON.parse(localStorage.getItem("todos"));
	todos.forEach( function(element, index) {
		if(index == todoIndex){
			todos.splice(index, 1);
			localStorage.setItem("todos", JSON.stringify(todos));
		}
	});


}
