package com.enviyo.drug.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.enviyo.drug.dao.TreatDaoRepo;
import com.enviyo.drug.model.Treat;

@Service
public class TreatServiceImp implements TreatService{
@Autowired
TreatDaoRepo treatDaoRepo;

@Override
public Optional<Treat> getBySituation(String id) {
	return treatDaoRepo.findById(id);
}

@Override
public Treat saveTreat(Treat treat) {
	return treatDaoRepo.save(treat);
}

@Override
public List<Treat> getTreatList() {
	return treatDaoRepo.findAll();
}
	

}
