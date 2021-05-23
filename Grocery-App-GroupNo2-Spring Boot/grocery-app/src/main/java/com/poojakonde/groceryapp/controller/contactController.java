package com.poojakonde.groceryapp.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.poojakonde.groceryapp.Repository.ContactRepo;

import com.poojakonde.groceryapp.model.contact;

//@CrossOrigin(origins ="http://localhost:4200")
@RestController
@RequestMapping("api")
public class contactController {
	
	@Autowired
	ContactRepo contactrepo;
	
	 @PostMapping("/contact")
	  contact newContact(@RequestBody contact newContact) {
	    return contactrepo.save(newContact);
	  }
	
	 @RequestMapping("/contact/getAll")
		public List<contact> getAllContact(){
			return contactrepo.findAll();
		}

}
