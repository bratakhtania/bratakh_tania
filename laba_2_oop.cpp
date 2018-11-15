#include <iostream>
using namespace std;

class Heater {
	public:
		int temperature,min,max,inc;
	public:	
		Heater(int min, int max, int inc){
	     this->min;
	     this->max;
	    if(inc>0){
	     this->inc;
		}
		else(cout<<"inc ne moje buti vid'emnim");
		temperature=15;
		}
	void setInc(int inc){
		if(inc>0){
	    	this->inc;
		}
		else(cout<<"inc ne moje buti vid'emnim"<<endl);
	}
	void warmer(){
		if(temperature+inc<max){
			temperature+=inc;
		}
		else(cout<<"bil'she za max"<<endl);
	}
	void cooler(){
		if(temperature-inc>min){
			temperature-=inc;
		}
		else(cout<<"men'she za min"<<endl);
	}
	int get(){
		return temperature;
	}	

};

int main (){
	
	Heater object1(0,30,5);
	
	object1.setInc(12);
    cout<<"Increment:"<<object1.inc<<endl;
	
	object1.setInc(-12);
	cout<<"Temperature:"<<object1.get()<<endl;
	
	object1.warmer();
	cout<<"Temperature:"<<object1.get()<<endl;
	
	
	object1.cooler();
	cout<<"Temperature:"<<object1.get()<<endl;
}
