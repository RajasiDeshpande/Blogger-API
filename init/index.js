const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/blogs.js");
async function main() {
    await mongoose.connect('mongodb+srv://rajasi:R%40jasi04@cluster0.pjlgq.mongodb.net/wanderlust?retryWrites=true&w=majority&appName=Cluster0');
}
main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>{
    console.log(err);
})
const initDB=async ()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data is initialized");
}
initDB();