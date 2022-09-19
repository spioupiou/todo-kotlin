package com.example.todo.service

import com.example.todo.entity.Todo
import com.example.todo.form.TodoForm
import com.example.todo.repository.TodoRepository
import org.springframework.stereotype.Service

@Service
class TodoService(private val todoRepository: TodoRepository) {
  fun findAll(): List<Todo> = todoRepository.findAll()
  fun saveTodo(todoForm: TodoForm) = todoRepository.save(Todo.of(todoForm))
}