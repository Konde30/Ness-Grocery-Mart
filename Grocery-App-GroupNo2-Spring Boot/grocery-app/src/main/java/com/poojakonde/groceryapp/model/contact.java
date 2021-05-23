package com.poojakonde.groceryapp.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="contact")
public class contact {
	@Id
	Integer id;
	String email;
	String subject;
	String message;
	String date;
	public contact() {
		
	}
	public contact(Integer id, String email, String subject, String message, String date) {
		super();
		this.id = id;
		this.email = email;
		this.subject = subject;
		this.message = message;
		this.date = date;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	@Override
	public String toString() {
		return "contact [id=" + id + ", email=" + email + ", subject=" + subject + ", message=" + message + ", date="
				+ date + "]";
	}
	
}
