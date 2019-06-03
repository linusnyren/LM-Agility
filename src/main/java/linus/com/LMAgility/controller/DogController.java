package linus.com.LMAgility.controller;

import linus.com.LMAgility.model.Dog;
import linus.com.LMAgility.repository.DogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DogController {

    @Autowired
    DogRepository dogRepo;

    @GetMapping("/allDogs")
    public ResponseEntity<List<Dog>> getAllDogs(){
        return new ResponseEntity<List<Dog>>(dogRepo.findAll(), HttpStatus.OK);
    }
}
