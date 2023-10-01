package com.springboot.rest.webservices.restfulwebservices.todo;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;
import org.hibernate.annotations.Type;

@Entity
@Data
@AllArgsConstructor
@ToString
public class Todo {
	@Id
	@GeneratedValue
	private Integer id;

	private String username;
	
	private String description;

	private LocalDate targetDate;

	@Column(nullable = false, columnDefinition = "TINYINT", length = 1)
	private boolean done;

}