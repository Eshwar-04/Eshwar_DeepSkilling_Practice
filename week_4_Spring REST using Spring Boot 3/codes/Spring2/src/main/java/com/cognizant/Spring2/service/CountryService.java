package com.cognizant.Spring2.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.cognizant.Spring2.model.Country;

import java.util.List;

@Service
public class CountryService {

    @Autowired
    @Qualifier("countries")
    private List<Country> countries;

    public Country getCountry(String code) {
        return countries.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);
    }
}
