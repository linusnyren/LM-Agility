package linus.com.LMAgility.controller;

import linus.com.LMAgility.mail.MailSender;
import linus.com.LMAgility.model.Activity;
import linus.com.LMAgility.model.Student;
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
           studentRepo.save(student);
            MailSender mailSender = new MailSender();
            mailSender.sendConfirmationEmail(student);
        }
        return new ResponseEntity<Student>(student, HttpStatus.CREATED);

    }
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
}
