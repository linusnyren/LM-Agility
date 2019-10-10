package linus.com.LMAgility.controller;


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


import java.util.List;

@RestController("/rest")
public class StudentController {
    @Autowired
    private StudentRepository studentRepo;

    @Autowired
    private ActivityRepository activityRepo;

    @CrossOrigin
    @PostMapping("/student")
    public ResponseEntity<Student> addStudent(@RequestBody Student student){
        if(studentRepo.findByPhone(student.getPhone()) != null){
            studentRepo.save(student);
            return new ResponseEntity<Student>(studentRepo.findByPhone(student.getPhone()), HttpStatus.CREATED);
        }
        else{
            return new ResponseEntity<Student>(studentRepo.findByPhone(student.getPhone()), HttpStatus.CREATED);
        }
    }
    @CrossOrigin
    @GetMapping("/students")
    public ResponseEntity<List<Student>> getStudents(){
            return new ResponseEntity<List<Student>>(studentRepo.findAll(), HttpStatus.OK);
    }
    @DeleteMapping("/deleteStudent/{id}")
    public ResponseEntity<Student> deleteStudent(@RequestBody Student student){
        studentRepo.delete(student);
        return new ResponseEntity<Student>(student, HttpStatus.OK);
    }
    @PutMapping("/updateStudent")
    public ResponseEntity<Student> alterStudent(@RequestBody Student student){
        Student studentfromdb = studentRepo.findByPhone(student.getPhone());
        studentfromdb = student;
        studentRepo.save(studentfromdb);
        return new ResponseEntity<Student>(studentfromdb, HttpStatus.OK);
    }
}
