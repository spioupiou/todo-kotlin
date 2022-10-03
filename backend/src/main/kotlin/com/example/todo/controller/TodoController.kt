package com.example.todo.controller

import com.example.todo.entity.Todo
import com.example.todo.form.TodoForm
import com.example.todo.service.TodoService
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin(origins = ["http://localhost:3000"])
@RequestMapping("/api/v1/todos")

class TodoController(private val todoService: TodoService) {
  @GetMapping
  fun findAll(): List<Todo> {
    return todoService.findAll()
  }

  @PostMapping
  fun save(@RequestBody todoForm: TodoForm): Todo {
    return todoService.saveTodo(todoForm)
  }

  @PatchMapping("/{id}")
  fun update(@PathVariable id: Long) {
    todoService.updateTodoStatus(id)
  }
}