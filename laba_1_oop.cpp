#include <iostream>
#include <math.h>
#include<conio.h>
using namespace std;
	
 int main() {
 	int n,i,*a=new int [n];
 	cout<<"Enter kilkist elementiv= "; cin>>n;
 	cout<<"N="<<n<<endl;
 	cout<<"Enter elementu:"<<endl;
 	for(i=0;i<=n;i++){
 		cin>>a[i];}
 		
    cout<<"Vhidnui massiv:";
    for(i=0;i<=n;i++){
 		cout<<a[i]<<" ";}
		 	
    for(i=0;i<=n;i++){
	 	a[i]=pow(a[i],2);
		 }
		 cout<<endl;
		 cout<<"Massiv v kvadrati:";
   
    for(i=0;i<=n;i++){
 		cout<<a[i]<<" "; }   
    
 	return 0;
 	
 }
