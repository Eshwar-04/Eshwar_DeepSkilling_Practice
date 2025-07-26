package com.week2.TDD.Junit;

import org.junit.jupiter.api.Test;


import static org.junit.Assert.*;


public class Ex_3 {

    @Test
    public void testAssertions() {
        assertEquals(5, 2 + 3);

        assertTrue(5 > 3);

        assertFalse(5 < 3);

        assertNull(null);

        assertNotNull(new Object());
    }
}
