package com.poojakonde.groceryapp.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="products")
public class Products {
	@Id
	long id;
	String name,price,added_on,category_id,image;
	public Products(){
		
	}
	
	public Products(long id, String name, String price, String added_on, String category_id, String image) {
	
		this.id = id;
		this.name = name;
		this.price = price;
		this.added_on = added_on;
		this.category_id = category_id;
		this.image = image;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getAdded_on() {
		return added_on;
	}
	public void setAdded_on(String added_on) {
		this.added_on = added_on;
	}
	public String getCategory_id() {
		return category_id;
	}
	public void setCategory_id(String category_id) {
		this.category_id = category_id;
	}
	@Override
	public String toString() {
		return "Products [id=" + id + ", name=" + name + ", price=" + price + ", added_on=" + added_on
				+ ", category_id=" + category_id + ", image=" + image + "]";
	}
	
	
	
}
