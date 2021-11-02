var crypto = require('crypto');
const http = require('http');
const port = process.env.PORT?process.env.PORT:3006;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
	var md5sum = crypto.createHash('md5');
	md5sum.update(Math.random()+'');
	var hash = md5sum.digest('hex');
    res.end(hash+'<br/><img src="http://www.gravatar.com/avatar/'+hash+'?s=400&d=identicon&r=PG"/>');
});
server.listen(port, () => {
  console.log(`Server running at ${port} port`);
});
