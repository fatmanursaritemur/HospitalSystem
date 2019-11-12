package com.enviyo.drug.service;

import java.util.List;
import java.util.Optional;


import com.enviyo.drug.model.Patient;




public interface PatientService {

	List<Patient> getAllPatient();
	Patient savePatient(Patient patient);
	Optional<Patient> getById(String id);
	Patient getName(Patient patient);
	
}
