package com.example.todo.controller

import com.example.todo.entity.Todo
import com.example.todo.form.TodoForm
import com.example.todo.service.TodoService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/v1/todos")

class TodoController(private val todoService: TodoService) {
  @CrossOrigin(origins = ["http://localhost:8080", "http://localhost:3000"])
  @GetMapping
  fun findAll(): List<Todo> {
    return todoService.findAll()
  }

  @CrossOrigin(origins = ["http://localhost:8080", "http://localhost:3000"])
  @PostMapping("/register")
  fun save(@RequestBody todoForm: TodoForm): Todo {
    return todoService.saveTodo(todoForm)
  }

  @PatchMapping("/{id}")
  fun update(@PathVariable id: Long) {
    todoService.updateTodoStatus(id)
  }
}