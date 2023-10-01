package com.springboot.rest.webservices.restfulwebservices.todo;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class TodoJpaResource {
	
	private final TodoRepository todoRepository;

	@GetMapping("users/{username}/todos")
	public List<Todo> getAllTodosByUser(@PathVariable String username) {
		return todoRepository.findByUsername(username);
	}
	
	@GetMapping("users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable Integer id) {
		return todoRepository.findById(id).get();
	}
	
	@DeleteMapping("users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable Integer id) {
		todoRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("users/{username}/todos/{id}")
	public Todo updateTodo(@PathVariable String username, @PathVariable Integer id, @RequestBody Todo todo) {
		System.out.println(todo.toString());
		todoRepository.save(todo);
		return todo;
	}
	
	@PostMapping("users/{username}/todos")
	public Todo addTodo(@PathVariable String username, @RequestBody Todo todo) {
		todo.setId(null);
		todo.setUsername(username);
		return todoRepository.save(todo);
	}

	@GetMapping("users/todos/targetDate/{targetDate}/done/{done}")
	public List<Todo> getAllTodosByTargetDateAndDone(String localdate, String done) {
		return todoRepository.findByTargetDateAndDone(LocalDate.parse(localdate), Boolean.valueOf(done));
	}
	
	
}
