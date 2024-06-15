const fs = require('fs')
const http = require('http')

const server = http.createServer();
// this technic will load data and than print data in output.
// server.on("request",(req,res)=>{
//     fs.readFile('index.txt',(err, data)=>{
//         if (err) {
//             return console.log(err);
//         }
//         res.end(data.toString())
//     })
// })

// 2nd method
// create readable stream
// above code prints the loaded data means not wait for load full data before printing.
server.on("request", (req, res) =>{
    const rstream = fs.createReadStream("input.txt")
    
    // rstream.on("data", (chunkdata)=>{
    //     res.write(chunkdata)
    // })
    // rstream.on("end",()=>{
    //     res.end()
    // })
    // rstream.on('error',(err)=>{
    //     console.log(err);
    //     res.end('file not found.')
    // })

    // 3rd method
    rstream.pipe(res)
})

server.listen(80,"127.0.0.1",()=>{
    console.log("server is running on port no. 80");
})