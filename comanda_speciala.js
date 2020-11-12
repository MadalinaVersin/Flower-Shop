window.onload=function() {
var col1 = ["red","pink","green","bleu","orange","yellow"];
var col2 = ["black","gray","magenta","AliceBlue","AntiqueWhite","Aqua","Cornsilk"];
var col =col1.concat(col2);
var rand = Math.floor(Math.random()*(col.length-1));
var t=document.getElementById("titlu");
var folie=document.getElementById("folie");
t.style.color=col[rand];

var start=document.getElementById("start");
var stop=document.getElementById("stop");
var myVar;
var culoare;
document.getElementById("rgb").innerHTML=window.getComputedStyle(folie, null).getPropertyValue("background-color");

start.onclick=function() {
  myVar = setInterval(alertFunc, 2000,"Culoarea rgb este:");

  function alertFunc(param1) {
    culoare= Math.floor(Math.random()*(col.length-1));
    folie.style.backgroundColor = col[culoare];
    var theCSSprop = window.getComputedStyle(folie, null).getPropertyValue("background-color");

    document.getElementById("rgb").innerHTML = param1 + "<br>" + theCSSprop + "<br>";
  }
}
stop.onclick=function(){
  clearInterval(myVar);
}
var d = new Date();
var n = d.toString();
var res = n.substr(0, 25);
document.getElementById("dataCurenta").innerHTML = res;
var n = d.getDate();
n=n+1;
d.setDate(n);
res=d.toString();
res= res.substring(0,15);
document.getElementById("dataPreluare").innerHTML = res;


document.getElementById("dataPreluare").className = "mystyle";
document.getElementById("dataCurenta").classList.add("mystyle_list");
var price = 30;
document.body.onkeydown=function(e)
{
    var k=e.key;
    if(k=="ArrowRight")
    price+=10;
    else 
    if(k=="ArrowLeft")
      if(price>30)
         price-=10;
    var pret=document.getElementById("pret");
    pret.innerHTML=price+"Lei";
 
}
var bunic=document.body;
var parinte=document.getElementById("parinte");
var copil=document.getElementById("copil");
//bunic.addEventListener("click",function(event){alert("BODY");bunic.className="roz";});
parinte.addEventListener("click",function(event){event.stopPropagation();
alert("Ati dat comanda !");parinte.className="galben";},true);
copil.addEventListener("click",function(event){alert("P");copil.className="verde";});

var trimite=document.getElementById("trimite");


trimite.onclick=function(){
  var num=document.getElementById("nume").value;
  var prenum=document.getElementById("prenume").value;
  var ok=0,corect=0;
  if(num==="Nume")
  alert("Trebuie sa completati toate campurile");
  else 
  if(prenum==="Prenume")
  alert("Trebuie sa completati toate campurile");
  else 
  {
    var x=document.getElementsByName("r1");
    for( var i of x)
     if(i.checked === true)
       ok=1;
   if(ok==0)
   alert("Trebuie sa completati toate campurile");
   if(ok==1)
   corect=1;
  }
   

  obj={nume:num,prenume:prenum};
  localStorage.setItem("datePers",JSON.stringify(obj))
  var s=localStorage.getItem("datePers");
  var o=JSON.parse(s);
  if(corect==1)
    alert("Comanda pe numele "+o.nume+" "+o.prenume+" a fost plasta!");
}
var c=document.getElementById("atentie").children;
c[0].style.color="purple";
var p=document.getElementById("scris").parentElement;
{
  let p=this.document.getElementById("pret");
  p.style.color="red";
}
p.style.border ="solid";
}
