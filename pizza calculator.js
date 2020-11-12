var small = prompt('Hoeveel small pizzas wilt u')
var medium = prompt('Hoeveel medium pizzas wilt u')
var large = prompt('Hoeveel large pizzas wilt u')
//hier zeg je met een pop up op de website qat je wilt

document.write('Bestellijst:<br>')
document.write('Small: ' + small  +'<br>')
document.write('Medium: ' + medium +'<br>')
document.write('Large: ' + large  +'<br>')

var sp = 3;
var mp = 7;
var bp = 11;
//hier geef ik de prijzen aan hoe duur de pizzas zijn

document.write('prijslijst:<br>')
document.write('small € ' + small * sp + '<br>')
document.write('medium € ' + medium * mp + '<br>')
document.write('large € ' + large * bp + '<br>')
//hier doe je hoeveel pizza's plus de prijs

var tot = small*sp + medium*mp + large*bp;

document.write('totaal prijs: €'+ tot);
//hierbij komt de prijzen en hoeveel pizza's je hebt



