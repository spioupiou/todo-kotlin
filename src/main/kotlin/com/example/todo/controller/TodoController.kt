package com.example.todo.controller

import com.example.todo.entity.Todo
import com.example.todo.form.TodoForm
import com.example.todo.service.TodoService
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import java.time.LocalDate

@Controller
class TodoController(private val todoService: TodoService) {

  @GetMapping("/")
  fun index(model: Model): String {
    val allTodos: List<Todo> = todoService.findAll()
    model.addAttribute("todos", allTodos)
    model.addAttribute("localDate", LocalDate.now())
    for (todo: Todo in allTodos) {
      println(todo.deadline!! < LocalDate.now())
    }
    return "index"
  }

  @PostMapping("/register")
  fun register(todoForm: TodoForm): String {
    todoService.saveTodo(todoForm)
    return "redirect:/"
  }

  @GetMapping("/search")
  fun search(): String {
    return "search"
  }
}