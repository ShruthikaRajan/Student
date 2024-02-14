package com.example.demo.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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
@Table(name="course")


public class Course {
    @Id
    @Column(nullable=false)
        private String courseId;

    @Column(nullable=false)
        private String courseName;

    @Column(nullable=false)
        private String description;

    @Column(nullable=false)
        private String duration;

    @Column(nullable=false)
        private String fee;

    @OneToMany(mappedBy="course")
    private List<Enquiry> enquiries;

    

   
    


  

    

    
    
}
