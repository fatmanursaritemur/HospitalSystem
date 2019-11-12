package com.enviyo.drug.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.stereotype.Component;

@Entity
@Table(name = "treat", schema = "grupa")
public class Treat {

	@Column(name = "situation")
	private String situation;

	@Id
	@GeneratedValue(generator = "system-uuid")
	@GenericGenerator(name = "system-uuid", strategy = "uuid")
	@Column(name = "id")
	private String id;

	@OneToOne
	@JoinColumn(name = "drug", columnDefinition="drug", referencedColumnName="drug_id")
	private Drug drug;

	public Drug getDrug() {
		return drug;
	}

	public void setDrug(Drug drug) {
		this.drug = drug;
	}

	@OneToOne
	@JoinColumn(name = "disease" ,columnDefinition="disease", referencedColumnName="id")
	private Disease disease;
	
	@OneToOne
	@JoinColumn(name = "patient",columnDefinition="patient", referencedColumnName="id")
	private Patient patient;

	 

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public Disease getDisease() {
		return disease;
	}

	public void setDisease(Disease disease) {
		this.disease = disease;
	}

	public String getSituation() {
		return situation;
	}

	public void setSituation(String situation) {
		this.situation = situation;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	 

}