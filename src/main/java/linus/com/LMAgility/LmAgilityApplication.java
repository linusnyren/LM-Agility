package linus.com.LMAgility;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class LmAgilityApplication {

	public static void main(String[] args) {
		SpringApplication.run(LmAgilityApplication.class, args);
	}

}
