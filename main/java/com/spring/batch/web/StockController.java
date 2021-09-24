package com.spring.batch.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.batch.dao.StockRepository;
import com.spring.batch.model.Stock;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StockController {
	
	@Autowired
	StockRepository repo;
	
	@GetMapping("/api/stocks")
	public List<Stock> getAllStocks(){
		return repo.findAll();
	}

}
