package linus.com.LMAgility.repository;

import linus.com.LMAgility.model.Activity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ActivityRepository extends JpaRepository<Activity, Long> {
    Activity findByid(Long id);
}
