package com.example.demo.service.impl;

import com.example.demo.dto.response.BasicResponse;
import com.example.demo.dto.response.UserResponse;

public interface UserService {
    BasicResponse<UserResponse> getAllUser();
}
