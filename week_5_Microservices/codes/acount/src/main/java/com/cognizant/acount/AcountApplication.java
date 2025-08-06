package com.cognizant.acount;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class AcountApplication {

	public static void main(String[] args) {
		SpringApplication.run(AcountApplication.class, args);
	}

}
