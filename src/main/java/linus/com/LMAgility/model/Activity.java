package linus.com.LMAgility.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "Activity")
public class Activity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String type, level, location;
    private int price;
    private int participants;
    private LocalDateTime activityStart, activityEnd;
    private String timeStart, timeEnd;

    @ManyToMany(fetch = FetchType.LAZY)
    private List <Student> studentlist;

    public Activity(){};
    public Activity(String type, String level, String location, int price, int participants, LocalDateTime activityStart, LocalDateTime activityEnd, String timeStart, String timeEnd, List<Student> studentlist) {
        this.type = type;
        this.level = level;
        this.location = location;
        this.price = price;
        this.participants = participants;
        this.activityStart = parseTime(activityStart, timeStart);
        this.activityEnd = parseTime(activityEnd, timeEnd);
        this.studentlist = studentlist;
    }

    private LocalDateTime parseTime(LocalDateTime activity, String time) {
        return activity.withHour(Integer.parseInt(time.substring(0,2))).withMinute(Integer.parseInt(time.substring(3,5)));
    }


}
