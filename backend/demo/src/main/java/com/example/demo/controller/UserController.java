package com.example.demo.controller;

// import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.response.BasicResponse;
import com.example.demo.dto.response.UserResponse;
import com.example.demo.service.impl.UserService;
import com.example.demo.utils.MyConstant;

import lombok.RequiredArgsConstructor;

import static com.example.demo.utils.MyConstant.USERLIST;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequiredArgsConstructor
@RequestMapping(MyConstant.USER)
public class UserController {

    private final UserService userService;
     @GetMapping(USERLIST)
     public ResponseEntity<BasicResponse<UserResponse>> create(){
        BasicResponse<UserResponse> response=new BasicResponse<>();
        try{
            response=userService.getAllUser();
            return new ResponseEntity<>(response,HttpStatus.OK);

        }catch(Exception e) {
            System.out.println(e);
            response.setMessage("Something went wrong!");
            return new ResponseEntity<>(response,HttpStatus.EXPECTATION_FAILED);
        }
     }
     
}
