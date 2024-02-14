package com.example.demo.service.impl;

import com.example.demo.dto.request.CourseRequest;
import com.example.demo.dto.response.BasicResponse;
// import com.example.demo.dto.response.RegisterResponse;
import com.example.demo.dto.response.RegisterResponse;

public interface CourseService {
     BasicResponse<CourseRequest>getAllCourse();
     public RegisterResponse addCourse(CourseRequest course);
     RegisterResponse deleteCourse (String courseId);
}
