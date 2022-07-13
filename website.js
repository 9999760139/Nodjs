const { Console } = require('console');
const http = require('http')
const fs = require('fs')

const port = process.env.PORT || 3001;

const server = http.createServer((req,res) =>{
    res.statusCode=200;
    // console.log(req.url)
    res.setHeader('Content-Type', 'text/html')
    if(req.url== '/'){
        res.statusCode=200;
        res.end('<h1>He is a nitin jangra <p>he is a good guy</p></h1>');
    }
    else if(req.url == '/about'){
        res.statusCode=200;
        res.end('<h1>about the  nitin jangra <p>this is a about page for nitin jangra</p></h1>');
    }
    else if(req.url== '/home'){
        res.statusCode=200;
        const data = fs.readFileSync('index.html')
        res.end(data.toString())
    }
    else {
        res.statusCode = 404;
        res.end('<h1>Not Found <p>the page is not found</p></h1>');
    }
})

server.listen(port,() =>{
    console.log(`server is loading on port ${port}`);
});