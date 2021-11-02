const crypto = require('crypto');
const http = require('http');
const url = require('url');
const port = process.env.PORT?process.env.PORT:3006;

/**
 * md5 hash generator
 */
const md5 = function(text) {
	let md5sum = crypto.createHash('md5');
	md5sum.update(text);
	return md5sum.digest('hex');
}

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

	/**
	 * if ?q=email or ?q=someText ...
	 */
	let q = url.parse(req.url, true).query;
	let t = q!=null && q['q'] != null ? q['q'] : Math.random()+'';
	let hash = md5(t);

	res.end('Hash: '+hash+'<br/>Gravatar Icon:<br/><img src="http://www.gravatar.com/avatar/'+hash+'?s=400&d=identicon&r=PG"/>');
});

server.listen(port, () => {
  console.log(`Server running at ${port} port`);
});
