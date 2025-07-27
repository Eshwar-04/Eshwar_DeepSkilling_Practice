package com.cognizant.Spring2;


import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;

@Configuration
@ImportResource("classpath:country.xml")
public class XmlConfig {}
