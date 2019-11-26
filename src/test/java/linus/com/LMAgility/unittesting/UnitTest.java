package linus.com.LMAgility.unittesting;

import linus.com.LMAgility.model.Dog;
import linus.com.LMAgility.model.Student;
import linus.com.LMAgility.repository.StudentRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
@RunWith(SpringRunner.class)
@TestPropertySource(locations= "classpath:application-dev.properties")
public class UnitTest {

    @Autowired
    StudentRepository studentRepository;


    @Test
    public void test(){
        Assert.assertTrue("Hej".contains("Hej"));
    }
    @Test
    public void saveThenCheckIfSaved(){
        List<Dog> list = new ArrayList<>();
        Student student = new Student("Linus", "Nyrén", "0704174616", "Linusny@hotmail.com", list);

        studentRepository.save(student);
        List<Student> studentlist = studentRepository.findAll();

        Assert.assertTrue(studentlist.toString().contains("Linus"));
    }
}
