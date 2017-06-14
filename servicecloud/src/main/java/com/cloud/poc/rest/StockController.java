package com.cloud.poc.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cloud.poc.service.IStockService;

@RestController
@RequestMapping("/stock/api")
public class StockController {
	
	@Autowired
	IStockService stockService;
	
	@RequestMapping(value = "/getTicker/{ticker}", method = RequestMethod.GET)
	public String getTicker(@PathVariable String ticker){		
		return stockService.getStockTickerDetails(ticker);
	}
	
}

