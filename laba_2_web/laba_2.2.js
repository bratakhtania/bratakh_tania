//2
function numbers(data,month,variant){

	return((data+month)/variant)

}


alert("Task 2")

var data,month,variant;

data=prompt("Enter the data of your birth: ",01);

month=prompt("Enter the month of your birth: ",01);

variant=prompt("Enter number of your variant: ",01);


alert("Result:"+numbers(+data,+month,+variant));