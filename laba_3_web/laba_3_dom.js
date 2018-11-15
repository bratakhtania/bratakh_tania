alert(document.head.innerHTML);



var variant = 1;

var elem = document.getElementById('list-header');

elem.innerHTML = '<b>' + elem.textContent + ' ' + variant + '</b>';



var name = "Tania";

document.getElementsByTagName("li")[1].innerHTML = name;



document.getElementsByTagName("ul")[0].style.color = '#555';