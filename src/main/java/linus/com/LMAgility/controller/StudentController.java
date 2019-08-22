package linus.com.LMAgility.controller;

import linus.com.LMAgility.mail.MailSender;
import linus.com.LMAgility.model.Activity;
import linus.com.LMAgility.model.Dog;
import linus.com.LMAgility.model.Student;
import linus.com.LMAgility.repository.DogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.*;
import linus.com.LMAgility.repository.ActivityRepository;
import linus.com.LMAgility.repository.StudentRepository;


import javax.xml.ws.Response;
import java.util.ArrayList;
import java.util.List;

@RestController
public class StudentController {
    @Autowired
    private StudentRepository studentRepo;

    @Autowired
    private ActivityRepository activityRepo;

    @Autowired
    private DogRepository dogRepo;


    @CrossOrigin
    @PostMapping("/student")
    public ResponseEntity<Student> addStudent(@RequestBody Student student){
        List<Student> studentList = studentRepo.findAll();
        boolean exist = false;
        for (int i = 0; i < studentList.size(); i++){
           if (studentList.get(i).getPhone().equals(student.getPhone())){
               exist = true;
           }
        }
        if (!exist){
            saveDogs(student.getDogList());
            studentRepo.save(student);
            MailSender mailSender = new MailSender();
            mailSender.sendConfirmationEmail(student);
        }
        return new ResponseEntity<Student>(student, HttpStatus.CREATED);

    }
    @CrossOrigin
    @GetMapping("/students")
    public ResponseEntity<List<Student>> getStudents(){
            return new ResponseEntity<List<Student>>(studentRepo.findAll(), HttpStatus.OK);
    }
    @GetMapping("/studentbyid/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id){
        Student studentfromdb = studentRepo.findByid(id).get(0);
        return new ResponseEntity<Student>(studentfromdb, HttpStatus.OK);
    }
    @DeleteMapping("/deleteStudent/{id}")
    public ResponseEntity<Student> deleteStudent(@PathVariable Long id){
        Student deleteStudent = studentRepo.findByid(id).get(0);
        studentRepo.delete(deleteStudent);
        return new ResponseEntity<Student>(deleteStudent, HttpStatus.OK);
    }
    @PutMapping("/updateStudent")
    public ResponseEntity<Student> alterStudent(@RequestBody Student student){
        Student studentfromdb = studentRepo.findByid(student.getId()).get(0);
        studentfromdb = student;
        studentRepo.save(studentfromdb);
        return new ResponseEntity<Student>(studentfromdb, HttpStatus.OK);
    }
    @PostMapping("/AddMultipleStudents")
    public ResponseEntity<List<Student>> addMultipleStudents(@RequestBody List<Student> studentsToAdd) {
        for (int i = 0; i < studentsToAdd.size(); i++) {
            saveDogs(studentsToAdd.get(i).getDogList());
            studentRepo.save(studentsToAdd.get(i));
            MailSender mailSender = new MailSender();
            mailSender.sendConfirmationEmail(studentsToAdd.get(i));
        }
        return new ResponseEntity<List<Student>>(studentsToAdd, HttpStatus.CREATED);
    }
    @PostMapping("/addDogToStudent")
    public ResponseEntity<Student> addDogToStudent(@RequestBody Student student){
        Student studentfromdb = studentRepo.findByid(student.getId()).get(0);
        studentfromdb.addDog(student.getDogList().get(0));
        dogRepo.save(student.getDogList().get(0));
        student = studentfromdb;
        studentRepo.save(student);
        return new ResponseEntity<Student>(student, HttpStatus.CREATED);
    }
    private void saveDogs(List<Dog> dogList) {
        for (int i = 0; i < dogList.size(); i++) {
            dogRepo.save(dogList.get(i));
        }
    }
}
