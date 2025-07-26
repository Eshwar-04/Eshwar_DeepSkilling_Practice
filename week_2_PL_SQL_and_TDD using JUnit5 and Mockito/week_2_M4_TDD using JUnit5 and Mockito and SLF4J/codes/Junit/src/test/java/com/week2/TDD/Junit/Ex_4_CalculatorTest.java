package com.week2.TDD.Junit;


import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.Assert.*;

public class Ex_4_CalculatorTest {

    private Ex_4_Calculator calculator;

    @BeforeEach
    public void setUp() {
        calculator = new Ex_4_Calculator();
        System.out.println("Setup completed");
    }

    @AfterEach
    public void tearDown() {
        System.out.println("Teardown completed");
    }

    @Test
    public void testAddition() {
        int a = 10;
        int b = 5;

        int result = calculator.add(a, b);

        assertEquals(15, result);
    }

    @Test
    public void testSubtraction() {
        int a = 10;
        int b = 5;

        int result = calculator.subtract(a, b);

        assertEquals(5, result);
    }
    
    @Test
    public void testDivision() {
        int a = 10;
        int b = 5;

        int result = calculator.divide(a, b);

        assertEquals(2, result);
    }
}