package com.cognizant.spring_learn;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Ex_4_SpringLearnApplication {
    private static final Logger LOGGER = LoggerFactory.getLogger(Ex_4_SpringLearnApplication.class);

    public static void main(String[] args) {
        displayCountry();
    }

    public static void displayCountry() {
        ApplicationContext context = new ClassPathXmlApplicationContext("Ex_4_country.xml");
        Ex_4_Country country = (Ex_4_Country) context.getBean("country", Ex_4_Country.class);
        LOGGER.debug("Country : {}", country.toString());
        // You can also print to console if needed:
        System.out.println(country);
    }
}
