package com.enviyo.drug.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.enviyo.drug.model.Treat;
import com.enviyo.drug.service.TreatService;


@CrossOrigin
@RestController
public class TreatController {
	
	@Autowired
	private TreatService treatService;
	
	@GetMapping("getSituation/{id}")
	public Optional<Treat> getBySituation(@PathVariable String id) {

		return  treatService.getBySituation(id);
	}
	
	@PostMapping(path = "/saveTreat")
	public Treat saveTreat(@RequestBody Treat treat) {
		return treatService.saveTreat(treat);
	}
	
	@GetMapping("getTreatList")
	public List<Treat> getTreatList(){
		return treatService.getTreatList();
	}
}
