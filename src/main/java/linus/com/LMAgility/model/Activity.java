package linus.com.LMAgility.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

import java.io.Serializable;
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
