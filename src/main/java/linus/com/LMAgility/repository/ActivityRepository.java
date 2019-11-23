package linus.com.LMAgility.repository;

import linus.com.LMAgility.model.Activity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ActivityRepository extends JpaRepository<Activity, Long> {
    Activity findByid(Long id);

    @Query(value="Select * from Activity :toString", nativeQuery= true)
    List<Activity> search(String toString);
}
