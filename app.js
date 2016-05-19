var crypto = require('crypto');
const http = require('http');
const hostname = '127.0.0.1';
const port = process.env.PORT?process.env.PORT:3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
	var md5sum = crypto.createHash('md5');
	md5sum.update(Math.random()+'');
	var hash = md5sum.digest('hex');
    res.end(hash+'<br/><img src="http://www.gravatar.com/avatar/'+hash+'?s=400&d=identicon&r=PG"/>');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});