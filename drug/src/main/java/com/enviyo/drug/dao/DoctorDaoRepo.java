package com.enviyo.drug.dao;
import org.springframework.data.jpa.repository.JpaRepository;
import com.enviyo.drug.model.Doctor;


public interface DoctorDaoRepo extends JpaRepository<Doctor, String>{

}
