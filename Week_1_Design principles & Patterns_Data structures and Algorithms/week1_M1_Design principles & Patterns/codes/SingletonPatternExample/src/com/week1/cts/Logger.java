package com.week1.cts;

public class Logger {

	private static Logger w1;
	
	private Logger() {
		
	}
	
	public static Logger getInstance() {
		if(w1==null) {
			w1=new Logger();
		}
		return w1;
	}
	
	public void displayLog(String msg) {
		System.out.println("LOG :"+msg);
	}
	
	
}
