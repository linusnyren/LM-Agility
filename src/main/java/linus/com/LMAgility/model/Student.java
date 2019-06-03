package linus.com.LMAgility.model;

import javax.persistence.*;
import java.util.List;

@Entity
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
    private String dogName;
    private String email;
    private boolean wantEmail = true;

    private Activity activity;

    @ManyToMany(fetch = FetchType.LAZY)
    private List<Dog> dogList;

    public Student(){};
    public Student(String surName, String forName, String phone, List<Dog> dogList, String email, boolean wantEmail) {
        this.surName = surName;
        this.forName = forName;
        this.phone = phone;
        this.dogList = dogList;
        this.email = email;
        this.wantEmail = wantEmail;

    }
    public boolean isWantEmail() {
        return wantEmail;
    }

    public void setWantEmail(boolean wantEmail) {
        this.wantEmail = wantEmail;
    }
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    public Long getId() {
        return id;
    }

    public String getSurName() {
        return surName;
    }

    public void setSurName(String surName) {
        this.surName = surName;
    }

    public String getForName() {
        return forName;
    }

    public void setForName(String forName) {
        this.forName = forName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public List<Dog> getDogList() {
        return dogList;
    }

    public void setDogList(List<Dog> dogList) {
        this.dogList = dogList;
    }

    public void addDog(Dog dog) {
        dogList.add(dog);
    }
}
