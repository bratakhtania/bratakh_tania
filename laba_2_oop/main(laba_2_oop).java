package laba_2_oop;

public class main {

	public static void main(String[] args) {
		Heater obj1= new Heater(0,30,5);
		obj1.setInc(12);
		System.out.println("INCREMET: "+obj1.inc);
		
		obj1.setInc(-12);
		System.out.println("INCREMET: "+obj1.inc);
		
		obj1.warmer();
		System.out.println("TEMERATURE: "+obj1.get());
		
		obj1.cooler();
		System.out.println("TEMERATURE: "+obj1.get());

	}

}
