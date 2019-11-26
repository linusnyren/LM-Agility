package linus.com.LMAgility.model;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Student implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String surName, forName, phone, email;

    @OneToMany(fetch= FetchType.EAGER)
    private List<Dog> dogList;


    public Student(String surName, String forName, String phone, String email, List<Dog> dogList) {
        this.surName = surName;
        this.forName = forName;
        this.phone = phone;
        this.email = email;
        this.dogList = dogList;
    }

}
