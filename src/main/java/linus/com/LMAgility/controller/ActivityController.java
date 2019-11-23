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
        return new ResponseEntity<List<Activity>>(activityRepo.findAll(), HttpStatus.OK);
    }
    @CrossOrigin
    @PostMapping("/activity")
    public ResponseEntity<Activity> addActivity(@RequestBody Activity activity){
        activityRepo.save(activity);
        return new ResponseEntity<Activity>(activity, HttpStatus.CREATED);
    }
    @CrossOrigin
    @PostMapping("/studentToActivity/{eventid}/{phone}")
    public ResponseEntity<Activity> studentToActivity(@PathVariable long eventid, @PathVariable String phone){
        Activity activityfromdb = activityRepo.findByid(eventid);
        try {
            Student studentfromdb = studentRepo.findByPhone(phone);
            activityfromdb.getStudentlist().add(studentfromdb);
            activityRepo.save(activityfromdb);
            return new ResponseEntity<Activity>(activityfromdb, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(activityfromdb, HttpStatus.valueOf(404));
        }
    }
    @CrossOrigin
    @DeleteMapping("/removeActivity/{id}")
    public ResponseEntity<Activity> removeActivity(@PathVariable Long id){
        Activity activityfromdb = activityRepo.findByid(id);
        activityRepo.delete(activityfromdb);
        return new ResponseEntity<Activity>(activityfromdb, HttpStatus.OK);
    }
    @CrossOrigin
    @PostMapping("/search")
    public List<Activity> searchActivity(@RequestBody Search search){
        StringBuilder sb = new StringBuilder();
        sb.append(" where id > 0");
        if(search.getActivity() != null){
            sb.append(" and activity = "+search.getActivity());
        }
        if(search.getPrice() != null){
            sb.append(" and price = "+search.getPrice());
        }
        return activityRepo.search(sb.toString());

    }
}
