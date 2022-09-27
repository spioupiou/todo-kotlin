package com.example.todo.service

import com.example.todo.entity.Todo
import com.example.todo.form.TodoForm
import com.example.todo.repository.TodoRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service

@Service
class TodoService(private val todoRepository: TodoRepository) {
  fun findAll(): List<Todo> = todoRepository.findAll()
  fun saveTodo(todoForm: TodoForm) = todoRepository.save(Todo.of(todoForm))
  fun findTodoById(id: Long): Todo? = todoRepository.findByIdOrNull(id)

  fun updateTodoStatus(id: Long) {
    val todoToUpdate: Todo? = findTodoById(id)
    todoToUpdate?.let {
      todoToUpdate.status = !todoToUpdate.status
      todoRepository.save(todoToUpdate)
    }
  }
}