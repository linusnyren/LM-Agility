package linus.com.LMAgility.model;

import javax.persistence.Id;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "Activity")
public class Activity extends AuditModel{
    @Id
    @GeneratedValue(generator = "activity_generator")
    @SequenceGenerator(
            name = "activity_generator",
            sequenceName = "activity_sequence",
            initialValue = 1
    )
    private Long id;
    private String type, level, location;
    private int price;
    private Timestamp activityStart, activityEnd;
    //private List<Student> studentList;

    public Activity(){};

    public Activity(String type, String level, String location, int price, Timestamp activityStart, Timestamp activityEnd, List<Student> studentList) {
        this.type = type;
        this.level = level;
        this.location = location;
        this.price = price;
        this.activityStart = activityStart;
        this.activityEnd = activityEnd;
       // this.studentList = studentList;
    }
    public Long getId() {
        return id;
    }
/*    public List<Student> getStudentList() {
        return studentList;
    }

    public void addToActivity(Student student){
        studentList.add(student);
    };*/
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Timestamp getActivityStart() {
        return activityStart;
    }

    public void setActivityStart(Timestamp activityStart) {
        this.activityStart = activityStart;
    }

    public Timestamp getActivityEnd() {
        return activityEnd;
    }

    public void setActivityEnd(Timestamp activityEnd) {
        this.activityEnd = activityEnd;
    }




}
