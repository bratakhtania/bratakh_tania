//4
alert("Task 4");



var week1;

m=prompt("Введіть число сьогоднішнього дня в межах [1;7]: ");

    if( m == 1)

                week1= function(){		

                alert("Понеділок"); }

    else if(m == 2)

		week1= function(){

                alert("Вівторок"); }

    else if(m== 3)

                week1= function(){

                alert("Середа"); }

    else if(m == 4)

                week1= function(){		 

                alert("Четвер"); }

    else if(m == 5)

                week1= function(){		 

                alert("П'ятниця"); }

    else if(m == 6)

	        week1= function(){

                alert("Субота"); }

    else if(m == 7)

	        week1= function(){

            alert("Неділя"); }

    else

	        week1= function(){

                alert("Число поза межами [1;7]"); }
week1();