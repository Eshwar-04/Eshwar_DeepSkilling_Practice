package com.week1.cts;

public class FinancialForecast {

    public static double calculateFutureValue(double currentValue, double growthRate, int years) {
        if (years == 0) {
        	
            return currentValue; 
        }
        return calculateFutureValue(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {
        double startAmount = 10000;   
        double growthRate = 0.10;       
        int years = 5;

        double futureValue = calculateFutureValue(startAmount, growthRate, years);
        System.out.printf("Future value after %d years: ₹%.2f\n", years, futureValue);
    }
}
