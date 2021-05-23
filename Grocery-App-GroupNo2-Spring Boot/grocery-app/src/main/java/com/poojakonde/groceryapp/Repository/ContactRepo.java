package com.poojakonde.groceryapp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.poojakonde.groceryapp.model.User;
import com.poojakonde.groceryapp.model.contact;

@Repository
public interface ContactRepo extends JpaRepository<contact, Integer>  {

}
