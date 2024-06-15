const http = require("http")

const server = http.createServer((req, res)=>{
    // res.end("hello we created server")
    // console.log(req.url); //shows what user type into the url
    if (req.url == "/") {
        res.end("This is home page.")
    } else if(req.url == "/about"){
        res.end("This is about page.")
    }
    else if(req.url == "/contact"){
        res.write("This is contact page.")
        res.end()
    }
    else{
        res.writeHead(404, {"Content-type":"text/html"}) // this is useful for sending status code. i think write content type is optional.
        res.end("<h1>404, page not found</h1>")
    }
})

server.listen("80","127.0.0.1",()=>{
    console.log("listening to the port no. 80");
})