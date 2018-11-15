//5
function rekpow(x, n) {
  if (n != 1) { 
    return x * rekpow(x, n - 1);
    } else {
    return x;
}
}
alert("Task 5(rek)");

var x=prompt("Enter your number(x): ",1);
var n=prompt("Enter your number(n): ",1);
alert(rekpow(+x,+n));

alert("Task 5(loop)");

function looppow(a,c) {
    var b = a;
    for (var i = 1; i < c; i++) {
        b *= a;
    }
    return b;

}
 var a=prompt("Enter your number(x): ",1);
var c=prompt("Enter your number(n): ",1);
 alert(looppow(+a,+c));
