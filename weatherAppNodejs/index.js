// const express = require("express")
const fs = require("fs")
const http = require('http')
var requests = require('requests');

const homefile = fs.readFileSync("home.html", "utf-8")

function replaceval(tempval, orgval){
    let temperature= tempval.replace("tempval", orgval.main.temp)
    // temperature = temperature.replace("{%tempval%}", orgval.main.temp)
    console.log(temperature);
    return temperature;
}

const server = http.createServer((req, res) => {
    if (req.url =="/") {
        requests('https://api.openweathermap.org/data/2.5/weather?q=ahmedabad&units=metric&appid=846f6527e982ac07bded68d54e17a2e8')
            .on('data', function (chunk) {
                const obj = JSON.parse(chunk)
                const arr = [obj]
                // console.log(chunk)
                // console.log(obj);
                // console.log(arr[0].main.temp);
                const realtimedata = arr.map(val=>
                    // console.log(val.main)
                    replaceval(homefile,val)
                    ).join("")
                    // console.log(realtimedata);
                    res.write(realtimedata)
            })
            .on('end', function (err) {
                if (err) return console.log('connection closed due to errors', err);

                // console.log('end');
                // res.end()
            });
    }
})

server.listen(5000, "127.0.0.1", () => {
    console.log("successfully running on port no. 5000");
})