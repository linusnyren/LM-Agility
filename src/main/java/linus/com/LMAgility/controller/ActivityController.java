package linus.com.LMAgility.controller;

import linus.com.LMAgility.mail.MailSender;
import linus.com.LMAgility.model.Activity;
import linus.com.LMAgility.model.Student;
import linus.com.LMAgility.repository.ActivityRepository;
import linus.com.LMAgility.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

@RestController
public class ActivityController {
    @Autowired
    private ActivityRepository activityRepo;

    @Autowired
    private StudentRepository studentRepo;

    @GetMapping("/activities")
    public ResponseEntity<List<Activity>> getActivities(){
        if(activityRepo.findAll().size() == 0) {
            List<Student> fakeList = new ArrayList<>();
            Student fakeStudent = new Student("Nyrén", "Linus", "0704174616", "Emma", "linusny@hotmail.com", true);
            fakeList.add(fakeStudent);
            Activity test = new Activity("Agility", "nybörjare", "greggereds kapell", 500, new Timestamp(Calendar.getInstance().getTimeInMillis()), new Timestamp(Calendar.getInstance().getTimeInMillis()), fakeList);

            List<Activity> activityList = new ArrayList<>();
            activityList.add(test);
            System.out.println(activityList.get(0).getStudentlist().get(0).getDogName());
            return new ResponseEntity<List<Activity>>(activityList, HttpStatus.OK);

        }
        return new ResponseEntity<List<Activity>>(activityRepo.findAll(), HttpStatus.OK);
    }
    @GetMapping("/activityById/{id}")
    public ResponseEntity<Activity> getActivityById(@PathVariable Long id){
        return new ResponseEntity<Activity>(activityRepo.findByid(id).get(0), HttpStatus.OK);
    }

    @PostMapping("/activity")
    public ResponseEntity<Activity> addActivity(@RequestBody Activity activity){
        activityRepo.save(activity);
        MailSender mailSender = new MailSender();
        mailSender.sendActivityMail(activity, studentRepo.findAll());
        return new ResponseEntity<Activity>(activity, HttpStatus.CREATED);
    }
    @PostMapping("/studentToActivity")
    public ResponseEntity<Activity> studentToActivity(@RequestBody Activity activity){
        Activity activityfromdb = activityRepo.findByid(activity.getId()).get(0);
        Student studentfromdb = studentRepo.findByid(activity.getStudentlist().get(0).getId()).get(0);
        activity = activityfromdb;
        activity.addToStudentList(studentfromdb);
        activityRepo.save(activity);
        return new ResponseEntity<Activity>(activity, HttpStatus.CREATED);
    }
    @DeleteMapping("/removeActivity/{id}")
    public ResponseEntity<Activity> removeActivity(@PathVariable Long id){
        Activity activityfromdb = activityRepo.findByid(id).get(0);
        activityRepo.delete(activityfromdb);
        return new ResponseEntity<Activity>(activityfromdb, HttpStatus.OK);
    }
}
