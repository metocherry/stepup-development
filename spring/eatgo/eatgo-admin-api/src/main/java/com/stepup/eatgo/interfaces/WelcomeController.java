package com.stepup.eatgo.interfaces;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// RestController - 웹에서 접속 가능하게 만들어준다.

@RestController
public class WelcomeController {

    @GetMapping("/")
    public String hello() {
        return "Hello, world!!";
    }
}
