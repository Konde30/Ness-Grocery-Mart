package com.poojakonde.groceryapp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.poojakonde.groceryapp.model.Category;



public interface CategoryRepo  extends JpaRepository<Category, Long> {

}
