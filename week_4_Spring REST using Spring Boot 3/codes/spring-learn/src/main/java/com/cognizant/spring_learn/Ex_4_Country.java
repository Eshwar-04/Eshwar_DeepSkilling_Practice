package com.cognizant.spring_learn;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Ex_4_Country {
    private static final Logger LOGGER = LoggerFactory.getLogger(Ex_4_Country.class);

    private String code;
    private String name;

    public Ex_4_Country() {
        LOGGER.debug("Inside Country Constructor.");
    }

    public String getCode() {
        LOGGER.debug("getCode() method called.");
        return code;
    }

    public void setCode(String code) {
        LOGGER.debug("setCode() method called.");
        this.code = code;
    }

    public String getName() {
        LOGGER.debug("getName() method called.");
        return name;
    }

    public void setName(String name) {
        LOGGER.debug("setName() method called.");
        this.name = name;
    }

    @Override
    public String toString() {
        return "Country [code=" + code + ", name=" + name + "]";
    }
}
