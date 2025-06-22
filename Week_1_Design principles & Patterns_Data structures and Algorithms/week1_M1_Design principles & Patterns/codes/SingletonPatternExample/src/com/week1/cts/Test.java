package com.week1.cts;

public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Logger l1=Logger.getInstance();
		l1.displayLog("first logger");
		
		Logger l2=Logger.getInstance();
		l2.displayLog("second logger");
		
		if(l1==l2) {
			System.out.println("Both instances are same");
		}else
			System.out.println("Both are not same");
			
		}

}
