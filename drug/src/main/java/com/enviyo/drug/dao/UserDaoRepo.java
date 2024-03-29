package com.enviyo.drug.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.enviyo.drug.model.User;

public interface UserDaoRepo extends JpaRepository<User,String > {

	@Query(value="SELECT u FROM User u WHERE username = ?1")
	User login(String username);
	
}
