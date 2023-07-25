package com.in28minutes.rest.webservices.restfulwebservices.todo;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

//@RestController
public class TodoResource {
	
	private TodoService todoService;

	public TodoResource(TodoService todoService) {
		this.todoService = todoService;
	}
	
	@GetMapping("users/{username}/todos")
	public List<Todo> getAllTodosByUser(@PathVariable String username) {
		return todoService.findByUsername(username);
	}
	
	@GetMapping("users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable Integer id) {
		return todoService.findById(id);
	}
	
	@DeleteMapping("users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable Integer id) {
		todoService.deleteById(id);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("users/{username}/todos/{id}")
	public Todo updateTodo(@PathVariable String username, @PathVariable Integer id, @RequestBody Todo todo) {
		todoService.updateTodo(todo);
		return todo;
	}
	
	@PostMapping("users/{username}/todos")
	public Todo addTodo(@PathVariable String username, @RequestBody Todo todo) {
		Todo newTodo = todoService.addTodo(username,todo.getDescription(), todo.getTargetDate(), todo.isDone());
		return newTodo;
	}
	
	
}
