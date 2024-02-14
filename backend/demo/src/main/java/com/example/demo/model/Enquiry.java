package com.example.demo.model;

import static jakarta.persistence.GenerationType.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="enquiry")


public class Enquiry {
    @Id
    @GeneratedValue(strategy=UUID)
    
        private String enquiryId;

    @Column(nullable=false)
        private String email;

    @Column(nullable=false)
        private String enquiry;

    @ManyToOne
    @JoinColumn(name="user_id",nullable=false)
    private User user;

    @ManyToOne
    @JoinColumn(name="course_id",nullable=false)
    private Course course;

}
