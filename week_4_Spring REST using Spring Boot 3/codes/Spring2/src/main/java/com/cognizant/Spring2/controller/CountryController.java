package com.cognizant.Spring2.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.Spring2.model.Country;
import com.cognizant.Spring2.service.CountryService;

@RestController
public class CountryController {
	
	 @Autowired
	    private CountryService countryService;

	    @GetMapping("/countries/{code}")
	    public Country getCountry(@PathVariable String code) {
	        return countryService.getCountry(code);
	    }

    @Autowired
    @Qualifier("countryIndia")
    Country countryIndia;

    @RequestMapping("/country")
    public Country getCountryIndia() {
        return countryIndia;
    }
}
