package com.example.demo.service.impl;

import com.example.demo.dto.request.PaymentRequest;
import com.example.demo.dto.response.BasicResponse;
import com.example.demo.dto.response.PaymentResponse;
import com.example.demo.dto.response.RegisterResponse;

public interface PaymentService {
 public BasicResponse<PaymentResponse> getAllPayment();
    public RegisterResponse addPayment(PaymentRequest paymentRequest);

}

