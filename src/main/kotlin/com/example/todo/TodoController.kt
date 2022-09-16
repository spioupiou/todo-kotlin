package com.example.todo

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class TodoController {
  @GetMapping("/")
  fun index(): String {
    return "index"
  }
}