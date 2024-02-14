package com.example.demo.service.impl;

import com.example.demo.dto.request.EnquiryRequest;
import com.example.demo.dto.response.BasicResponse;
import com.example.demo.dto.response.EnquiryResponse;
import com.example.demo.dto.response.RegisterResponse;

public interface EnquiryService {
      public BasicResponse<EnquiryResponse> getAllEnquiries();
    public RegisterResponse addEnquiry(EnquiryRequest enquiryRequest);
    RegisterResponse deleteEnquiry(String enquiryId);
    public RegisterResponse editEnquiry(String enquiryId, EnquiryRequest enquiryRequest);

}
