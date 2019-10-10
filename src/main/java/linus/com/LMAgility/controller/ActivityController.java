package linus.com.LMAgility.controller;

import linus.com.LMAgility.model.Activity;
import linus.com.LMAgility.model.Student;
import linus.com.LMAgility.repository.ActivityRepository;
import linus.com.LMAgility.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class ActivityController {
    @Autowired
    private ActivityRepository activityRepo;

    @Autowired
    private StudentRepository studentRepo;

    @CrossOrigin
    @GetMapping("/activities")
    public ResponseEntity<List<Activity>> getActivities(){
        System.out.println("hello");
        return new ResponseEntity<List<Activity>>(activityRepo.findAll(), HttpStatus.OK);
    }
    @CrossOrigin
    @PostMapping("/activity")
    public ResponseEntity<Activity> addActivity(@RequestBody Activity activity){
        activityRepo.save(activity);
        return new ResponseEntity<Activity>(activity, HttpStatus.CREATED);
    }
    @CrossOrigin
    @PostMapping("/studentToActivity")
    public ResponseEntity<Activity> studentToActivity(@RequestBody Activity activity){
        Activity activityfromdb = activityRepo.findByid(activity.getId());
        if (activityfromdb.getStudentlist().size() < activityfromdb.getParticipants()) {
            Student studentfromdb = studentRepo.findByPhone(activity.getStudentlist().get(0).getPhone());
            activity = activityfromdb;
            activity.getStudentlist().add(studentfromdb);
            activityRepo.save(activity);
            return new ResponseEntity<Activity>(activity, HttpStatus.CREATED);
        }
        else {
            return new ResponseEntity<Activity>(activity, HttpStatus.BAD_REQUEST);
        }
    }
    @DeleteMapping("/removeActivity/{id}")
    public ResponseEntity<Activity> removeActivity(@PathVariable Long id){
        Activity activityfromdb = activityRepo.findByid(id);
        activityRepo.delete(activityfromdb);
        return new ResponseEntity<Activity>(activityfromdb, HttpStatus.OK);
    }
}
