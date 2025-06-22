package com.week1.cts;

public class PdfDocument implements Document {
    @Override
    public void open() {
        System.out.println("PDF Document");
    }
}