package com.example.demo.controller;

import static com.example.demo.utils.MyConstant.AUTH;
import static com.example.demo.utils.MyConstant.LOGIN;
// import static com.example.demo.utils.MyConstant.Login;
import static com.example.demo.utils.MyConstant.REGISTER;
import static org.springframework.http.HttpStatus.ACCEPTED;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.request.LoginRequest;
import com.example.demo.dto.request.RegisterRequest;
import com.example.demo.dto.response.LoginResponse;
import com.example.demo.dto.response.RegisterResponse;
import com.example.demo.service.impl.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(AUTH)
@RequiredArgsConstructor


public class AuthenticationController {
    private final AuthenticationService authenticationService;
    @PostMapping(REGISTER) 
    public ResponseEntity<RegisterResponse>register(@RequestBody RegisterRequest request)
    {
        RegisterResponse response=new RegisterResponse();
        try{
            response=authenticationService.register(request);
            return new ResponseEntity<>(response,ACCEPTED);
        }catch (Exception e)
        {
            response.setMessage("Something went wrong!");
            return new ResponseEntity<>(response,EXPECTATION_FAILED);
        }
    }
     
   
    
     @PostMapping(LOGIN)
    public ResponseEntity<LoginResponse>login(@RequestBody LoginRequest request)
    {
        LoginResponse response=new LoginResponse();
        try{
            response=authenticationService.login(request);
            return new ResponseEntity<>(response,ACCEPTED);
        }catch(Exception e)
        {
            response.setMessage("Something went wrong!");
            response.setToken("");
            return  new ResponseEntity<>(response,EXPECTATION_FAILED);
        }
    }
}
