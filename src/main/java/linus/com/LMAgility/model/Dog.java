package linus.com.LMAgility.model;

import javax.persistence.*;

@Entity
@Table(name = "Dogs")
public class Dog {

    @Id
    @GeneratedValue(generator = "dog_generator")
    @SequenceGenerator(
            name = "dog_generator",
            sequenceName = "dog_sequence",
            initialValue = 1
    )
    private Long id;
    private String name;


    public Dog(){}
    public Dog(String name) {
        this.name = name;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
