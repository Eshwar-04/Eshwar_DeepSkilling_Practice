package com.week1.cts;

public class LinearSearch {
	
    public  Product searchById(Product[] products, int targetId) {
    	
        for (Product p : products) {
            if (p.productId == targetId) {
                return p;
            }
        }
        return null;
    }
}
