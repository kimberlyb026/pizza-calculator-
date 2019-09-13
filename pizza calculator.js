var small = prompt('Hoeveel small pizzas wilt u')
var medium = prompt('Hoeveel medium pizzas wilt u')
var large = prompt('Hoeveel large pizzas wilt u')


document.write('Bestellijst:<br>')
document.write('Small: ' + small  +'<br>')
document.write('Medium: ' + medium +'<br>')
document.write('Large: ' + large  +'<br>')

var sp = 3;
var mp = 7;
var bp = 11;


document.write('prijslijst:<br>')
document.write('small € ' + small * sp + '<br>')
document.write('medium € ' + medium * mp + '<br>')
document.write('large € ' + large * bp + '<br>')

var tot = small*sp + medium*mp + large*bp;

document.write('totaal prijs: €'+ tot);




