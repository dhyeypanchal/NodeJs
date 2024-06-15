const mongoose = require("mongoose")
const validator = require("validator")

// Schema: schima defines the structure of the document, default values, validators etc..
// connection creation and creation a new db.
mongoose.set('strictQuery', true) // this is use for removing deprication warning.
mongoose.connect("mongodb://localhost:27017/ttchannel",{useNewUrlParser:true})
.then(()=>{
    console.log("connection successfull");
})
.catch((err)=>{
    console.log(err);
})

const playlistSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        unique:true,
        lowercase:true,
        trim:true,
        minlength:[2,"min 2 letters"],
        maxlength:30
    },
    ctype:{
        type:String,
        required:true,
        lowercase:true,
        enum:["frontend","backend","database"]
    },
    videos:{
        type:Number,
        validate(value){
            if(value<0){
                throw new Error("videos should be greater than and equals to 0.")
            }
        }
        // another method to write validator.
        // validate:{
        //     validator:function(value){
        //         return value.length<0
        //     },
        //     message:"videos count should not be negative"
        // }
    },
    author:String,
    email:{
        type:String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is not valid")
            }
        }

    },
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})

const Playlist = new mongoose.model("Playlist",playlistSchema)

const createDocument = async()=>{
    try{
    //     const JSPlaylist = new Playlist({
    //         name:"JavaScript",
    //         ctype:"Front End",
    //         videos:150,
    //         author:"Thapa Technical",
    //         active:true
    //     })

    //     const mongodbPlaylist = new Playlist({
    //         name:"Mongodb",
    //         ctype:"Database",
    //         videos:10,
    //         author:"Thapa Technical",
    //         active:true
    //     })
        const mongoosePlaylist = new Playlist({
            name:"Mongoossee",
            ctype:"Database",
            videos:4,
            author:"Thapa Technical",
            email:"thapa@hd.co", //.co is also valid
            active:true
        })
        // const result = await reactPlaylist.save();
        const result = await mongoosePlaylist.save();
    //     const result = await Playlist.insertMany([JSPlaylist, mongodbPlaylist, mongoosePlaylist]);
        console.log(result);
    //     // reactPlaylist.save()
    }catch(err){
        console.log(err);
    }
}
createDocument()

// const createDocument = async()=>{
//     try{
//         // const result = await Playlist.find({ctype:"Front End"})
//         const result = await Playlist.find({author:"Thapa Technical"})
//         // const result = await Playlist.find({videos:{$gte:50}})
//         // const result = await Playlist.find({ctype:{$in:["Back End","Database"]}})
//         // const result = await Playlist.find({ctype:{$nin:["Back End","Database"]}})
//         // const result = await Playlist.find({$and:[{name:"Mongoose"},{ctype:"Database"}]})
//         .select(({name:1,_id:0}))
//         // .countDocuments() // for counting the no. of collections.
//         .sort({name: 1}) // 1 for ascending and -1 for descending
//         // .limit(1)
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

const updateDocument = async(id)=>{
    try{
        // const result = await Playlist.updateOne({_id:id},{$set:{
        const result = await Playlist.findByIdAndUpdate({_id:id},{$set:{
            name:"JavaScript"
        }
        }, {
            new: true //if we didn't define this property so in console.log we get old name as output not in database in database it updated but not shows in console.log
        })
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

// createDocument();
// updateDocument("63fb19512dc81abcb97e542b");

// delete the document.
const deleteDocument = async (_id) => {
    try {
        // const result = await Playlist.deleteOne({_id})
        const result = await Playlist.findByIdAndDelete({ _id }) //no need to write key value pair cause we use object destructuring.
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

// deleteDocument("63fc365e1a12f2e0f331394f");