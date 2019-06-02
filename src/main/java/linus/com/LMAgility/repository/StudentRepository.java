package linus.com.LMAgility.repository;

import linus.com.LMAgility.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student, Long> {
    List<Student> findByid(Long id);
}
