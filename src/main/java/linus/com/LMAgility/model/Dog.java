package linus.com.LMAgility.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="Dog")
public class Dog extends AuditModel{

    @Id
    @GeneratedValue(generator = "dog_generator")
    @SequenceGenerator(
            name="dog_generator",
            sequenceName="student_sequence",
            initialValue = 1
            )
    private Long id;
    private String name, age, level;
}
