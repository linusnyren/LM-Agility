package linus.com.LMAgility.controller;

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

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

@RestController
public class RestApiController {
    @Autowired
    private StudentRepository studentRepo;

    @Autowired
    private ActivityRepository activityRepo;

    @GetMapping("/activities")
    public List<Activity> getActivities(){
        List<Activity> fakeList = new ArrayList<>();
        List<Student> studentList = new ArrayList<>();
        studentList.add(new Student("Nyrén", "Linus", "0704174616", "Emma", new Timestamp(Calendar.getInstance().getTimeInMillis())));
        fakeList.add(new Activity("Agility",
                "Nybörjare",
                "Greggereds Kapell",
                500,
                new Timestamp(Calendar.getInstance().getTimeInMillis()),
                new Timestamp(Calendar.getInstance().getTimeInMillis()),
                studentList));
        return fakeList;
    }
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
        }
        return new ResponseEntity<Student>(student, HttpStatus.CREATED);

    }
    @GetMapping("/")
    public ResponseEntity<List<Student>> getStudents(){
        if (studentRepo.findAll().size() == 0) {
            List<Student> studentList = new ArrayList<>();
            studentList.add(new Student("Nyrén", "Linus", "0704174616", "Emma", new Timestamp(Calendar.getInstance().getTimeInMillis())));
            return new ResponseEntity<List<Student>>(studentList, HttpStatus.OK);
        }
        else {

            return new ResponseEntity<List<Student>>(studentRepo.findAll(), HttpStatus.OK);
        }
    }
    @RequestMapping(value = "/test", method=RequestMethod.GET)
    public ResponseEntity<String> test(){
        return new ResponseEntity<String>("ok", HttpStatus.OK);
    }
}
