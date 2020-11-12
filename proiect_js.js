window.onload=function()
{

   var x=document.getElementById("imag1");
     alert(x.src); //sursa imaginii
     x.src="img1.jpg"; //schimb sursa imaginii
   var x=document.getElementById("aa");
   x.onclick=function()
   {
      var y=document.createElement("img");
      y.src="f2.jpg";
      y.style.zIndex=3;
	  document.body.appendChild(y);
	  y.style.width="30%";
      y.style.height="auto";
	  y.onclick=function(){
		  y.remove();
	  }

 }
   var col = document.getElementsByTagName("h2");
    for(var i=0;i<col.length;i++)
      col[i].style.color="purple";

 var colp = document.getElementById("aa");
     colp.style.color="red";
     colp.style.fontSize="20px";
var colp2=document.querySelectorAll("li:nth-of-type(2n+1)");
     for(i=0;i<colp2.length;i++)
     colp2[i].style.color="blue";
 var coli=document.getElementsByClassName("cl");
     for(j=0;j<coli.length;j++)
       coli[j].style.border="solid green";
var list = document.getElementById("myList");
list.onclick=function()
{
         list.removeChild(list.childNodes[0]);
}
      
}
