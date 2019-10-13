package linus.com.LMAgility.model;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Student")
public class Student extends AuditModel{
    @Id
    @GeneratedValue(generator = "student_generator")
    @SequenceGenerator(
            name = "student_generator",
            sequenceName = "student_sequence",
            initialValue = 1
    )
    private Long id;
    private String surName, forName, phone, email;
    @OneToMany
    private List<Dog> dogList;


}
