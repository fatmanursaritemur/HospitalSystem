package com.enviyo.drug.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "patient",  schema="grupa")
public class Patient {
	
	

	@Id
	@GeneratedValue(generator="system-uuid")
	@GenericGenerator(name="system-uuid", strategy="uuid")
	@Column(name = "id")
	private String id;
	 
	@Column(name = "patient_drug")
	private String patient_drug;
	
	@Column(name = "name")
	private String name;

	@Column(name = "surname")
	private String surname;
	

	@Column(name = "situation")
	private String situation;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPatient_drug() {
		return patient_drug;
	}

	public void setPatient_drug(String patient_drug) {
		this.patient_drug = patient_drug;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}


 
 
}
