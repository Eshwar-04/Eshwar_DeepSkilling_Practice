package com.week1.cts;

public class ExcelDocument implements Document {
    @Override
    public void open() {
        System.out.println("Excel Document");
    }
}