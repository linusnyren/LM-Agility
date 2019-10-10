package linus.com.LMAgility.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ManyToAny;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

import java.sql.Timestamp;
import java.util.List;

@Entity
@Getter
@Setter
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
    private int participants;
    private String activityStart, activityEnd;

    @ManyToMany(fetch = FetchType.LAZY)
    private List <Student> studentlist;

    public Activity(){};

    public String emailFormatter(){
        StringBuilder sb = new StringBuilder();
        sb.append("Plats : " +location+"\n");
        sb.append("Start : " +activityStart +"\n Slut: " +activityEnd +"\n");
        sb.append("Träningstyp : " +type +"\n");
        sb.append("Nivå : " +level +"\n");
        sb.append("Pris : " +price);
        return sb.toString();
    }
}
