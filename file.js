var fs = require('fs');

fs.readFile('test.json',function (err, data) {
if (err) throw err;
var json=JSON.parse(data); //transformare din string JSON într-un array JavaScript
fs.writeFileSync('test.html','<html><body>');
for(var i=0; i<json.length;i++)
fs.appendFileSync('test.html','<img src='+json[i].picture.source +'>');
fs.appendFileSync('test.html','</html></body>');
console.log('Operatie completa.');
});

