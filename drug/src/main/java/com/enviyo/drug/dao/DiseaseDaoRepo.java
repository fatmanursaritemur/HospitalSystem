package com.enviyo.drug.dao;

import org.springframework.data.jpa.repository.JpaRepository;


import com.enviyo.drug.model.Disease;


public interface DiseaseDaoRepo extends JpaRepository<Disease, String>{

}
