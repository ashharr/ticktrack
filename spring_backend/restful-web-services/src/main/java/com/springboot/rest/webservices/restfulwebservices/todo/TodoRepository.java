package com.springboot.rest.webservices.restfulwebservices.todo;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Integer>{

	List<Todo> findByUsername(String username);

	List<Todo> findByTargetDateAndDone(LocalDate targetDate, Boolean isDone);
}
