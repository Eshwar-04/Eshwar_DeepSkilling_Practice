package com.week1.cts;

public class Test {
	    public static void main(String[] args) {
	    	
	        Product[] products = {
	            new Product(5, "Phone", "Electronics"),
	            new Product(9, "Shoes", "Fashion"),
	            new Product(2, "Laptop", "Electronics"),
	            new Product(3, "Book", "Stationery"),
	        };

	        LinearSearch l=new LinearSearch();
	        Product r1 = l.searchById(products, 9);
	        System.out.println("Linear Search Result: " + r1);

	        BinarySearch b = new BinarySearch();
	        b.sortProducts(products); 
	        Product r2 = b.searchById(products, 9);
	        System.out.println("Binary Search Result: " + r2);
	    }
	}


