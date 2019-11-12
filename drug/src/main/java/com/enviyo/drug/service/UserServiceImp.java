package com.enviyo.drug.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.enviyo.drug.dao.UserDaoRepo;
import com.enviyo.drug.model.User;
@RestController
public class UserServiceImp implements UserService {

	@Autowired
	UserDaoRepo userDaoRepo;
	
	@Override
	public User saveUser(User user) {
		
		return userDaoRepo.save(user);
	}
	@Override
	public void deleteUser(String id) {
		userDaoRepo.deleteById(id);
		
	}
	@Override
	public List<User> getUser() {
		
		return userDaoRepo.findAll();
	}
	@Override
	public User findByUsername(String username) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public User login(User user) {
		return userDaoRepo.login(user.getUsername());
	}

}
