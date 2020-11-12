var http=require('http') 
var server=http.createServer(
(function(request,response){
console.log("Am primit o cerere..");
response.writeHead(200, {"Content-Type" : "text/html"});
response.end('<html><body><p>Casa florilor este o florarie aparte, care ofera un serviciu unic. Buchetele noastre de flori sunt facute numai cu cele mai proaspete flori.Selectia noastra de flori usureaza gasirea aranjamentului perfect pentru orice ocazie</p></body></html>');
}));
server.listen(7000); 
console.log ('Serverul creat asteapta cereri la http://localhost:7000/');