package linus.com.LMAgility.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.ManyToAny;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

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


    @ManyToMany(fetch = FetchType.LAZY)
    private List <Student> studentlist;

    public Activity(){};

    public Activity(String type, String level, String location, int price, Timestamp activityStart, Timestamp activityEnd, List <Student> studentlist) {
        this.type = type;
        this.level = level;
        this.location = location;
        this.price = price;
        this.activityStart = activityStart;
        this.activityEnd = activityEnd;
        this.studentlist = studentlist;


    }
    public String emailFormatter(){
        StringBuilder sb = new StringBuilder();
        sb.append("Plats : " +location+"\n");
        sb.append("Start : " +formatDate(activityStart) +"\n Slut: " +formatDate(activityEnd) +"\n");
        sb.append("Träningstyp : " +type +"\n");
        sb.append("Nivå : " +level +"\n");
        sb.append("Pris : " +price);
        return sb.toString();
    }
    public String formatDate(Timestamp timestamp){
        return timestamp.toLocalDateTime().getYear() +"-"
                +timestamp.toLocalDateTime().getMonthValue() +"-"
                +timestamp.toLocalDateTime().getDayOfMonth() +" "
                +timestamp.toLocalDateTime().getHour() +":"
                +timestamp.toLocalDateTime().getMinute();
    }

    public List<Student> getStudentlist() {
        return studentlist;
    }
    public void addToStudentList(Student student){
        studentlist.add(student);
    }
    public void setStudentlist(List<Student> studentlist) {
        this.studentlist = studentlist;
    }

    public Long getId() {
        return id;
    }

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
