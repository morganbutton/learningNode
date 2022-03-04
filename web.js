/*Making a Node Server*/
let http = require("http");
function process_request(req, res){
    let body = "Thanks for calling!\n";
    let content_length = body.length;
    res.writeHead(200,{
        "Content-Length":content_length,
        "Content-Type": "text/plain"
    });

res.end(body);
}
let s = http.createServer(process_request);
s.listen(8080);