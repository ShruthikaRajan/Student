package com.example.demo.controller;

import static com.example.demo.utils.MyConstant.ADDCOURSE;
import static com.example.demo.utils.MyConstant.COURSELIST;
import static com.example.demo.utils.MyConstant.USER;
import static org.springframework.http.HttpStatus.ACCEPTED;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.request.CourseRequest;
import com.example.demo.dto.response.BasicResponse;
import com.example.demo.dto.response.RegisterResponse;
import com.example.demo.model.Course;
import com.example.demo.repository.CourseRepository;
import com.example.demo.service.impl.CourseService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(USER)
@RequiredArgsConstructor


public class CourseController {
    private final CourseService courseService;
    private final CourseRepository courseRepository;
    @GetMapping(COURSELIST)
        public ResponseEntity<BasicResponse<CourseRequest>> create() {
            BasicResponse<CourseRequest> response =new BasicResponse<>();
            try {
                response = courseService.getAllCourse();
                return new ResponseEntity<>(response,OK);
            } catch (Exception e) {
                response.setMessage("Something wrong!!");
                return new ResponseEntity<>(response,EXPECTATION_FAILED);
            }
        }
    @PostMapping(ADDCOURSE)
    public ResponseEntity<RegisterResponse>addcourse(@RequestBody CourseRequest course)
    {
        RegisterResponse response=new RegisterResponse();
        try{
            response=courseService.addCourse(course);
            return new ResponseEntity<>(response,ACCEPTED);
        }catch (Exception e)
        {
            
            response.setMessage("Something went wrong!");
            return new ResponseEntity<>(response,EXPECTATION_FAILED);
        }
    }

    @PutMapping("/editCourse/{courseId}")
    public ResponseEntity<RegisterResponse> editCourse(@PathVariable String courseId, @RequestBody CourseRequest courseRequest) {
        RegisterResponse response = new RegisterResponse();
        try {
            // Check if the course with the given courseId exists
            Optional<Course> optionalCourse = courseRepository.findById(courseId);
            if (optionalCourse.isPresent()) {
                Course existingCourse = optionalCourse.get();
                // Update the existing course details
                existingCourse.setCourseName(courseRequest.getCourseName());
                existingCourse.setDescription(courseRequest.getDescription());
                existingCourse.setDuration(courseRequest.getDuration());
                existingCourse.setFee(courseRequest.getFee());
                courseRepository.save(existingCourse);
                response.setMessage("Course updated successfully");
                return ResponseEntity.status(HttpStatus.ACCEPTED).body(response);
            } else {
                response.setMessage("Course not found");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }
        } catch (Exception e) {
            response.setMessage("Something went wrong");
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(response);
        }
    }

    @DeleteMapping("/deleteCourse/{courseId}")
    public ResponseEntity<RegisterResponse> deleteCourse(@PathVariable String courseId) {
        RegisterResponse response = courseService.deleteCourse(courseId);
        if (response.getMessage().equals("Course deleted successfully")) {
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(response);
        } else if (response.getMessage().equals("Course not found")) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } else {
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(response);
        }
    }

}
