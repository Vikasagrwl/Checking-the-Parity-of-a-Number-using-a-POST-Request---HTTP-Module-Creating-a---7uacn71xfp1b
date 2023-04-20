const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    const chunks = [];

    req.on('data', chunk => {
      const buf = Buffer.from(chunk);
      const str = buf.toString();
      chunks.push(str);
      const obj = JSON.parse(chunks)
      const value = obj.num1;
      
      if(Number.isInteger(value)){
        let result;
        if(value % 2 === 0){
          result = 'even';
        } else{
          result = 'odd';
        }
        if(result === 'even'){
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(`'The number ${value} is even'`);
        } else{
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end(`'The number ${value} is odd'`);
        }
      } else {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end(JSON.stringify({ error: 'Invalid number' }));
      }
      // Write the code here to check if the number is odd or even
    });
  }
  

  
});


module.exports = server;
