package linus.com.LMAgility.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Getter
@Setter
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
    private String surName;
    private String forName;
    private String phone;


    public Student(){};
    public Student(String surName, String forName, String phone) {
        this.surName = surName;
        this.forName = forName;
        this.phone = phone;
    }
}
