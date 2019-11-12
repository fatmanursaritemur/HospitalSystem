package com.enviyo.drug.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.enviyo.drug.model.Patient;


public interface PatientDaoRepo extends JpaRepository<Patient,String > {
	@Query(value="SELECT u FROM Patient u WHERE name = ?1")
	Patient getName(String name);

	
	
}