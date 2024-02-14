package com.example.demo.service.impl;


import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.demo.dto.response.BasicResponse;
import com.example.demo.dto.response.UserResponse;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;

    @Override
    public BasicResponse<UserResponse> getAllUser(){
        List<User> users=userRepository.findAll();
        List<UserResponse> userResponses=users.stream().map(user->UserResponse
                .builder()
                 .id(user.getId())
                 .name(user.getName())
                 .email(user.getEmail())
                 .role(user.getRole())
                 .image(user.getImage())
                 .Address(user.getAddress())
                 .phoneNumber((user.getPhoneNumber() != null) ? user.getPhoneNumber() : Long.valueOf(0))
                 .build())
                 .collect(Collectors.toList());
        return BasicResponse.<UserResponse>builder()
                      .message("User data fetched successfuly")
                      .data(userResponses)
                      .build();


        
    }

}
