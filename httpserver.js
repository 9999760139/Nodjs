const { Console } = require('console');
const http = require('http')

const port = process.env.PORT || 3001;


const server = http.createServer((req,res) =>{
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>He is a nitin jangra <p>he is a good guy</p></h1>');
})

server.listen(port,() =>{
    console.log(`server is loading on port ${port}`);
});