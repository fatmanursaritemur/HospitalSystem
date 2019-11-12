package com.enviyo.drug.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.enviyo.drug.model.Treat;

public interface TreatDaoRepo  extends JpaRepository<Treat,String > {

}
