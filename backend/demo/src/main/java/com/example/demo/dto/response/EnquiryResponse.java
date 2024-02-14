package com.example.demo.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EnquiryResponse {
    private String userId;
    private String courseId;
    private String enquiry;
    private String enquiryId;
    
    private String email;
}
