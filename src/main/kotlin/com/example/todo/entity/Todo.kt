package com.example.todo.entity

import com.example.todo.form.TodoForm
import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import java.time.LocalDate
import java.time.LocalDateTime
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
data class Todo(
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  val id: Long? = null,
  var title: String? = null,
  var deadline: LocalDate? = null,
  var status: Boolean = false,
  @CreationTimestamp
  val createTime: LocalDateTime? = null,

  @UpdateTimestamp
  var updateTime: LocalDateTime? = null
) {
  companion object {
    fun of(todoForm: TodoForm): Todo {
      val todo = Todo()
      todo.title = todoForm.title
      todo.deadline = todoForm.deadline
      return todo
    }
  }
}