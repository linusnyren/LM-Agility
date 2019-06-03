package linus.com.LMAgility.repository;

import linus.com.LMAgility.model.Activity;
import linus.com.LMAgility.model.Dog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DogRepository extends JpaRepository<Dog, Long> {
    List<Dog> findByid(Long id);
}
