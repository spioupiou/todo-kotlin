package com.example.todo.form

import org.springframework.format.annotation.DateTimeFormat
import java.time.LocalDate

data class TodoForm(
  val title: String,

  @DateTimeFormat(pattern = "yyyy-MM-dd")
  val deadline: LocalDate
)