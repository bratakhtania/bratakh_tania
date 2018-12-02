package laba_2_oop;

public class Heater {
int temperature,min,max,inc;

	public Heater(int min, int max, int inc) {
		// TODO Auto-generated constructor stub
		this.min=min;
		this.max=max;
		if(inc>0){
			this.inc=inc;
		}
		else System.out.println("Increment ne moje buti vid'mnim");
		temperature=15;
	}
    void setInc(int inc){
    	if(inc>0){
    		this.inc=inc;
    	}
    	else System.out.println("Increment ne moje buti vid'mnim");
    }
    void warmer(){
    	if(temperature+inc<max){
    		temperature+=inc;
    	}else System.out.println("bil'she za max");
    }
    void cooler(){
    	if(temperature-inc>min){
    		temperature-=inc;
    	}else System.out.println("men'she za min");
    }
    
    int get(){
    	return temperature;
    }
}
