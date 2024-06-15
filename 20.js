const EventEmitter = require("events")
const event = new EventEmitter();

event.on("saymyname",()=>{
    console.log("your name is dhyey");
})
event.on("saymyname",()=>{
    console.log("your name is bahadur");
})
event.on("saymyname",()=>{
    console.log("your name is vinod");
})

event.emit("saymyname");

// event.on("checkpage",(status, msg)=>{
//     console.log(`status code is ${status} and the page is ${msg}`);
// }) // first you have to define event before emit. otherwise the event is not work.

// event.emit("checkpage",200,"ok")