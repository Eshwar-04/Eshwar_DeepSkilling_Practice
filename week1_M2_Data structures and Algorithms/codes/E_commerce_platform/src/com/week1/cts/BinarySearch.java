package com.week1.cts;

import java.util.*;
public class BinarySearch {
    public  Product searchById(Product[] products, int targetId) {
        int l = 0, r = products.length - 1;
        while (l <= r) {
            int mid = (l + r) / 2;
            
            if (products[mid].productId == targetId) {
            	
                return products[mid];
            }
            else if (products[mid].productId < targetId) {
            	
                l = mid + 1;
            }
            else {
                r = mid - 1;
            }
        }
        return null;
    }
    public  void sortProducts(Product[] products) {
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));
    }
}
