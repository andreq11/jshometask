// JavaScript File


var x1, x2, y, x,r;
//function equation(){
var a = Number(prompt('a'));
var b = Number(prompt('b'));
var c = Number(prompt('c'));
var dis = b*b - 4*a*c;
alert (dis);

    if (dis>0) {
        r="Так як дискримінант більше нуля то, квадратне рівняння має два дійсних кореня:"
        x1 = -b/(2*a)-Math.sqrt( dis)/(2*a);
        x2 = -b/(2*a)+Math.sqrt( dis)/(2*a);
        alert(r);
        alert(x1);
        alert(x2);
    } 
    if (dis<0){
        y = 'Так як дискримінант менше нуля, то рівняння не має дійсних коренів';
        alert(y);
        }
    if (dis==0){
        x=-b/ (2*a);
        alert(x);
        }
   // }
